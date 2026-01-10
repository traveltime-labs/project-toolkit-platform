"use client";

import Post from "@/components/frontend/post";
import { useRouter, useParams } from "next/navigation";
import useQueryPost from "@/hooks/use-query-post";
import Image from "next/image";
import { Switch } from "@/components/ui/switch"
import { useState } from "react";
import PostEditor from "@/modules/admin/posts/postEditor";

// 列表頁
const Content = () => {
  const router = useRouter();
  const {id} = useParams();
  // const [isOpen, setIsOpen] = useState(false);

  console.log(id)
//   const { data, isLoading, error} = useQueryPost();
  return (
    <div className="p-8 bg-white rounded-xl">
      
      <PostEditor/>

        <table className=" w-full">
            <thead className="bg-gray-200 h-10">
                <tr>
                  <th>圖片</th>
                  <th>名稱</th>
                  <th>詳細資料</th>
                  <th>時間</th>
                  <th>是否啟用</th>
                  <th>功能</th>
                </tr>
            </thead>
            <tbody>
                <tr className="border-b">
                    <td className="py-8">
                      <Image className="object-cover w-full h-full" src="https://smiletaiwan.cw.com.tw/article/6084" alt="" width={400} height={225}/>
                    </td>
                    <td>Sample Post 1</td>
                    <td>詳細資料</td>
                    <td>2024-06-01</td>
                    <td>
                      <div><Switch /></div>
                    </td>
                    <td>
                      <button>編輯</button>
                      <button>刪除</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
};

export default Content;
