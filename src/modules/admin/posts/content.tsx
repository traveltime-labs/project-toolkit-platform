"use client";

import Post from "@/components/frontend/post";
import { useRouter, useParams } from "next/navigation";
import useQueryPost from "@/hooks/use-query-post";

// 列表頁
const Content = () => {
  const router = useRouter();
  const {id} = useParams();
  console.log(id)
//   const { data, isLoading, error} = useQueryPost();
  return (
    <div>
      <button>新增</button>
        <table>
            <thead>
                <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Author</th>
                <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sample Post 1</td>
                    <td>Admin</td>
                    <td>2024-06-01</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Sample Post 2</td>
                    <td>Editor</td>
                    <td>2024-06-02</td>
                </tr>
                {/* 更多列可以在此添加 */}
            </tbody>
        </table>
    </div>
  );
};

export default Content;
