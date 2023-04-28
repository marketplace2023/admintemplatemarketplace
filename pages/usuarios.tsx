import React from "react";
import { useState } from 'react';
import Container from "../components/usuarios/Container";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "../components/usuarios/Table";
import useUsuario from "../hooks/useUsuario";

const Usuarios = () => {
  const [searchValue, setSearchValue] = useState('');

  const { usuarios = [] } = useUsuario({
    queryParams: {
      search: searchValue,
    }
  });

  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Usuarios</p>
      <Container>
        <div className="flex">
          <div className="p-4">
            <label htmlFor="upload-file">
              <input id="upload-file" type="file" name="" hidden={true} title="Subir Foto" />
              <FaUserCircle size={280} color="#34D39C" />
              <p className="m-auto text-center cursor-pointer hover:text-blue-600">
                Subir Foto
              </p>
            </label>
          </div>
          <div className=" w-full p-6">
            <div className="grid grid-cols-2 gap-10">
              <Input
                rounded
                bordered={true}
                label="Login"
                placeholder="Ingrese el login de usuario"
                color="primary"
                required
              />
              <Input
                rounded
                bordered={true}
                label="Nombre"
                placeholder="Ingrese nombre"
                color="primary"
              />
              <Input
                rounded
                bordered={true}
                label="Apellido"
                placeholder="Ingrese apellido"
                color="primary"
              />
              <Input
                rounded
                bordered={true}
                label="Teléfono"
                placeholder="Ingrese teléfono"
                color="primary"
              />
              <Input
                rounded
                bordered={true}
                label="Correo Electrónico"
                placeholder="Ingrese correo electrónico"
                color="primary"
              />
              <Input
                rounded
                bordered={true}
                label="Rol"
                placeholder="Ingrese rol"
                color="primary"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            className="text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </Container >
      <div className=" mt-10">
        <Table
          usuarios={usuarios}
        />
      </div>
    </div >
  );
};

export default Usuarios;
