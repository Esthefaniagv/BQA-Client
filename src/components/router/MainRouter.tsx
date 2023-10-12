import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Login } from "../Login"
import { WaiterWelcome } from "../WaiterWelcome"
import { ErrorRoute } from "../ErrorRoute"
import { ChefView } from "../ChefView"
import WaiterDoneOrders from "../WaiterDoneOrders"
import { AdminView } from "../AdminView"



export function MainRouter() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/waiter" element={<WaiterWelcome/>}/>
                <Route path="*" element={<ErrorRoute/>}/>
                <Route path="/chef" element={<ChefView/>}/>
                <Route path="/orders" element={<WaiterDoneOrders />}/>
                <Route path="/admin" element={<AdminView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

