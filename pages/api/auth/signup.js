import { connectDB } from "@/util/database";
import bcrypt from "bcrypt";

export default async function handler(요청, 응답) {
    if (요청.method == "POST") {
        let hash = await bcrypt.hash(요청.body.password, 10);
        요청.body.password = hash;
        let db = (await connectDB).db("forum");
        let userExisted = await db
            .collection("user_cred")
            .findOne({ email: 요청.body.email });
        console.log(userExisted);
        if (!userExisted) {
            await db.collection("user_cred").insertOne(요청.body);
            응답.status(200).json("가입성공");
        } else {
            응답.status(200).json("이미 등록되어있는 이메일입니다.");
        }
    }
}
