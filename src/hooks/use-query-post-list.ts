import { useQuery } from "@tanstack/react-query"
import { useSearchParams } from "next/navigation"
import { getPostList } from "@/services/post"

const useQueryPostList = () => {
    const searchParams = useSearchParams()
    const currentPage = searchParams.get("page") || "1"

    // useQuery 主要處理：成功 錯誤 等狀態管理 共享數據 狀態
    return useQuery({
        queryKey: ["posts", currentPage], // 最主要的作用就是幫queryKey做快取區分
        queryFn: () => getPostList(currentPage)
    })
}

export default useQueryPostList