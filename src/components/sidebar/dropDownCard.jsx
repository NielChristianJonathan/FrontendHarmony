import { useNavigate } from "react-router-dom"

export function DropDownCard({Logo, description, title, path}) {
    const navigate = useNavigate();
    return(
        <div
            className="flex items-center w-96 gap-3 px-2"
            onClick={() => navigate(path)}
        >
            <Logo color="#f1f1f1" size={24} className="shrink-0"></Logo>
            <div className="flex flex-col w-full max-w-7xl gap-0">
                <h3 
                    className="font-bold text-shadow-white text-zinc-300"
                    style={{fontSize: "14px"}}
                >{title}</h3>
                <p 
                    className="font-semibold text-zinc-400"
                    style={{fontSize: "12px"}}
                >{description}</p>
            </div>
        </div>
        
    )
}