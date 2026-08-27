import { ButtonAuth } from "@/components/auth/buttonAuth";
import { InputAuth } from "@/components/auth/inputAuth";
import { LabelAuth } from "@/components/auth/labelAuth";
import { LoginRegister } from "@/components/auth/loginRegister";
import { TitleAuth } from "@/components/auth/titleAuth";
import { handleRegister } from "@/hook/auth.hook";
import { useState } from "react";

export function Register() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [checkPassword, setCheckPassword] = useState("");
    const [errors] = useState({
        // username: "Mohon masukan username",
        password: "Mohon Masukan password"
    });

    return(
        <div>
            <TitleAuth title={"Register"}></TitleAuth>
            <LabelAuth label="Username" htmlFor="username" />
            <InputAuth type="text" value={username} error={errors.username} setValue={setUsername} placeholder={"Masukan username..."} id="username"></InputAuth>
            <LabelAuth label="Password" htmlFor="password" />
            <InputAuth type="password" value={password} setValue={setPassword} placeholder={"Masukan password..."} id="password"></InputAuth>
            <LabelAuth label="Password" htmlFor="checkPassword" />
            <InputAuth type="password" value={checkPassword} setValue={setCheckPassword} placeholder={"Masukan password..."} id="checkPassword"></InputAuth>
            <LoginRegister label={"Login"} path="/auth/login"></LoginRegister>
            <ButtonAuth label="Register" onClick={() => handleRegister({username, password, checkPassword})}/>
        </div>
    )
}