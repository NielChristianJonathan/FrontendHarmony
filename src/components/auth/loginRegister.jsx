import { useNavigate } from "react-router-dom"

export function LoginRegister({label, path}) {
    const navigate = useNavigate()
    return(
        <h4 
            className="text-sm text-white cursor-pointer hover:text-blue-500"
            onClick={() => navigate(path)}
        >{label}</h4>
    )
}