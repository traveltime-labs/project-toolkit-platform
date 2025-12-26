
const sidebar = () => {
    return (
        <div className="sideBar fixed bg-black/50 w-full h-full z-10 flex flex-col gap-12 overflow-auto px-6 py-6 backdrop-blur-sm lg:hidden" >
            登入
            <div className="flex flex-col gap-3">
                <a className="text-muted-foreground text-sm font-medium" href="/">UI元件</a>
                <a className="text-2xl font-medium" href="/">vue2-btn</a>
                <a className="text-2xl font-medium" href="/">aaa</a>
                <a className="text-2xl font-medium" href="/">aaa</a>
            </div>
            
            <div className="flex flex-col gap-3">
                <div className="text-muted-foreground text-sm font-medium">小工具</div>
                <a className="text-2xl font-medium" href="/tools/textTool">文字統計小工具</a>
                <a className="text-2xl font-medium" href="/tools/timestam">Timestamp ↔ 日期工具</a>
                <a className="text-2xl font-medium" href="/">圖片處理</a>
                <a className="text-2xl font-medium" href="/">編碼</a>
            </div>

        </div>
    )
}

export default sidebar;