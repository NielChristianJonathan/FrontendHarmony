import { BrowserRouter, Route, Routes } from "react-router-dom"
import { AuthLayout } from "../layout/authLayout"
import { Login } from "../pages/login"
import { Home } from "../pages/home"
import MainLayout from "../layout/mainLayout"
export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/auth" element={<AuthLayout/>}>
                    <Route path="login" element={<Login/>}/>
                </Route>
                <Route path="/" element={<MainLayout/>}>
                    <Route index element={<Home/>}/>
                </Route>
            </Routes>
        </BrowserRouter>        
    )
}