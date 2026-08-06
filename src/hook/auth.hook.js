import BASE_URL from "../config/api";
import api from "../utils/axios";

export async function handleLogin({username, password}) {
    try {
        console.log(BASE_URL);
        const response = await api.post("/api/auth/register", {
            username,
            password
        })
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}