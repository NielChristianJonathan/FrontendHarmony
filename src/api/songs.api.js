import BASE_URL from "@/config/api"
import api from "@/utils/axios"

export async function uploadMusicAPI({accessToken}) {
    const response = await api.post(`${BASE_URL}/api/songs`, 
        {

        },
        {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }
    )
    return response
}