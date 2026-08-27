import api from "@/utils/axios"

export async function getSong(accessToken) {
    try {
        const response = await api.get("/api/songs", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        console.log(response)
        return response.data
    } catch (error) {
        console.log(error);
    }
}