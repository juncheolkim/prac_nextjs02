import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(요청, 응답) {
    // 현재 로그인된 유저 정보
    let session = await getServerSession(요청, 응답, authOptions);
    if (session) {
        if (요청.method == "POST") {
            const db = (await connectDB).db("forum");
            const title = 요청.body.title;
            const content = 요청.body.content;
            const data = {
                title: title,
                content: content,
                author: session.user.email,
            };
            if (title == "") {
                return 응답.status(500).json("제목을 써주세요");
            } else if (content == "") {
                return 응답.status(500).json("내용을 써주세요");
            } else {
                try {
                    await db.collection("post").insertOne(data);
                    return 응답.redirect(302, "/list");
                } catch (error) {
                    console.log(error);
                    return 응답.status(500).json("db문제");
                }
            }
        }
    }
}
