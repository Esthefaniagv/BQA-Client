import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetProducts from '../services/TokenProducts';
import { IProduct, OneProduct } from '../models/orders';
import Swal from 'sweetalert2';
import { DeleteProduct } from '../services/TokenDeleteProducts';
import { PostProduct } from '../services/TokenAddProducts';
// import { PatchProduct } from '../services/TokenPatchProduct';
import { ModalEditProduct } from './modalEdit';
import { PatchProduct } from '../services/TokenPatchProduct';

export const AdminProducts = () => {
  const [products, setProducts] = useState([]);
  const [addName, setAddName] = useState("");
  const [addType, setAddType] = useState("");
  const [addPrice, setAddPrice] = useState("");
  const [addImage, setAddImage] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [singleProduct, setSingleProduct] = useState({})
  // const [editedName, setEditedName] = useState("");
  // const [editedImg, setEditedImg] = useState("");
  // const [editedType, setEditedType] = useState("");
  // const [editedPrice, setEditedPrice] = useState("");

  const navigate = useNavigate();

  const productData = {
    name: addName,
    price: addPrice,
    image: addImage,
    type: addType
  }

  // const newProductData = {
  //   name: editedName,
  //   price: editedPrice,
  //   image: editedImg,
  //   type: editedType
  // }

  const handleLogOut = () => {
    navigate('/');
  }

  useEffect(() => {
    GetAllProducts();

  }, []);

  const GetAllProducts = () => {
    GetProducts()
      .then((r) => {
        if (r.status === 200) {
          r.json().then((data) => {
            setProducts(data);

          });
        }
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  };

  const handleCreateProduct = () => {
    PostProduct(productData).then((response) => {
      if (response.status === 201) {
        Swal.fire(
          'Producto creado',
          'El producto se ha creado con éxito',
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

  // const handlePatchProduct = () => {
  //   console.log(buttonClicked + 'HOLA SOY EL ID QUE BUSCAS')
  //   PatchProduct(buttonClicked, newProductData).then((response) => {
  //     if(response.status === 200){
  //       Swal.fire(
  //         'Producto actualizado',
  //         'El producto se ha actualizado con éxito',
  //         'success'
  //       )
  //     }else{
  //       Swal.fire(
  //         'Ups! Error',
  //         'No se ha podido realizar tu solicitud',
  //         'error'
  //       )
  //     }
  //   })
  //   .catch((e) => {
  //     console.error(e.message)
  //   })
  // }


  // const handleEditProduct = (product: OneProduct) => {
  //   if (products.some(x => x.id === product.id)) {
  //     setProducts((prevState) => ([
  //       ...prevState.map((currentProduct) => ({
  //         name: editedName,
  //         price: editedPrice,
  //         image: editedImg,
  //         type: editedType
  //       }))
  //     ]))
  //     // setSelectedProduct([...selectedProduct])
  //   } else {
  //     setProducts([...products, {
  //       ...product
  //     }]);
  //   }
  // }

  const handleEditProduct = (product) => {
    setButtonClicked(true)
    setSingleProduct(product)
  }

  const confirmDelete = (id: number) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Recuerda que esta acción no se puede revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EE4424',
      cancelButtonColor: '#A3E2E5',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteProduct(id).then((response) => {
          Swal.fire(
            'Producto eliminado!',
            'solicitud exitosa',
            'success'
          )
        })
      }
    })
  }
  return (
    <>
      <div className='homeAdmin'>
        <div className='divIcons'>
          <img
            className='burguerLogo'
            src='./public/img/hamburguerlogo.png'
            alt='burguer logo'
          />
          <h2 className='titleHeader'>Sección Productos</h2>
          <img
            className='logOut'
            src='./public/img/exit.png'
            alt='cerrar sesion'
            onClick={handleLogOut}
          />
        </div>
        <hr className='hr' />

        <div className='divContentAdmin'>
          <header className='headerAdmin'>
            <div className='headerAdminContent'>
              <h2>Productos</h2>
              <p>Accede al detalle de los productos</p>
            </div>
            <button className='unstyle btnCreate' data-bs-toggle="modal" data-bs-target="#createModal">Crear</button>
          </header>


          <table className="table tableFont">
            <thead className='tableHeader table-secondary'>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col" className='thGray'>Precio</th>
                <th scope="col" className='thGray'>Imagen</th>
                <th scope="col" className='thGray'>Tipo</th>
                <th scope="col" className='thGray'></th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: OneProduct) => (
                <tr key={product.id}>
                  <th scope="row">{product.name}</th>
                  <td>{product.price}</td>
                  <td><img src={product.image} alt="imagen de producto" width="30" height="30" /></td>
                  <td>{product.type}</td>
                  <td>
                    <button className='btnEdit unstyle' onClick={() => handleEditProduct(product)} data-bs-toggle="modal" data-bs-target="#editModal">Editar</button>
                    {buttonClicked ? <ModalEditProduct oneProduct={singleProduct} /> : null}
                    <button className='btnDelete unstyle' onClick={() => confirmDelete(product.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* <!-- Modal Editar--> */}

        {/* <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                    <input type="text" className="form-control " id="recipient-name" placeholder='Nombre de producto' onChange={(e) => setEditedName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="recipient-name" placeholder='Precio de producto' onChange={(e) => setEditedPrice(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="recipient-name" placeholder='Imagen de producto' onChange={(e) => setEditedImg(e.target.value)} />
                  </div>
                  <select className="form-select" aria-label="Default select example" onChange={(e) => setEditedType(e.target.value)}>
                    <option >Elige tipo de producto</option>
                    <option value="Desayuno">Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                  </select>
                </form>
              </div>
              <div className="modal-footer border border-0 my-4">
                <button type="button" className="btn btn-secondary col-8 position-absolute start-50 translate-middle-x border border-0" onClick={() => handlePatchProduct()}>GUARDAR CAMBIOS</button>

              </div>
            </div>
          </div>
        </div> */}



        {/* Modal crear producto */}
        <div className="modal fade" id="createModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content ">
              <div className="modal-header border border-0 modalTitles">
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                <h1 className="modal-title fs-2" >Crear nuevo producto</h1>
                <p>Rellena los campos para crear producto</p>
              </div>
              <div className="modal-body">
                <form className='createForm'>
                  <div className="mb-3">
                    <input type="text" className="form-control " id="recipient-name" placeholder='Nombre de producto' onChange={(e) => setAddName(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="recipient-name" placeholder='Precio' onChange={(e) => setAddPrice(e.target.value)} />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="recipient-name" placeholder='Imagen de producto' onChange={(e) => setAddImage(e.target.value)} />
                  </div>
                  <select className="form-select" aria-label="Default select example" onChange={(e) => setAddType(e.target.value)}>
                    <option>Elige tipo de producto</option>
                    <option value="Desayuno">Desayuno</option>
                    <option value="Almuerzo">Almuerzo</option>
                  </select>
                </form>
              </div>
              <div className="modal-footer border border-0 my-4">
                <button type="button" className="btn btn-secondary col-8 position-absolute start-50 translate-middle-x border border-0" onClick={() => handleCreateProduct()}>CREAR</button>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

