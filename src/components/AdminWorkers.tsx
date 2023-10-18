import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import GetWorkers from '../services/TokenWorkers';
import { IWorkers } from '../models/workers';
import Swal from 'sweetalert2';
import DeleteWorker from '../services/TokenDeleteWorker';
import { PostWorker } from '../services/TokenAddWorker';
import { ModalEditWorker } from './modalEditWorker';

export const AdminWorkers = () => {
  const [workers, setWorkers] = useState<IWorkers[]>([]);
  const [addName, setAddName] = useState('');
  const [addEmail, setAddEmail] = useState('');
  const [addPassword, setAddPassword] = useState('');
  const [addRole, setAddRole] = useState('');

  const [buttonClicked, setButtonClicked] = useState(false);
  const [singleWorker, setSingleWorker] = useState({});

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

  const userData = {
    name: addName,
    email: addEmail,
    password: addPassword,
    role: addRole,
  };

  const handleCreateUser = () => {
    PostWorker(userData)
      .then((response) => {
        if (response.status === 201) {
          Swal.fire('Usuario Creado!', 'Usuario creado con éxito', 'success');
        } else {
          Swal.fire(
            'Ups! Error',
            'No se ha podido realizar tu solicitud',
            'error'
          );
        }
      })
      .catch((e) => {
        console.error(e.message);
      });
  };

  const handleEditWorker = (worker) => {
    setButtonClicked(true);
    setSingleWorker(worker);
  };

  const confirmDelete = (id: number) => {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Recuerda que esta acción no se puede revertir',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#EE4424',
      cancelButtonColor: '#A3E2E5',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        DeleteWorker(id).then((response) => {
          Swal.fire('Trabajador eliminado!', 'Solicitud exitosa', 'success');
        });
      }
    });
  };

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
        <hr className='hr' />
        <div className='divContentAdmin'>
          <header className='headerAdmin'>
            <div className='headerAdminContent'>
              <h2>Trabajadores</h2>
              <p>Accede al detalle de tus empleados</p>
            </div>
            <button
              className='btnCreate unstyle'
              data-bs-toggle='modal'
              data-bs-target='#createModal'
            >
              Crear
            </button>
          </header>

          <table className='table tableFont'>
            <thead className='tableHeader table-secondary '>
              <tr>
                <th scope='col'>Nombre</th>
                <th className='thGray' scope='col'>
                  Jornada
                </th>
                <th className='thGray' scope='col'>
                  Email
                </th>
                <th className='thGray' scope='col'>
                  Rol
                </th>
                <th scope='col'></th>
                <th scope='col'></th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.id}>
                  {/* <th scope="row">1</th> */}
                  <td>{worker.name}</td>
                  <td>Completa</td>
                  <td>{worker.email}</td>
                  <td>{worker.role}</td>
                  <td>
                    <button
                      type='button'
                      className='btnEdit unstyle '
                      data-bs-toggle='modal'
                      data-bs-target='#editModal'
                      onClick={() => handleEditWorker(worker)}
                    >
                      EDITAR
                    </button>
                    {buttonClicked ? (
                      <ModalEditWorker user={singleWorker} />
                    ) : null}
                  </td>
                  <td>
                    <button
                      className='btnDelete unstyle'
                      onClick={() => confirmDelete(worker.id)}
                    >
                      ELIMINAR
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal Crear */}
        <div
          className='modal fade'
          id='createModal'
          // tabindex='-1'
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header modalTitles border border-0'>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                ></button>
                <h1 className='modal-title fs-2' id='exampleModalLabel'>
                  Crear nuevo usuario
                </h1>
                <p>Rellena los campos para crear trabajador</p>
              </div>

              <div className='modal-body'>
                <form className='createForm'>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      // id='recipient-name'
                      placeholder='Nombre'
                      onChange={(e) => setAddName(e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='text'
                      className='form-control'
                      // id='recipient-name'
                      placeholder='Email'
                      onChange={(e) => setAddEmail(e.target.value)}
                    />
                  </div>
                  <div className='mb-3'>
                    <input
                      type='password'
                      className='form-control'
                      // id='recipient-name'
                      placeholder='Contraseña'
                      onChange={(e) => setAddPassword(e.target.value)}
                    />
                  </div>
                  <select
                    value={addRole}
                    className='form-select'
                    aria-label='Default select example'
                    onChange={(e) => setAddRole(e.target.value)}
                  >
                    <option selected>Selecciona el rol</option>
                    <option value='Admin'>Admin</option>
                    <option value='Waiter'>Waiter</option>
                    <option value='Chef'>Chef</option>
                  </select>
                </form>
              </div>
              <div className='modal-footer border border-0 my-4'>
                <button
                  type='button'
                  className='btn btn-secondary col-8 position-absolute start-50 translate-middle-x border'
                  onClick={() => handleCreateUser()}
                >
                  CREAR
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
