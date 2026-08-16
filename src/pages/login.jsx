import { useState } from "react"
import { AuthLayout } from "../layout/authLayout"
import { ButtonAuth } from "../components/ui/buttonAuth"
import { InputAuth } from "../components/ui/inputAuth"
import { LabelAuth } from "../components/ui/labelAuth"
import { TitleAuth } from "../components/ui/titleAuth"
import { handleLogin } from "../hook/auth.hook"

export function Login() {
    const [username, setUsername] = useState("");
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
            <ButtonAuth label="Login" onClick={() => handleLogin({username, password})}/>
        </div>
    )
}