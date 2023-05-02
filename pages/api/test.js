import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
    const db = (await connectDB).db("forum");

    const title = 요청.body.title;
    const content = 요청.body.content;
    const data = { title: title, content: content };

    await db.collection("post").insertOne(data);

    return 응답.status(200).json("처리완료");
}
