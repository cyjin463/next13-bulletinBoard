import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";


export default async function List() {
    const client = await connectDB;
    const db = client.db("forum")
    let result = await db.collection('post').find().toArray()

    let data = result

    return (
      <div className="list-bg">
        {data.map((post, index) => {
            return (
                <div className="list-item">
                    <Link prefetch={false} href={`/detail/${post._id}`}>
                        <h4>{post.title}</h4>
                    </Link>
                    <DetailLink/>
                    <p>{post.content}</p>
                </div>
            )
            })}
      </div>
    )
  } 