import { Plus } from "lucide-react";

export function ButtonAddSong() {
    return(
        <button className="flex items-center bg-white rounded-full px-2 py-1 text-xs font-semibold shadow drop-shadow-white">
            <span className="mr-2"><Plus size={20}></Plus></span>Tambahkan <span>ke playlist ini</span>
        </button>
    )
}