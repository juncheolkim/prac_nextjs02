export default function Write() {
    return (
        <div>
            <h4>글 작성</h4>
            <form action="/api/test" method="POST">
                <input name="title"></input>
                <input name="content"></input>
                <button type="submit">글 작성하기</button>
            </form>
        </div>
    );
}
