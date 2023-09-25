import { useState } from "react"
import { IProduct } from './ItemsBox';
// import { ChefView } from "./ChefView";
import { postKitchen } from "../services/TokenKitchen";
import Swal from 'sweetalert2'

export const ItemsBoxResume = ({ selectedProduct, modifyQty, deleteProduct, totalCheck, total }) => {

  const [clientName, setClientName] = useState('');
  const [orderData, setOrderData] = useState({});

  const handleClientName = (e) => {
    setClientName(e.target.value)
  }

  const handleSendToKitchen = ()=>{
    const orderData = {
      client: clientName,
      products: selectedProduct,
      status: "pending",
      dataEntry: new Date(), 
    }
    setOrderData(orderData)
    postKitchen(orderData).then((r) =>{
      if (r.status === 201){
        Swal.fire(
          'Enviado a cocina!',
          'Revisa el estado en Ver Pedidos',
          'success'
        )
      }else{
        Swal.fire(
          'Ups! Error',
          'No se ha podido realizar tu solicitud',
          'error'
        )
      }
    })


    // orderData ? <ChefView orderData={orderData}/> : null
  }

  console.log('HOLA SOY', [...selectedProduct, clientName])

  return (
    <>
      <div className='sectionItemsResume'>

        <div className="clientName">
          <input value={clientName} onChange={handleClientName} type="text" name='clientName' className="form-control mb-3" placeholder="Escribe nombre de cliente aquí" aria-label="Username" aria-describedby="basic-addon1" />
        </div>
        <section>
          <div className='divItemsResume'>
            {selectedProduct.map((selected: IProduct) => (
              <div key={selected.id}>
                <div className='productImgResume' >
                  <img src={selected.image} alt='imagen Producto' />
                  <p className='nameProductResume'>{selected.name}</p>
                  <p className='priceProduct'>${selected.price}</p>
                </div>
                <div className='divIconsResume'>
                  <div className='iconsPlusLess'>
                    <button className="buttonDecrease" onClick={() => modifyQty(selected.id, false)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='bi bi-dash-circle-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z' />
                      </svg>
                    </button>
                    <p id="productQuantity" >{selected.qty}</p>
                    <button className="buttonIncrease" onClick={() => modifyQty(selected.id, true)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='20'
                        height='20'
                        fill='currentColor'
                        className='bi bi-plus-circle-fill'
                        viewBox='0 0 16 16'
                      >
                        <path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z' />
                      </svg>
                    </button>
                  </div>
                  <button onClick={() => deleteProduct(selected.id)} className="unstyle">
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='20'
                      height='20'
                      fill='currentColor'
                      className='bi bi-trash3-fill'
                      viewBox='0 0 16 16'
                    >
                      <path d='M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z' />
                    </svg>
                  </button>
                </div>
              </div>

            ))}

          </div>
        </section>
        <p className='dots'>-------------------------------------</p>
        <div className='divParagraph'>
          <p className='totaltext'>TOTAL</p>
          <p className='totalResult'>{totalCheck()}{total}</p>
        </div>
        <button onClick={handleSendToKitchen} 
          data-testid='buttonLogin'
          className='btn btn-lg'
          type='submit'
          value='Submit'
          id='buttonOrderChefView'
          >
          ENVIAR A COCINA
        </button>

      </div>
     
    </>
  );
};
