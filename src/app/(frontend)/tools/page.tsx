
import Layout from "@/components/frontend/layout";
import Content from "@/modules/frontend/tools/content";
import { Suspense } from "react";


function ToolsList () {
    return (
        <Layout>
            <Suspense fallback={<div>Loading posts...</div>}>
                <Content />
            </Suspense>
        </Layout>
    )
}

export default ToolsList;