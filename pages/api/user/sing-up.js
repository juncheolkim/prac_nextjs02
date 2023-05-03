import { connectDB } from "@/util/database";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        const db = (await connectDB).db("forum");

        const id = 요청.body.id;
        const pw = 요청.body.pw;
        const data = { id: id, pw: pw };
        if (id == "") {
            return 응답.status(500).json("아이디를 입력하세요");
        } else if (pw == "") {
            return 응답.status(500).json("비밀번호을 입력하세요");
        } else {
            let userList = await db.collection("user").find().toArray();
            if (userList.length === 0) {
                console.log("유저가 한명도 없다.");
                await db.collection("user").insertOne(data);
                return 응답.redirect(302, "/list");
            } else {
                if (await db.collection("user").findOne({ id: id })) {
                    return 응답
                        .status(500)
                        .json("이미 존재하는 아이디 입니다.");
                } else {
                    await db.collection("user").insertOne(data);
                    응답.redirect(302, "/list");
                }
            }
        }
    } else {
        return 응답.status(405).send("Method Not Allowed");
    }
}
