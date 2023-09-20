import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
    const client = await connectDB;
    const db = client.db("forum")
    let result

    if(요청.method == 'GET') {
        result = await db.collection('post').find().toArray()
        return 응답.status(200).json(result)
    }
    if(요청.method == 'POST') {
        if(요청.body.title == '' || 요청.body.content == '' ) {
            return 응답.status(500).json('빈칸 없이 작성')
        }
        try {
            result = await db.collection('post').insertOne(요청.body)
            return 응답.status(200).redirect('/list')
        }catch(e) {
            console.log(e)
        }
        
    }
}