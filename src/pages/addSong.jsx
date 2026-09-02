import { InputInfoMusic } from "@/components/uploadMusic/inputInfo";
import { Upload } from "lucide-react";
import { useCallback } from "react"
import { useDropzone } from "react-dropzone"

export function AddSong() {
    const onDrop = useCallback(acceptedFiles => {
        console.log("HAHAHA", acceptedFiles)
    }, [])

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    return (
        <div className= "h-full flex flex-col ">
            <h1 className="font-semibold text-2xl text-white">Upload Your Music</h1>
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="flex bg-zinc-800 justify-center rounded py-4 w-full cursor-pointer">
                    <Upload color="#FFFFFF" size={96} strokeWidth={1}></Upload>
                </div> 
            </div>
            <InputInfoMusic id={"Title"} label={"Judul"}/>
            <InputInfoMusic id={"Genre"} label={"Genre"}/>
        </div>
    )
}