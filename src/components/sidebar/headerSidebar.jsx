import { AddButton } from "./dropDownSidebar";


export function HeaderSidebar() {
    return (
        <div
            className="flex items-center    "
        >
            <h1 className="flex-1 text-l font-semibold text-white">Koleksi Kamu</h1>
            
            <AddButton/>

        </div>
    )
}