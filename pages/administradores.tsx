import React from "react";
import Container from "../components/usuarios/Container";
import { useState } from 'react';
import useAdmin from "../hooks/useAdmin";
import { Field, Formik } from "formik";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "../components/Table";
import { adminDefaultValues } from "../components/admin/adminHelper";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import Image from 'next/image';

const columns = [
  {
    headerName: 'FOTO', field: 'adminFoto', renderCell: (admin) =>

      <div className="relative h-10 w-10">
        <Image
          className="h-full w-full rounded-full object-cover object-center"
          src={admin.adminFoto}
          alt="login"
          width={100}
          height={100}
        />
      </div>
  },
  { headerName: 'LOGIN', field: 'adminLogin' },
  { headerName: 'NOMBRE', field: 'adminName' },
  { headerName: 'APELLIDO', field: 'adminLastName' },
  { headerName: 'CORREO ELECTRÓNICO', field: 'adminEmailAddress' },
  { headerName: 'TELÉFONO', field: 'adminphone' },
  {
    headerName: 'ACTIONS', field: 'actions', renderCell: (admin) => <div className="flex">
      <div
        className="cursor-pointer text-blue-600 hover:text-blue-200"
      // onClick={() => setSelectedUser(admin)}
      >
        <BiEditAlt style={{ fontSize: '2em', marginLeft: '20px' }} />
      </div>
      <div className="cursor-pointer text-red-600 hover:text-red-200">
        <BiTrash style={{ fontSize: '2em', marginLeft: '20px' }} />
      </div>
    </div>
  }
]

const Administradores = () => {
  const [searchValue, setSearchValue] = useState('');
  const isSubmitting = false;

  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  const { admins = [] } = useAdmin({
    queryParams: {
      search: searchValue,
    }
  })
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">Administradores</p>
      <Container>
        <div className=" mt-10">
          <Formik
            // validationSchema={usuarioFormSchema}
            initialValues={adminDefaultValues}
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
                      name="adminFoto"
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
                  <div className="grid grid-cols-2 gap-10">
                    <Field
                      rounded
                      type="text"
                      name="adminLogin"
                      bordered={true}
                      as={Input}
                      label="UserName"
                      placeholder="Ingrese UserName"
                      color="primary"
                      required
                      helperText={errors?.adminLogin}
                      helperColor={errors?.adminLogin ? "error" : null}
                    />

                    <Field
                      rounded
                      type="text"
                      name="adminphone"
                      as={Input}
                      bordered={true}
                      label="Teléfono"
                      placeholder="+000000000000"
                      color="primary"
                      required
                      helperText={errors?.adminphone}
                      helperColor={errors?.adminphone ? "error" : null}
                    />

                    <Field
                      rounded
                      type="text"
                      name="adminEmailAddress"
                      bordered={true}
                      as={Input}
                      label="Correo Electrónico"
                      placeholder="xxxxxx@xxxx.xxx"
                      color="primary"
                      required
                      helperText={errors?.adminEmailAddress}
                      helperColor={errors?.adminEmailAddress ? "error" : null}
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

                    <Field
                      rounded
                      bordered={true}
                      type="text"
                      name="adminName"
                      as={Input}
                      label="Nombre"
                      placeholder="Ingrese Nombre"
                      color="primary"
                      required
                      helperText={errors?.adminName}
                      helperColor={errors?.adminName ? "error" : null}
                    />
                    <Field
                      rounded
                      bordered={true}
                      type="text"
                      name="adminLastName"
                      as={Input}
                      label="Apellido"
                      placeholder="Ingrese Apellido"
                      color="primary"
                      required
                      helperText={errors?.adminLastName}
                      helperColor={errors?.adminLastName ? "error" : null}
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
              Enviar
            </button>
          </div>
          <Table
            columns={columns}
            items={admins.map(admin => ({
              ...admin,
              key: admin.adminId,
              actions: 'actions',
            }))}
          />
        </div>


      </Container>

    </div>
  );
};

export default Administradores;
