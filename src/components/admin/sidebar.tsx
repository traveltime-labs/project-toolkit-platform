import Link from "next/link";

export default function sidebar () {
    return  (
        <div className=" w-full max-w-3xs">
            後台
            <div className="">
                <Link href="/admin/posts">
                    文章列表
                </Link>
                <div>圖表</div>
            </div>
        </div>
    )
}