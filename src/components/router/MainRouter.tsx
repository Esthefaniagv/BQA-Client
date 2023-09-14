import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Login } from "../Login"
import { WaiterWelcome } from "../WaiterWelcome"
import { ErrorRoute } from "../ErrorRoute"



export function MainRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/waiter" element={<WaiterWelcome/>}/>
                <Route path="*" element={<ErrorRoute/>}           
                />
            </Routes>
        </BrowserRouter>
    )
}

