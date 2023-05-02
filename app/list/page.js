import { connectDB } from "@/util/database";
import Link from "next/link";

export default async function list() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((a, i) => (
                <Link href={`/detail/${a._id}`}>
                    <div className="list-item" key={i}>
                        <h4>{result[i].title}</h4>
                        <p>{result[i].content}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
