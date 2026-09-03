export function InputInfoMusic({id, label, value, setValue}) {
    return(
        <div className="flex flex-col w-full ">
            <label 
                htmlFor={id}
                className="text-white"
                
            >{label}</label>
            <input 
                id={id}
                className="bg-zinc-400 rounded py-2 text-sm px-2"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            ></input>
        </div>
    )
}