export default async function handler(요청, 응답) {
    console.log("안녕", 요청.query);

    return 응답.status(200).json("처리완료");
}
