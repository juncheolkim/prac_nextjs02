"use client";

import Link from "next/link";
import DetailLink from "./DetailLink";

export default function ListItem(props) {
    let result = props.result;
    return (
        <div>
            {result.map((a, i) => (
                <div className="list-item" key={i}>
                    <h4>{result[i].title}</h4>
                    <p>{result[i].content}</p>
                    <Link href={`/edit/${a._id}`}>✏️</Link>
                    <span
                        onClick={() => {
                            fetch("/api/test", {
                                method: "POST",
                                body: "데이터",
                            }).then(() => {
                                console.log(123123);
                            });
                        }}
                    >
                        🗑️
                    </span>
                    <DetailLink url={a._id.toString()}></DetailLink>
                </div>
            ))}
        </div>
    );
}
