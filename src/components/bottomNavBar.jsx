import { CircleDollarSign, House, LibraryBig, Search } from "lucide-react"
import { BottomSheet } from "./bottomNavBar/bottomSheet"
export function BottomNavBar() {
    return (
        <div className="flex h-16 justify-between items-center px-10 md:hidden">
            <House size={32} color="#ffffff"></House>
            <Search size={32} color="#ffffff"></Search>
            <LibraryBig size={32} color="#ffffff"></LibraryBig>
            <CircleDollarSign size={32} color="#ffffff"></CircleDollarSign>
            <BottomSheet></BottomSheet>
        </div>
    )
}