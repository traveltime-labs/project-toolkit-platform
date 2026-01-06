"use client"
import { Switch } from "@/components/ui/switch";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { IoIosSearch } from "react-icons/io";
import IconButton from "@/components/IconButton";
import { useTheme } from "next-themes";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { MdOutlineWbSunny } from "react-icons/md";

const header = ({toggleSidebar}: { toggleSidebar: () => void }) => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const [keyword, setKeyword] = useState('')
    const serachKeyword = () => {
        console.log('搜尋關鍵字')
    }
    
    return (
        <header className="flex sticky top-0 left-0 right-0 items-center justify-between mx-auto bg-white dark:bg-black/50 backdrop-blur-sm p-2 md:px-6 md:py-4 z-50 w-full">
            <h1 className=" font-bold text-dark dark:text-white transition-colors">
                Toolkit 工具集合
            </h1>
            
            <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                <div className='hidden md:flex items-center gap-2 border rounded-4xl px-2 py-1.5'>
                    <input type="text" className="w-40"
                        placeholder="Search..."
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        onKeyDown = {(e) => { if (e.key === 'Enter') serachKeyword() }}
                    />
                    <IconButton className=" flex justify-end">
                        <IoIosSearch />
                    </IconButton>
                </div>

                
                <div className="block md:hidden">
                    <IoIosSearch />
                </div>
                
                <div data-orientation="vertical" className="bg-border w-0.5 h-4 hidden lg:block"></div>
                    <IconButton onClick={toggleTheme}>
                        {theme === 'light' ? <FaMoon /> : <MdOutlineWbSunny />}
                    </IconButton>
                    
                    <div data-orientation="vertical" className="bg-border w-0.5 h-4 hidden lg:block"></div>

                    <IconButton>
                        中文
                    </IconButton>
                
                <div className=" lg:hidden" onClick={toggleSidebar}>
                    <RxHamburgerMenu className="btn-sidebar" />
                </div>
            </div>
        </header>
    );
}


export default header;