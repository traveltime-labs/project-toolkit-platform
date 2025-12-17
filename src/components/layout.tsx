"use client"

import Header from "@/components/header";
import Footer from "@/components/footer";
import Sidebar from "@/components/sidebar";
import { ThemeProvider } from 'next-themes'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
    <div className="">
      <Header/>
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
