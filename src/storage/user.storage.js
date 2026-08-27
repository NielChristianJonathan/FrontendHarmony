import { create } from "zustand";
import { persist } from "zustand/middleware";

export const userStore = create(
    persist(
        (set) => ({
            username: "",
            accessToken: "",

            setUsername: (username) => set({
                username: username
            }),
            setAccessToken: (accessToken) => set({
                accessToken: accessToken
            })
        }),
        {
            name: "user-storage"
        }
    )
)