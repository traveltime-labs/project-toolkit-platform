
const sidebar = () => {
    return (
        <div className="sideBar fixed bg-black/50 w-full h-full z-10 flex flex-col gap-12 overflow-auto px-6 py-6 backdrop-blur-sm"  >
            <div className="text-muted-foreground text-sm font-medium">Menu</div>
            <div className="flex flex-col gap-3">
                <a className="text-2xl font-medium" href="/">aaa</a>
                <a className="text-2xl font-medium" href="/">aaa</a>
                <a className="text-2xl font-medium" href="/">aaa</a>
            </div>
        </div>
    )
}

export default sidebar;