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
                        onClick={(e) => {
                            // fetch("/api/post/delete", {
                            //     method: "POST",
                            //     body: `${a._id}`,
                            // })
                            //     .then((r) => {
                            //         if (r.status == 200) {
                            //             return r.json();
                            //         } else {
                            //             // 서버가 에러 코드 전송시
                            //         }
                            //     })
                            //     .then((r) => {
                            //         // 성공시 실행할 코드
                            //         e.target.parentElement.style.opacity = 0;
                            //         setTimeout(() => {
                            //             e.target.parentElement.style.display =
                            //                 "none";
                            //         }, 1000);
                            //         console.log(r);
                            //     })
                            //     .catch((error) => {
                            //         // 인터넷 문제로 실패시 실행할 코드
                            //         console.log(error);
                            //     });
                            fetch(`/api/post/delete?id=${a._id}`) // query string
                                .then((r) => {
                                    if (r.status == 200) {
                                        return r.json();
                                    } else {
                                        // 서버가 에러 코드 전송시
                                    }
                                })
                                .then((r) => {
                                    // 성공시 실행할 코드
                                    e.target.parentElement.style.opacity = 0;
                                    setTimeout(() => {
                                        e.target.parentElement.style.display =
                                            "none";
                                    }, 1000);
                                    console.log(r);
                                })
                                .catch((error) => {
                                    // 인터넷 문제로 실패시 실행할 코드
                                    console.log(error);
                                });
                            // fetch("/api/abc/1123"); // dynamic route , URL 파라미터 문법
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
