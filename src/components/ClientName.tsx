import { Fragment } from "react";

export const ClientName = () => {
    return (
        <Fragment>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Escribe nombre de cliente aquí" aria-label="Username" aria-describedby="basic-addon1"/>
            </div>
        </Fragment>
    )
}

export default ClientName;
