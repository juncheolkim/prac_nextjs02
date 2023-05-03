import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        const db = (await connectDB).db("forum");

        const title = 요청.body.title;
        const content = 요청.body.content;
        const id = 요청.body.id;
        if (title == "") {
            return 응답.status(500).json("제목을 써주세요");
        } else if (content == "") {
            return 응답.status(500).json("내용을 써주세요");
        } else {
            try {
                await db
                    .collection("post")
                    .updateOne(
                        { _id: new ObjectId(id) },
                        { $set: { title: title, content: content } }
                    );
                return 응답.redirect(302, "/list");
            } catch (error) {
                console.log(error);
                return 응답.status(500).json("db문제");
            }
        }
    }
}
