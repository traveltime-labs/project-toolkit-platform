"use client"

import Header from "@/components/frontend/header";
import Sidebar from "@/components/frontend/sidebar";
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes'
import { useState, useEffect } from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleSidebar = () => {
    setIsSidebarOpen(isSidebarOpen => !isSidebarOpen);
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
    <div className="flex flex-col items-center bg-gray-200/35 dark:bg-black">
      <Header toggleSidebar={toggleSidebar}/>
        {isSidebarOpen && <Sidebar />}
        <div className="container mx-auto h-auto min-h-80">
          {children}
        </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
};

export default Layout;
