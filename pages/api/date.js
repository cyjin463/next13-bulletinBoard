export default async function handler(요청, 응답) {
    if(요청.method == 'GET') {
        const date = new Date()
        return 응답.status(200).json(date)
    }
}