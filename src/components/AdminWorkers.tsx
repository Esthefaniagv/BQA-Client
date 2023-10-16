
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GetWorkers from '../services/TokenWorkers';
import { IWorkers } from '../models/workers';
import Swal from 'sweetalert2';

export const AdminWorkers = () => {

  const [workers, setWorkers] = useState<IWorkers[]>([]);
  

  useEffect(() => {
    GetAllWorkers();
    
  }, []);

  const GetAllWorkers = () => {
    GetWorkers()
      .then((r) => {
        if (r.status === 200) {
          r.json().then((data) => {
            setWorkers(data);
            
          });
        }
      })
      .catch((e) => {
        console.log('soy catch', e);
      });
  };

    const navigate = useNavigate();

    const handleLogOut = () => {
      navigate('/');
    };

    // const nameWorker =(workers)=>{
    //   workers.map((name)=>(
    //    name.email.split('@')
    //   ))
    // }

const confirmDelete = () =>{
  Swal.fire({
    title: 'Estás seguro?',
    text: "Recuerda que esta acción no se puede revertir",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#EE4424',
    cancelButtonColor: '#A3E2E5',
    confirmButtonText: 'Eliminar',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Trabajador eliminado!',
        'Solicitud exitosa',
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
      <h2 className='titleHeader'>Sección Trabajadores</h2>
      <img
        className='logOut'
        src='./public/img/exit.png'
        alt='cerrar sesion'
        onClick={handleLogOut}
      />
    </div>
    <hr className='hr'/>
    <div className='divContentAdmin'>
    <header className='headerAdmin'>
        <div className='headerAdminContent'>
        <h2>Trabajadores</h2>
        <p>Accede al detalle de tus empleados</p>
        </div>
        <button className='btnCreate unstyle'>Crear</button>
    </header>

    <table className="table tableFont">
  <thead className='tableHeader table-secondary '>
    <tr>
      <th scope="col">Nombre</th>
      <th className='thGray' scope="col">Jornada</th>
      <th className='thGray' scope="col">Email</th>
      <th className='thGray' scope="col">Rol</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    {workers.map((worker)=>(
    <tr key={workers.id}>
    {/* <th scope="row">1</th> */}
    <td>{}</td>
    <td>Completa</td>
    <td>{worker.email}</td>
    <td>{worker.role}</td>
    <td><button type="button" className='btnEdit unstyle ' data-bs-toggle="modal" data-bs-target="#staticBackdrop">EDITAR</button></td>
    <td ><button className='btnDelete unstyle' onClick={()=> confirmDelete()}>ELIMINAR</button></td>
  </tr>
    ))}

  </tbody>
</table>
</div>
{/* Modal Editar */}
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal Trabajadores</h1>
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
