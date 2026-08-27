// import { BrowserRouter, Route, Routes } from "react-router-dom"
// import { Login } from "./pages/login"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import AppRoutes from "./routes/appRoutes"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

const queryClient = new QueryClient()

function App() {
  
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login/>}/>
    //   </Routes>
    // </BrowserRouter>
    <QueryClientProvider client={queryClient}>
  
      <ReactQueryDevtools initialIsOpen={false} />
      <AppRoutes/>
    </QueryClientProvider>
  )
}

export default App
