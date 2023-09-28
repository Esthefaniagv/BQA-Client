import { useEffect, useState } from "react";
import GetOrders from "../services/TokenOrders";

export const WaiterDoneOrders = () => {

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
        {allOrders.filter((done) => {
            console.log(allOrders)
            done.status === 'delivered' ? <p>hola</p> : console.log('falso')
        })}

        </>
    );
};

export default WaiterDoneOrders;
