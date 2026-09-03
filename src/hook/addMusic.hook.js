import { uploadMusicAPI } from "@/api/songs.api";
import { useMutation } from "@tanstack/react-query";

export function useUploadSong() {
    return(
        useMutation({
            mutationFn: uploadMusicAPI,
            onSuccess: () => {
                console.log("Berhasilll")
            }
        })
    )
}