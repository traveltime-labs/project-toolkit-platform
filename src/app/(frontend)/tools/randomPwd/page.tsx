import Layout from "@/components/frontend/layout";
import Content from "./content";

/*
text/
├── page.tsx           ← /tools/text 入口，Server Component
├── Content.tsx      ← 主要的 UI Component，Client Component
└── useTextStats.ts    ← 自訂 hook，純邏輯（state & 計算）
*/

// 隨機密碼產生器
export default function Page() {

    return (
        <Layout>
            <Content />
        </Layout>
    );
}
