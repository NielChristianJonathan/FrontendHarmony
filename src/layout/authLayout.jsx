import { Outlet } from "react-router-dom";

export function AuthLayout() {
    return (
        <div className="flex min-h-screen bg-zinc-950 justify-center items-center">
            <div className="flex flex-col bg-zinc-800 w-full max-w-md py-4 px-7 rounded-xl gap-2">
                <Outlet/>
            </div>
        </div>
    )
}