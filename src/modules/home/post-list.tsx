"use client";

import Link from "next/link";
import Post from "@/components/post";
import Pagination from "@/modules/home/pagination";
import useQueryPostList from "@/hooks/use-query-post-list";
import { MdSystemUpdateAlt } from "react-icons/md";
import { IoIosLink } from "react-icons/io";


// 文章列表頁面
const PostList = () => {
  let {data, isLoading, error} = useQueryPostList();
  // 假模擬
  const fackData = [
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      tags: ["news", "updates"],
      groups: "小工具",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "小工具",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "小工具",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "套件",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "套件",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "套件",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "小工具",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
    {
      id: 2,
      title: "First Post2",
      content: "This i2222222s the content of the first post.",
      tags: ["news", "updates"],
      groups: "小工具",
      author: "Wendy",
      createdAt: "2024-06-01",
      updateAt: "2024-06-05",
      link: {
        githubLink: '/',
        npmLink: '/',
        webLink: '/',
      }
    },
  ]
  if (data?.posts) {
    data.posts = fackData
  }
  // 假模擬結束
  const {posts=[], totalPages} = data || {};
  return (
    <>
    {/* <div className="pt-4 text-center">
      ui元件, 小工具
    </div> */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {isLoading && <div>Loading...</div>}
      {error && <div> {error.message} </div>}
      {!isLoading && posts.length === 0 && <div>No posts found.</div>}
      {!isLoading && posts.map((post: Post) => (
          <Link className="p-4 pb-12 block border border-white/20 relative  overflow-hidden transition-transform duration-300 hover:-translate-y-2 cursor-pointer will-change-transform animate-fade animate-duration-500" key={post.id} href={`/post/${post.id}`}>
            <div className="aspect-video bg-gray-700">
              <img className="object-cover w-full h-full" src="" alt="" />
            </div>
            <div className="mt-8">
              <h3 className="font-bold mb-2"> 
                {post.title} <small className="bg-amber-800">{post.groups}</small>
              </h3>
              <p className="text-blue-400 text-xs mb-4"> By Bruce </p>
              <p className="text-gray-400 text-sm mb-2">
                {post.content}
              </p>
            </div>
            <div className="flex items-center justify-end">
              <a className="flex items-center" href="">
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
              </a>
            </div>
            {/* <Post post={post} /> */}
          
          </Link>
      ))}
    </div>
    <div className="mt-8">
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};

export default PostList;
