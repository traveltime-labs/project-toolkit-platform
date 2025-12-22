import Link from "next/link";

export default function sidebar () {
    return  (
        <div>
            <div>管理後台sidebar</div>
            <div className="">
                <Link href="/admin/posts">
                    文章列表
                </Link>
                <div>圖表</div>
            </div>
        </div>
    )
}