import Link from "next/link";
import { Sidebar, useSidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar"

export default function AppSidebar () {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
      } = useSidebar()

      const projects = [
        {
            name: 'aaa',
            url: '/admin/aaa',
        }
      ]
    return  (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                <SidebarGroupLabel>Projects</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                        {projects.map((project) => (
                            <SidebarMenuItem key={project.name}>
                            <SidebarMenuButton asChild>
                                <a href={project.url}>
                                    {/* <project.icon /> */}
                                <span>{project.name}</span>
                                </a>
                            </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            </Sidebar>
    )
}



