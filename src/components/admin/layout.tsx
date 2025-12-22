"use client"

import Sidebar from "@/components/admin/sidebar"
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes'
import { useState } from 'react'


const Layout = ({ children }: { children: React.ReactNode }) => {

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
    <div className="">
      <Sidebar/>
      <div className="container mx-auto">
        {children}
      </div>
      <Footer/>
    </div>
    </ThemeProvider>
  );
};

export default Layout;
