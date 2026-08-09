import { Plus } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { DropDownCard } from "./dropDownCard";

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
            <DropdownMenuContent>
                <div>
                    <DropDownCard></DropDownCard>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}