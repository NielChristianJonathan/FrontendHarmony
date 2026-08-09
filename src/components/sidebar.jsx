// import { AppSidebar } from "./ui/app-sidebar";
// import { SidebarProvider, SidebarTrigger } from "./ui/sidebar";

import { useState } from "react"
import { HeaderSidebar } from "./sidebar/headerSidebar";

export function SidebarHarmony() {
    const [width, setWidth] = useState(256);
    // const [isCollapse, setIsCollapse] = useState(false);
    const MIN_WIDTH = 256;
    const MAX_WIDTH = 400;

    function handleMouseDown(event) {
        const startX = event.clientX
        const startWidth = width

        function handleMouseMove(event) {
            const delta = event.clientX - startX

            const newWidth = Math.min(
            MAX_WIDTH,
            Math.max(MIN_WIDTH, startWidth + delta)
            )
            setWidth(newWidth)
        }

        function handleMouseUp() {
            window.removeEventListener("mousemove", handleMouseMove)
            window.removeEventListener("mouseup", handleMouseUp)
        }

        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)
    }

    return(
        <aside 
            className="relative rounded-2xl bg-zinc-900 m-2 px-4 py-4"
            style={{width: `${width}px`}}
        >
            <div
                className="flex flex-col"
            >
                <HeaderSidebar></HeaderSidebar>
            </div>
            <div 
                className="absolute right-0  w-3 h-full top-0 cursor-col-resize"
                onMouseDown={handleMouseDown}
            />
        </aside>
    )
}
// <SidebarProvider className={""}>
//     <AppSidebar/>
//     <main>
//         <SidebarTrigger>
//             <h1 className="text-black">HALOOOOO</h1>

//         </SidebarTrigger>
//         <h1 className="text-white">HALOOOOO</h1>
//     </main>
// </SidebarProvider>