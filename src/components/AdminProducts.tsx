import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GetProducts from '../services/TokenProducts';
import { IProduct } from '../models/orders';
import Swal from 'sweetalert2';

export const AdminProducts = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const navigate = useNavigate();

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

  const confirmDelete = () => {
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
        Swal.fire(
          'Producto eliminado!',
          'solicitud exitosa',
          'success'
        )
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
            <button className='unstyle btnCreate'>Crear</button>
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
              {products.map((product) => (
                <tr key={product.id}>
                  <th scope="row">{product.name}</th>
                  <td>{product.price}</td>
                  <td><img src={product.image} alt="imagen de producto" width="30" height="30" /></td>
                  <td>{product.type}</td>
                  <td>
                    <button className='btnEdit unstyle' data-bs-toggle="modal" data-bs-target="#staticBackdrop">Editar</button>
                    <button className='btnDelete unstyle' onClick={() => confirmDelete()}>Eliminar</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>

        {/* <!-- Modal Editar--> */}
        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal PRODUCTS</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                ...
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Understood</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

