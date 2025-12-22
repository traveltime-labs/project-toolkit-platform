import Layout from "@/components/frontend/layout";
import Content from "@/modules/frontend/home/content";
import { Suspense } from "react";

// 首頁列表
export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading posts...</div>}>
        <Content />
      </Suspense>
    </Layout>
  );
}
