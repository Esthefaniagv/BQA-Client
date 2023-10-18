import { useState } from 'react';
import Swal from 'sweetalert2';
import { PatchWorker } from '../services/TokenEditWorker';

export const ModalEditWorker = ({ user }) => {
  const [editedName, setEditedName] = useState(user.name);
  const [editedEmail, setEditedEmail] = useState(user.email);
  const [editedRole, setEditedRole] = useState(user.role);
  const [editedPassword, setEditedPassword] = useState(user.password);

  const newWorkerData = {
    email: editedEmail,
    name: editedName,
    role: editedRole,
    password: editedPassword,
  };

  const handlePatchWorker = (id) => {
    PatchWorker(id, newWorkerData)
      .then((response) => {
        if (response.status === 200) {
          Swal.fire(
            'Usuario modificado',
            'El usuario de trabajador se ha actualizado con éxito',
            'success'
          );
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

  return (
    <>
      {/* Modal Editar */}
      <div
        className='modal fade'
        id='editModal'
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
                Editar Usuario
              </h1>
              <p>Rellena los campos para editar trabajador</p>
            </div>

            <div className='modal-body'>
              <form className='createForm'>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control '
                    placeholder={user.name}
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='text'
                    className='form-control'
                    // id='recipient-name'
                    placeholder={user.email}
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <input
                    type='password'
                    className='form-control'
                    // id='recipient-name'
                    placeholder={user.password}
                    value={editedPassword}
                    onChange={(e)=> setEditedPassword(e.target.value)}
                  />
                </div>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  value={editedRole}
                  onChange={(e) => setEditedRole(e.target.value)}
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
                onClick={() => handlePatchWorker(user.id)}
              >
                GUARDAR CAMBIOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
