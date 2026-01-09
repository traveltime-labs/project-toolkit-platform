"use client";

import Link from "next/link";
import useQueryPostList from "@/hooks/use-query-post-list";
import Image from "next/image";

// 假模擬
import { toolsAPI } from "@/config/fackToolsAPI";


// 文章列表頁面
const PostList = () => {
  let {data, isLoading, error} = useQueryPostList();
  // 假模擬
  if (data?.posts) {
    data.posts = toolsAPI
  }
  // 假模擬結束
  const {posts=[], totalPages} = data || {};
  return (
    <>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 mx-4 lg:mx-0">
      {isLoading && <div>Loading...</div>}
      {error && <div> {error.message} </div>}
      {!isLoading && posts.length === 0 && <div>No posts found.</div>}
      {!isLoading && posts.map((post: Post) => (
          <Link className="block border border-zinc-900/10 dark:border-white/20 relative overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer will-change-transform animate-fade animate-duration-500 rounded-2xl " key={post.id} 
          href={post.category == '小工具' ? `${post.link.page}` : `/post/${post.id}`}>
            <div className="aspect-video bg-gray-700">
              {post.imageUrl && (<Image className="object-cover w-full h-full" src={post.imageUrl} alt="" width={400} height={225}/>)}
            </div>
            <div className="p-4 bg-white dark:bg-black transition-colors">
              <h3 className="font-bold mb-2"> 
                {post.title} <small className="bg-amber-800 p-1 rounded-sm transition-colors text-white">{post.group}</small>
              </h3>
              <p className="text-blue-400 text-xs mb-4"> By Bruce </p>
              <p className="text-gray-400 text-sm mb-2">
                {post.content}
              </p>
            </div>
            <div className="flex items-center justify-end">
              {/* <a className="flex items-center" href="">
                <IoIosLink />
                github
              </a>
              <a className="flex items-center" href="">
                <IoIosLink />
                npm
              </a>
              <a className="flex items-center" href="">
                <IoIosLink />
                webLink
              </a> */}
            </div>
            {/* <Post post={post} /> */}
          
          </Link>
      ))}
    </div>
    {/* 
      <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    */}
    </>
  );
};

export default PostList;
