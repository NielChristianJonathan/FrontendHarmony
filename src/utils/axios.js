import axios from "axios";
import BASE_URL from "../config/api";
import { userStore } from "@/storage/user.storage";

const api = axios.create({
    baseURL: BASE_URL,
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
})

api.interceptors.response.use(
    function(response) {
        return response
    },
    async function(error) {
        const OriginalRequest = error.config;
        if (error.response?.status === 401 && OriginalRequest._retry !== true) {
            const response = await api.get(`${BASE_URL}/api/auth/accesstoken`);
            const newAccessToken = response.data.data.accessToken;
            userStore.getState().setAccessToken(newAccessToken);
            OriginalRequest._retry = true;
            OriginalRequest.headers.authorization = `Bearer ${newAccessToken}`;
            return api(OriginalRequest)
        }
        return Promise.reject(error)
    }
)

export default api;