export function InputInfoMusic({id, label}) {
    return(
        <div className="flex flex-col w-full ">
            <label 
                htmlFor={id}
                className="text-white"
            >{label}</label>
            <input 
                id={id}
                className="bg-zinc-400 rounded"
            ></input>
        </div>
    )
}