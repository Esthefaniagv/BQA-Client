import { useEffect, useState } from "react";
import GetOrders from "../services/TokenOrders";

export const WaiterDoneOrders = () => {

    let OrdersStatus: "pending" | "delivered";
    let Order: {
        client: string;
        products: product[];
        userId: number,
        status: OrdersStatus;
        dataEntry: string;
        dateProcessed: string;
        id: string;
    }
    let product: {
        id: number,
        name: string,
        price: number,
        type: string,
        qty: number
    }

    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        GetOrders()
            .then((res) => res.json())
            .then((data) => {
                setAllOrders(data);
            })
            .catch((e) => {
                console.log('soy catch', e);
            });
    }, []);

    return (
        <> 
        {
            JSON.stringify(allOrders.id : Order)
        }
        </>
    );
};

export default WaiterDoneOrders;
