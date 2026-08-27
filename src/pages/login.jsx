import { useState } from "react"
import { handleLogin } from "../hook/auth.hook"
import { TitleAuth } from "@/components/auth/titleAuth";
import { LabelAuth } from "@/components/auth/labelAuth";
import { InputAuth } from "@/components/auth/inputAuth";
import { ButtonAuth } from "@/components/auth/buttonAuth";
import { LoginRegister } from "@/components/auth/loginRegister";
import { userStore } from "@/storage/user.storage";
import { useNavigate } from "react-router-dom";


export function Login() {
    const {username, setUsername, setAccessToken} = userStore((state) => state);
    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [errors] = useState({
        // username: "Mohon masukan username",
        password: "Mohon Masukan password"
    });
    
    return (
        <div>
            <TitleAuth title={"Login"}></TitleAuth>
            <LabelAuth label="Username" htmlFor="username" />
            <InputAuth type="text" value={username} error={errors.username} setValue={setUsername} placeholder={"Masukan username..."} id="username"></InputAuth>
            <LabelAuth label="Password" htmlFor="password" />
            <InputAuth type="password" value={password} setValue={setPassword} placeholder={"Masukan password..."} id="password"></InputAuth>
            <LoginRegister label={"Register"} path="/auth/register"></LoginRegister>
            <ButtonAuth label="Login" onClick={() => handleLogin({username, password, setAccessToken, navigate})}/>
        </div>
    )
}