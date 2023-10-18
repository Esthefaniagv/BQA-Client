import { useState } from "react";
import { PatchProduct } from "../services/TokenPatchProduct";
import Swal from "sweetalert2";

export const ModalEditProduct = ({oneProduct}) => {
    const [editedName, setEditedName] = useState(oneProduct.name);
    const [editedImg, setEditedImg] = useState(oneProduct.image);
    const [editedType, setEditedType] = useState(oneProduct.type);
    const [editedPrice, setEditedPrice] = useState(oneProduct.price);

    const newProductData = {
        // singleProduct.id,
        name: editedName,
        price: editedPrice,
        image: editedImg,
        type: editedType
    }



    const handlePatchProduct = (id) => {
        PatchProduct(id, newProductData).then((response) => {
            if (response.status === 200) {
                Swal.fire(
                    'Producto actualizado',
                    'El producto se ha actualizado con éxito',
                    'success'
                )
            } else {
                Swal.fire(
                    'Ups! Error',
                    'No se ha podido realizar tu solicitud',
                    'error'
                )
            }
        })
            .catch((e) => {
                console.error(e.message)
            })
    }

    return (
        <>
            {/* <!-- Modal Editar--> */}
            
                <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content ">
                        <div className="modal-header border border-0 modalTitles">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            <h1 className="modal-title fs-2" >Editar producto</h1>
                            <p>Rellena los campos para editar producto</p>
                        </div>
                        <div className="modal-body">
                            <form className='createForm'>
                                <div className="mb-3">
                                    <input type="text" className="form-control " id="recipient-name"  placeholder={oneProduct.name} onChange={(e) => setEditedName(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="recipient-name"  placeholder={oneProduct.price} onChange={(e) => setEditedPrice(e.target.value)} />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" id="recipient-name" placeholder={oneProduct.image} onChange={(e) => setEditedImg(e.target.value)} />
                                </div>
                                <select className="form-select" aria-label="Default select example" onChange={(e) => setEditedType(e.target.value)}>
                                    <option>Elige tipo de producto</option>
                                    <option value="Desayuno">Desayuno</option>
                                    <option value="Almuerzo">Almuerzo</option>
                                </select>
                            </form>
                        </div>
                        <div className="modal-footer border border-0 my-4">
                            <button type="button" className="btn btn-secondary col-8 position-absolute start-50 translate-middle-x border border-0" onClick={() => handlePatchProduct(oneProduct.id)}>GUARDAR CAMBIOS</button>

                        </div>
                    </div>
                </div>
            </div>
            
                

            




        </>
    )
}
