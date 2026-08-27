import { CircleDollarSign, House, ListMusic, Search } from "lucide-react"
import { BottomSheet } from "./bottomSheet"
import { useNavigate } from "react-router-dom"
export function BottomNavBar() {
    const navigate = useNavigate()
    return (
        <div className="flex h-16 justify-between items-center px-10 md:hidden">
            <House size={32} color="#ffffff" onClick={() => navigate("/")}></House>
            <Search size={32} color="#ffffff"></Search>
            <ListMusic size={32} color="#ffffff"></ListMusic>
            <CircleDollarSign size={32} color="#ffffff"></CircleDollarSign>
            <BottomSheet></BottomSheet>
        </div>
    )
}