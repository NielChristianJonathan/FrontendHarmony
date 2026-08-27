
import api from "../utils/axios";

export async function handleLogin({username, password, setAccessToken, navigate}) {
    try {
    
        const response = await api.post("/api/auth/login", {
            username,
            password
        })
        setAccessToken(response.data.data.accessToken);
        navigate("/")
    } catch (error) {
        console.log(error)
    }
}   

export async function handleRegister({username, password, checkPassword}) {
    try {
        console.log(username, password, checkPassword)
        const response = await api.post("api/auth/register", {
            username,
            password, 
            checkPassword
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}