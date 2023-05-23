import React from "react";
import { useState } from "react";
import Container from "../components/usuarios/Container";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "../components/Table";
import useUsuario from "../hooks/useUsuario";
import * as Yup from "yup";
import { Form as FormikForm, Formik, Field } from "formik";
import { usuarioDefaultValues } from "../components/usuarios/usuarioHelper";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import Image from "next/image";

const columns = [
  {
    headerName: "FOTO",
    field: "userFoto",
    renderCell: (user) => (
      <div className="relative h-10 w-10">
        <Image
          className="h-full w-full rounded-full object-cover object-center"
          src={user.userFoto}
          alt="login"
          width={100}
          height={100}
        />
      </div>
    ),
  },
  { headerName: "LOGIN", field: "userLogin" },
  { headerName: "NOMBRE", field: "userFirstName" },
  { headerName: "APELLIDO", field: "userLastName" },
  { headerName: "CORREO ELECTRÓNICO", field: "emailAddress" },
  { headerName: "TELÉFONO", field: "phone" },
  { headerName: "ROL", field: "roles" },
  {
    headerName: "ACTIONS",
    field: "actions",
    renderCell: (admin) => (
      <div className="flex">
        <div
          className="cursor-pointer text-blue-600 hover:text-blue-200"
          // onClick={() => setSelectedUser(admin)}
        >
          <BiEditAlt style={{ fontSize: "2em", marginLeft: "20px" }} />
        </div>
        <div className="cursor-pointer text-red-600 hover:text-red-200">
          <BiTrash style={{ fontSize: "2em", marginLeft: "20px" }} />
        </div>
      </div>
    ),
  },
];
const usuarioFormSchema = Yup.object().shape({
  userFoto: Yup.string().required("Campo requerido"),
  userLogin: Yup.string()
    .required("Campo requerido")
    .min(3, "El nombre del login tiene que tener al menos un carácter")
    .max(100, "El nombre del login no puede superar los 100 carácteres"),
  userFirstName: Yup.string()
    .required("Campo requerido")
    .min(3, "El nombre tiene que tener al menos un carácter")
    .max(100, "El nombre no puede superar los 100 carácteres"),
  userLastName: Yup.string()
    .required("Campo requerido")
    .min(3, "El apellido tiene que tener al menos un carácter")
    .max(100, "El apellido no puede superar los 100 carácteres"),
  phone: Yup.string()
    .matches(/^[+0-9]+$/, "Debe ser +000000000000")
    .required("Campo requerido")
    .min(11, "El número tiene que ser mayor a 11"),
  emailAddress: Yup.string()
    .email("El email no tiene un formato válido")
    .required("Campo requerido"),
  addressUser: Yup.string()
    .required("Campo requerido")
    .min(3, "La dirección tiene que tener al menos un carácter")
    .max(100, "la dirección no puede superar los 100 carácteres"),
  roles: Yup.string().required("Campo requerido"),
});

const Usuarios = () => {
  const [searchValue, setSearchValue] = useState("");
  const isSubmitting = false;
  const { usuarios = [] } = useUsuario({
    queryParams: {
      search: searchValue,
    },
  });

  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Cliente</p>
      <Container>
        <Formik
          validationSchema={usuarioFormSchema}
          initialValues={usuarioDefaultValues}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ values, errors }) => (
            <div className="flex p-4">
              <div className=" my-12 ">
                <label htmlFor="upload-file">
                  <Field
                    id="upload-file"
                    type="file"
                    name="userFoto"
                    hidden={true}
                    title="Subir Foto"
                  />
                  <FaUserCircle size={280} color="#34D39C" />
                  <p className="m-auto text-center cursor-pointer hover:text-blue-600">
                    Subir Foto
                  </p>
                </label>
              </div>
              <div className=" w-full p-6 ">
                <div className="grid grid-cols-3 gap-10">
                  <Field
                    rounded
                    type="text"
                    name="userLogin"
                    bordered={true}
                    as={Input}
                    label="UserName"
                    placeholder="Ingrese UserName"
                    color="primary"
                    required
                    helperText={errors?.userLogin}
                    helperColor={errors?.userLogin ? "error" : null}
                  />

                  <Field
                    rounded
                    type="text"
                    name="roles"
                    as={Input}
                    bordered={true}
                    label="Rol"
                    placeholder="Ingrese rol"
                    color="primary"
                    required
                    helperText={errors?.roles}
                    helperColor={errors?.roles ? "error" : null}
                  />
                  <Field
                    rounded
                    type="password"
                    name="adminPassword"
                    as={Input}
                    bordered={true}
                    label="Contraseña"
                    placeholder="Ingrese contraseña"
                    color="primary"
                    required
                    helperText={errors?.adminPassword}
                    helperColor={errors?.adminPassword ? "error" : null}
                  />
                </div>

                <div className="grid grid-cols-2 gap-10 pt-9">
                  <Field
                    rounded
                    type="text"
                    name="userFirstName"
                    bordered={true}
                    as={Input}
                    label="Nombre"
                    placeholder="Ingrese nombre"
                    color="primary"
                    required
                    helperText={errors?.userFirstName}
                    helperColor={errors?.userFirstName ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="userLastName"
                    label="Apellido"
                    as={Input}
                    placeholder="Ingrese apellido"
                    color="primary"
                    required
                    helperText={errors?.userLastName}
                    helperColor={errors?.userLastName ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="phone"
                    as={Input}
                    label="Teléfono"
                    placeholder="Ingrese teléfono"
                    color="primary"
                    required
                    helperText={errors?.phone}
                    helperColor={errors?.phone ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    as={Input}
                    name="emailAddress"
                    label="Correo Electrónico"
                    placeholder="Ingrese correo electrónico"
                    color="primary"
                    required
                    helperText={errors?.emailAddress}
                    helperColor={errors?.emailAddress ? "error" : null}
                  />
                </div>
                <div className="grid grid-cols-1 gap-10 pt-9">
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="addressUser"
                    as={Input}
                    label="Dirección"
                    placeholder="Ingrese Dirección"
                    color="primary"
                    required
                    helperText={errors?.addressUser}
                    helperColor={errors?.addressUser ? "error" : null}
                  />
                </div>
                {/* <pre>{JSON.stringify(values, null, 2)}</pre> */}
              </div>
            </div>
          )}
        </Formik>

        <div className="flex justify-end mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Crear
          </button>
        </div>
      </Container>
      <div className=" mt-10">
        <Table
          columns={columns}
          items={usuarios.map((usuarios) => ({
            ...usuarios,
            key: usuarios.userId,
            actions: "actions",
          }))}
          />
          </div>
        </div>
      );
    };
export default Usuarios;
