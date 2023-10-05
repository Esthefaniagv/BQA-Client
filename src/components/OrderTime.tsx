import DoneOrderTime from "./DoneOrderTime";

export const OrderTime = ({ start, done }) => {

    let startDate = new Date(start);
    let doneDate = new Date(done);
    const doneOrderTime = new Date(done).toLocaleTimeString('en-US');



    const totalTime = doneDate.getTime() - startDate.getTime()
    const ultraTime = totalTime / 1000 / 60
    const total = Math.floor(ultraTime)

    //    const total = doneDate - startDate

    return (
        <>  
            <p>{total}:00 Min.</p>
            
        </>
    )
}

export default OrderTime