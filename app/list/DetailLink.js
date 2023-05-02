"use client";

import { useRouter } from "next/navigation";

export default function DetailLink(props) {
    let router = useRouter();

    return (
        <button
            onClick={() => {
                router.push(`/detail/${props.url}`);
            }}
        >
            상세페이지
        </button>
    );
}
