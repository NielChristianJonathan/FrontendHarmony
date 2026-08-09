import { BottomNavBar } from "@/components/bottomNavBar"
import { Header } from "@/components/header"
import { SidebarHarmony } from "@/components/sidebar"
import { Outlet } from "react-router-dom"
export default function MainLayout() {
    return(
        // <div className="flex min-h-screen">
            <div className="flex min-h-screen flex-col bg-zinc-950">
                <Header></Header>
                <div className="flex flex-1 min-h-0">
                    <SidebarHarmony/>
                    <main className="flex-1 bg-zinc-950">
                        <Outlet/>
                    </main>
                </div>
                <BottomNavBar/>
            </div>
        // </div>
    )
}