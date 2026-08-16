import { ButtonSection } from "@/components/playlist/buttonsection";
import { TitlePlaylist } from "@/components/playlist/titleplaylist";

export function PlaylistPage() {
    return (
        <div className="flex flex-col h-full md:rounded md:p-2">
            <TitlePlaylist/>
            <ButtonSection/>
        </div>
    )
}