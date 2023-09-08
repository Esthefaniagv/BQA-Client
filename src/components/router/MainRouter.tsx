import { Routes, Route, BrowserRouter } from "react-router-dom"
import { LoginFondo } from "../LoginFondo"
import { WaiterHome } from "../WaiterHome"
import { ErrorRoute } from "../ErrorRoute"



export function MainRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginFondo/>}/>
                <Route path="/waiter" element={<WaiterHome/>}/>
                <Route path="*" element={<ErrorRoute/>}           
                />
            </Routes>
        </BrowserRouter>
    )
}

