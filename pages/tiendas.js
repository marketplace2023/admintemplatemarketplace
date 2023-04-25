import React from "react";
import Container from "../components/usuarios/Container";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import Tablecomponent from "../components/tiendas/Tablecomponent";

const tiendas = () => {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Tiendas</p>
      <Container>
        <div className=" grid grid-cols-4 gap-10">
          <Input
            rounded
            bordered="true"
            label="Nombre Tienda"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Descripcion Corta"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Correo Electronico"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Telefono"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Facebook"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Instagram"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Whatsapp"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Instagram"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Video de la Tienda"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <label>
            <input type="file" name="" hidden="false" />
            <FaUserCircle size={120} color="#34D39C" />
          </label>
        </div>

        <div className="flex justify-end mt-4">
          <button
            type="button"
            class="text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Enviar
          </button>
        </div>
      </Container>
      <div className=" mt-10">
        <Tablecomponent />
      </div>
    </div>
  );
};

export default tiendas;
