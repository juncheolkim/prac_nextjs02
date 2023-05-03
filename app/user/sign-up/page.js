export default function SignUp() {
    return (
        <div className="p-20">
            <h4>회원가입 페이지</h4>
            <form action="/api/user/sing-up" method="POST">
                <input name="id" placeholder="아이디" />
                <input name="pw" placeholder="비밀번호" />
                <button type="submit">회원가입 하기</button>
            </form>
        </div>
    );
}
