import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout } from "../layout/authLayout"

import { Home } from "../pages/home"
import MainLayout from "../layout/mainLayout"
import { PlaylistPage } from "@/pages/playlist"
import { AddSong } from "@/pages/addSong"
import { Login } from "@/pages/login"
import { Register } from "@/pages/register"
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                </Route>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                    <Route path="playlist" element={<PlaylistPage/>}/>
                    <Route path="addsong" element={<AddSong/>}/>
                </Route>
            </Routes>
        </BrowserRouter>        
    )
}