import { Fragment, useState} from "react"
import { ItemsBoxResume } from "./ItemsBoxResume"


export const ClientOrder = ({ selectedProduct }) => {
  const [clientName, setClientName] = useState('');

  //const [selectedProduct, setSelectedProduct] = useState(null);


    const handleClientName = (e) =>{
        setClientName(e.target.value)
    }
    
  return (
    <Fragment>
      <div className="clientOrder">
      <div className="input-group mb-3">
        <input value={clientName} onChange={handleClientName} type="text" className="form-control" placeholder="Escribe nombre de cliente aquí" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
      ClientOrder
        <p>{clientName}</p>
        <ItemsBoxResume selectedProduct={selectedProduct} />
      </div>
    </Fragment>
  )
}
