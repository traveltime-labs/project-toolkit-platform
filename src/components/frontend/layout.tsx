"use client"

import Header from "@/components/frontend/header";
import Sidebar from "@/components/frontend/sidebar";
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes'
import { useState } from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {
  const [ isSidebarOpen, setIsSidebarOpen ] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
    <div className="">
      <Header toggleSidebar={toggleSidebar}/>
      {isSidebarOpen && <Sidebar />}
      <div className="container mx-auto">
        {children}
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
};

export default Layout;
