import Layout from "@/components/frontend/layout";
import TextCounter from "./textCounter";

/*
text/
├── page.tsx           ← /tools/text 入口，Server Component
├── TextCounter.tsx    ← Client Component，純畫面 + 使用 hook
└── useTextStats.ts    ← 自訂 hook，純邏輯（state & 計算）
*/

export default function Page() {
  return (
    <Layout>
        <TextCounter />
    </Layout>
  );
}
