import { useEffect, useState } from "react";
import GetOrders from "../services/TokenOrders";
import OrderTime from "./OrderDate";
import OrderPrevTime from "./OrderPrevTime";
import DoneOrderTime from "./DoneOrderTime";

export const WaiterDoneOrders = () => {
    const [allOrders, setAllOrders] = useState([]);


    // interface OrdersStatus "pending" | "delivered";
    interface Order {
        client: string;
        products: product[];
        userId: number;
        status: "pending" | "delivered";
        dataEntry: string;
        dateProcessed: string;
        id: string;
    }
    interface product {
        id: number;
        name: string;
        price: number;
        type: string;
        dataEntry: string;
        qty: number
    }


    useEffect(() => {
        GetOrders()
            .then((res) => res.json())
            .then((data) => {
                const filterDelivered = data.filter((currentProduct) => (
                    currentProduct.status === 'delivered'))
                setAllOrders(filterDelivered);
            })
            .catch((e) => {
                console.log('soy catch', e);
            });
    }, []);

    // useEffect(() => {

    //     const filter = allOrders.filter((currentProduct: any) => (
    //         currentProduct.status === 'delivered'))

    //     setAllOrders(filter)
    // }, [allOrders]);

    // const filterDeliveredProducts = (allOrders) => {
    //     // ...allOrders.filter((currentProduct: any) => (
    //     //     currentProduct.status === 'delivered'
    //     // ))
    // }

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cliente</th>
                        <th scope="col">Inicio</th>
                        <th scope="col">Finalizado</th>
                        <th scope="col">Total</th>
                        <th scope="col">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {allOrders.map((order: Order) => (
                        <>
                            <tr>
                                <td><button className="btn btn-default btn-xs btnTablet" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">{order.id}</button></td>
                                {/* <th scope="column">{order.id}</th> */}
                                <td key={order.id}>{order.client}</td>
                                <td><OrderPrevTime time={order.dataEntry} /></td>
                                <td><DoneOrderTime done={order.dateProcessed} /></td>
                                <td><OrderTime start={order.dataEntry} done={order.dateProcessed} /></td>
                                <td>{order.status}</td>
                            </tr>

                            <tr className="collapse" id="collapseExample">
                                <th scope="col" >Productos</th>
                                <th scope="col">Cantidad</th>
                                </tr>
                                {order.products.map((productInOrder) => (
                                    <tr  className="collapse"  id="collapseExample" >
                                        <td>{productInOrder.name}</td>
                                        <td>{productInOrder.qty}</td>
                                    </tr>
                                ))}
                            
                        </>
                    ))}
                </tbody>
            </table>
        </div >
    );
};

export default WaiterDoneOrders;


{/* <tr>
<td>
    <div  id="demo1">
        <table className="table table-striped">
            <thead>
                <tr className="info">
                    <th>Productos</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                <tr data-target="#demo10">
                    <td>SANDWICH</td>
                    <td>1</td>
                </tr>
            </tbody>
        </table>
    </div>
</td>
</tr> */}