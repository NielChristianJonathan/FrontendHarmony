import { ButtonAddMusic } from "@/components/uploadMusic/buttonAddMusic";
import { InputInfoMusic } from "@/components/uploadMusic/inputInfo";
import { useUploadSong } from "@/hook/addMusic.hook";
import { userStore } from "@/storage/user.storage";
import { Upload } from "lucide-react";
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"

export function AddSong() {
    const onDrop = useCallback(acceptedFiles => {
        console.log("HAHAHA", acceptedFiles)
    }, [])
    const[judul, setJudul] = useState("");
    const[composer, setComposer] = useState("");
    const[genre, setGenre] = useState("");
    const {getRootProps, getInputProps} = useDropzone({onDrop});
    const {accessToken} = userStore((state) => state)
    const {mutate: uploadSong} = useUploadSong();

    const handleUploadSong = ({accessToken}) => {
        uploadSong({accessToken})
    }
    return (
        <div className= "h-full flex flex-col ">
            <div className="flex flex-col">
                <h1 className="font-semibold text-2xl text-white">Upload Your Music</h1>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <div className="flex bg-zinc-800 justify-center rounded py-4 w-full cursor-pointer">
                        <Upload color="#FFFFFF" size={96} strokeWidth={1}></Upload>
                    </div>
                </div>
                <InputInfoMusic id={"Title"} label={"Judul"} value={judul} setValue={setJudul}/>
                <InputInfoMusic id={"Composer"} label={"Composer"} value={composer} setValue={setComposer}/>
                <InputInfoMusic id={"Genre"} label={"Genre"} value={genre} setValue={setGenre}/>
            </div>
            <ButtonAddMusic handleClick={() => handleUploadSong({accessToken})}/>
        </div>
    )
}