
export const DoneOrderTime = ({done}) => {

    const doneOrderTime = new Date(done).toLocaleTimeString('en-US');

    return (
        <>
            <p>{doneOrderTime}</p>
        </>
    )
}

export default DoneOrderTime