"use client"

import AppSidebar from "@/components/admin/app-sidebar"
import Footer from "@/components/footer";
import { ThemeProvider } from 'next-themes'
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { useState } from 'react'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
    >
      <SidebarProvider>
        <AppSidebar />
        <main>
          <SidebarTrigger />
          {children}
        </main>
      </SidebarProvider>
    </ThemeProvider>
  )
}

export default Layout;
