import api from "@/utils/axios"

export async function getSong(accessToken) {
    try {
        const response = await api.get("/api/songs", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        return response.data
    } catch (error) {
        console.log(error);
    }
}