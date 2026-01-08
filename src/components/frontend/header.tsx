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
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import Breadcrumb from "@/components/frontend/breadcrumb";


type HeaderProps = {
    toggleSidebar: () => void;
    isSidebarOpen: boolean;
}

const header = ({ toggleSidebar, isSidebarOpen }: HeaderProps) => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

    const [keyword, setKeyword] = useState('')
    const serachKeyword = () => {
        console.log('搜尋關鍵字')
    }
    
    return (
        <header className=" sticky top-0 left-0 right-0  bg-white dark:bg-black/50 backdrop-blur-sm z-50 w-full">
            <div className=" py-3 px-2 lg:px-12 w-full flex items-center justify-between mx-auto">
                <h1 className=" font-bold text-dark dark:text-white transition-colors">
                    <Link href="/"> Toolkit 工具集合 </Link>
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
                    
                        {/*<div data-orientation="vertical" className="bg-border w-0.5 h-4 hidden lg:block"></div>*/}
                        <IconButton onClick={toggleTheme}>
                            {theme === 'light' ? <FaMoon /> : <MdOutlineWbSunny />}
                        </IconButton>
                        
                        {/* <div data-orientation="vertical" className="bg-border w-0.5 h-4 hidden lg:block"></div> */}

                        <IconButton>
                            中文
                        </IconButton>
                    
                    <div className=" lg:hidden" onClick={toggleSidebar}>
                        {!isSidebarOpen ? <RxHamburgerMenu className="btn-sidebar" /> : <IoClose className="btn-sidebar" />}
                    </div>
                </div>
            </div>
            <Breadcrumb/>
        </header>
    );
}


export default header;