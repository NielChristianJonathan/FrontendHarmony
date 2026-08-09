import { Plus } from "lucide-react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { DrawerList } from "./drawerList";

export function BottomSheet() {
    return (
        <Drawer swipeDirection="down" className={"md:hidden"}>
            <DrawerTrigger>
                <Plus size={32} color="#ffffff"></Plus>
            </DrawerTrigger>
            <DrawerContent className={"bg-zinc-800 pb-8 gap-5 md:hidden"}>
                <DrawerList 
                    title={"Playlist"} 
                    description={"Buat Playlist berisi lagu atau episode"}
                />
                <DrawerList 
                    title={"Lagu"} 
                    description={"Tambahkan lagu anda"}
                />
                
            </DrawerContent>
        </Drawer>
    )
}