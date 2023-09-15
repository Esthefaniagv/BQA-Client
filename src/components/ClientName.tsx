import { Fragment, useState } from "react";


export const ClientName = () => {
    const [clientName, setClientName] = useState('');

    const handleClientName = (e) =>{
        setClientName(e.target.value)
    }

    return (
        <Fragment>
            <div className="input-group mb-3">
                <input onChange={handleClientName} value={clientName} type="text" className="form-control" placeholder="Escribe nombre de cliente aquí" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </Fragment>
    )
}

export default ClientName;
