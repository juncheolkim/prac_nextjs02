import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function name(props) {
    const db = (await connectDB).db("forum");
    let result = await db
        .collection("post")
        .findOne({ _id: new ObjectId(props.params.id) });

    return (
        <div className="p-20">
            <h4>수정페이지</h4>
            <form action="/api/post/edit" method="POST">
                <input type="hidden" name="id" value={result._id.toString()} />
                <input name="title" defaultValue={result.title} />
                <input name="content" defaultValue={result.content} />
                <button type="submit">글 수정하기</button>
            </form>
        </div>
    );
}
