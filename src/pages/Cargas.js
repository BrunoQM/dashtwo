import React, { useState } from 'react';
import PageTitle from '../components/Typography/PageTitle';
import CTA from '../components/CTA';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui';

function Modals() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <PageTitle>Gestión de Cargas</PageTitle>
      <CTA />

      <div className="space-x-4 mt-6 flex justify-center">
        <div className="relative group">
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Carga Individual
          </button>
          <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md">Carga un solo archivo de forma individual</span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>
        <div className="relative group">
          <button
            onClick={openModal}
            className="bg-blue-500 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-md shadow-lg transform transition-transform duration-300 hover:scale-105"
          >
            Cargas Masivas
          </button>
          <div className="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
            <span className="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg rounded-md">Carga múltiples archivos simultáneamente</span>
            <div className="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
          </div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <ModalHeader>Cargar Archivos</ModalHeader>
        <ModalBody>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="fileUpload">
              Selecciona archivos para cargar:
            </label>
            <input
              type="file"
              id="fileUpload"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              multiple
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancelar
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Aceptar</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancelar
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Aceptar
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
}

export default Modals;