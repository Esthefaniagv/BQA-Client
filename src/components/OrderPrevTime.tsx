const OrderPrevTime = ({time}) => {
    const entryTime= new Date(time).toLocaleTimeString('en-US');

    return (
            <p>{entryTime}</p>
    )
}
export default OrderPrevTime