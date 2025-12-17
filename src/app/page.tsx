import Layout from "@/components/layout";
import Content from "@/modules/home/content";
import { Suspense } from "react";

// 首頁
export default function Home() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading posts...</div>}>
        <Content />
      </Suspense>
    </Layout>
  );
}
