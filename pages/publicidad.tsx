import React from "react";
import Container from "../components/usuarios/Container";
import { Card, Input, Text } from "@nextui-org/react";
import { Form as FormikForm, Formik, Field } from "formik";

const publicidad = () => {
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">
        Seccion Publicitaria
      </p>
      <Container>
        
          {/* <label>
       <input type="file" name="" hidden="false" />
          <Card variant="bordered">
            <Card.Body className="h-48">
              <Text className=" flex justify-center">
                Arrastre una imagen o haga click aqui
              </Text>
            </Card.Body>
          </Card>
        </label>
         <div className=" grid grid-cols-3 gap-10 mt-10">
          <Input
            rounded
            bordered="true"
            label="Titulo"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Descripcion"
            placeholder="Ingrese Nombre"
            color="primary"
          />
          <Input
            rounded
            bordered="true"
            label="Usuarios"
            placeholder="Ingrese Nombre"
            color="primary"
          />
        </div>
        <div className="flex justify-end mt-10">
          <button
            type="button"
            class="text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear Publicidad
          </button>
        </div> */}
      </Container>
    </div>
  );
};

export default publicidad;
