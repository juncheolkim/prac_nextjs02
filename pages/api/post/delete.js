import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    if (req.method == "GET") {
        const db = (await connectDB).db("forum");
        const postId = new ObjectId(req.query.id);
        const result = await db.collection("post").deleteOne({ _id: postId });
        res.status(200).json({
            acknowledged: result.acknowledged,
            deletedCount: result.deletedCount,
        });
    }
}
