import { connectDB } from "@/util/database";
import DetailLink from "./DetailLink";

export default async function list() {
    const db = (await connectDB).db("forum");
    let result = await db.collection("post").find().toArray();

    return (
        <div className="list-bg">
            {result.map((a, i) => (
                <div className="list-item" key={i}>
                    <h4>{result[i].title}</h4>
                    <DetailLink url={a._id.toString()}></DetailLink>
                    <p>{result[i].content}</p>
                </div>
            ))}
        </div>
    );
}
