import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Detail(props) {
    const urlIndex = props.params.index
    const db = (await connectDB).db("forum")
    let result = await db.collection('post').findOne({ _id: new ObjectId(urlIndex)})
    
    return(
        <div>       
            <h4>상세페이지</h4>
            <h4>{result.title}</h4>
            <h4>{result.content}</h4>
        </div>
    )
}