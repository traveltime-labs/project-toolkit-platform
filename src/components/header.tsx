"use client"
import { Switch } from "@/components/ui/switch";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
import { IoIosSearch } from "react-icons/io";
import IconButton from "@/components/IconButton";
import { useTheme } from "next-themes";
import { RxHamburgerMenu } from "react-icons/rx";

const header = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");
    const toggleSideBar = () => {
        const btnSideBar = document.querySelector('.btn-sidebar');
        if (btnSideBar) {
            btnSideBar.addEventListener('click', () => {
                const sideBar = document.querySelector('.sideBar');
                if (sideBar) {
                    sideBar.classList.toggle('hidden');
                } else {
                    console.log('no sideBar');
                }
            });
        }
    }
    return (
        <header className="flex sticky top-0 left-0 right-0 items-center justify-between  mx-auto bg-black/50 backdrop-blur-sm p-2 md:px-6 md:py-4 z-50">
            <div>
                Toolkit 工具集合
            </div>
            
            <div className="ml-auto flex items-center gap-2 md:flex-1 md:justify-end">
                <IconButton className=" w-40 border-1 flex justify-end">
                    <IoIosSearch />
                </IconButton>

                <div data-orientation="vertical" className="bg-border w-0.5 h-4 hidden lg:block"></div>
                
                <IconButton onClick={toggleTheme}>
                    <WiMoonAltThirdQuarter />
                </IconButton>
                
                <div data-orientation="vertical" className="bg-border w-0.5 h-4 hidden lg:block"></div>

                <IconButton>
                    中文
                </IconButton>
                
                <div className=" lg:hidden">
                    <RxHamburgerMenu className="btn-sidebar" onClick={toggleSideBar}/>
                </div>
            </div>
        </header>
    );
}


export default header;