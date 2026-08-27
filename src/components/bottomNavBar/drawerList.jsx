import { useNavigate } from "react-router-dom"

export function DrawerList({ title, description, path}) {
    const navigate = useNavigate();
    return(
        <div 
            className="flex items-center px-4 gap-3.5 bg-zinc-800 cursor-pointer"
            onClick={() => navigate(path)}
        >
            <div className="rounded-full bg-zinc-500 h-10 w-10">
                <img src="" alt="" />
            </div>
            <div className="flex flex-col gap-0.5">
                <h1 className="text-white font-bold text-l">{title}</h1>
                <h1 className="text-zinc-300 text-xs ">{description}</h1>
            </div>
        </div>
    )
}