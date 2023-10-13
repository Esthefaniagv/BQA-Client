import { Routes, Route, BrowserRouter } from "react-router-dom"
import { Login } from "../Login"
import { WaiterWelcome } from "../WaiterWelcome"
import { ErrorRoute } from "../ErrorRoute"
import { ChefView } from "../ChefView"
import WaiterDoneOrders from "../WaiterDoneOrders"
import { AdminView } from "../AdminView"
import { AdminWorkers } from "../AdminWorkers"
import { AdminProducts } from "../AdminProducts"



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
                <Route path="/workers" element={<AdminWorkers/>}/>
                <Route path="/products" element={<AdminProducts/>}/>
                
            </Routes>
        </BrowserRouter>
    )
}

