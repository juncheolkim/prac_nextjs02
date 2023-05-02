export default function time(요청, 응답) {
    let currentTime = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Seoul",
    });
    return 응답.status(200).json(currentTime);
}
