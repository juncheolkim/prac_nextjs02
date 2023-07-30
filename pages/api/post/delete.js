import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { authOptions } from "../auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

export default async function handler(req, res) {
    let session = await getServerSession(req, res, authOptions);
    console.log(session);
    if (req.method == "GET") {
        const db = (await connectDB).db("forum");
        const postId = new ObjectId(req.query.id);
        const post = await db.collection("post").findOne({ _id: postId });
        if (post.author == session.user.email) {
            const result = await db
                .collection("post")
                .deleteOne({ _id: postId });
            res.status(200).json({
                acknowledged: result.acknowledged,
                deletedCount: result.deletedCount,
            });
        } else {
            return res.status(500).json("현재유저와 작성자 불일치");
        }
    }
}
