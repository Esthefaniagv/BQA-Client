import { Routes, Route, Link, BrowserRouter } from "react-router-dom"
import { LoginFondo } from "../LoginFondo"
import { WaiterHome } from "../WaiterHome"



export function MainRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginFondo/>}/>
                <Route path="/waiter" element={<WaiterHome/>}/>
            </Routes>
        </BrowserRouter>
    )
}

