import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function list() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((a, i) => (
                <div className="list-item" key={i}>
                    <h4>{result[i].title}</h4>
                    <DetailLink _id={a._id}></DetailLink>
                    <p>{result[i].content}</p>
                </div>
            ))}
        </div>
    );
}
