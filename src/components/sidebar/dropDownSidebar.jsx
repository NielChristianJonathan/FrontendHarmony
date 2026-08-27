import { ListPlus, Music4, Plus,  } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropDownCard } from "./dropDownCard";
import description from "../../constant/description"

export function AddButton() {
    return(
        <DropdownMenu>
            <DropdownMenuTrigger>
                <div className="inline-flex p-1 rounded-full bg-zinc-800 hover:bg-zinc-700 items-center justify-center cursor-pointer">
                    <Plus
                        color="#e4dddd"
                    ></Plus>
                </div>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent className={"bg-zinc-800 w-96"}>
                <div className="w-full my-2">
                    <DropDownCard Logo={ListPlus} title={"Playlist"} description={description.addPlaylist} path={"/playlist"}></DropDownCard>
                    <DropDownCard Logo={Music4} title={"Song"} description={description.addSong} path={"/addsong"}></DropDownCard>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}