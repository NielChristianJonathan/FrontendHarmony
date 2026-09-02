import { getSong } from "@/hook/getSong"
import { userStore } from "@/storage/user.storage"
import { useQuery } from "@tanstack/react-query"

export function Home() {
    const {accessToken} = userStore((state) => state)
    const {data, isError, isPending, error} = useQuery({queryKey: ["songs"], queryFn: () => getSong(accessToken)})

    
    return(
        <div className="bg-linear-to-b from-zinc-700 to-zinc-950 h-full rounded-2xl ">
            HOME
        </div>
    )
}