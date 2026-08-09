import { Sidebar, SidebarContent, SidebarHeader, useSidebar } from "./sidebar";


export function AppSidebar() {
    const {
        state,
        open,
        setOpen,
        openMobile,
        setOpenMobile,
        isMobile,
        toggleSidebar,
    } = useSidebar()
    
    return (
        <Sidebar
            side="left"
            variant="inset"
            collapsible="offcanvas"
        >
            <SidebarHeader>

            </SidebarHeader>
            <SidebarContent>

            </SidebarContent>

        </Sidebar>
    )
}