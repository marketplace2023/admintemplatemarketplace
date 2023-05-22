import React from "react";
import { useState } from "react";
import { Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Table } from "../components/Table";
import Container from "../components/usuarios/Container";
import useStore from "../hooks/useStore";
import * as Yup from "yup";
import { Form as FormikForm, Formik, Field } from "formik";
import { tiendaDefaultValues } from "../components/tiendas/tiendaHelper";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import Image from "next/image";

const columns = [
  {
    headerName: "FOTO",
    field: "storeFoto",
    renderCell: (tienda) => (
      <div className="relative h-10 w-10">
        <Image
          className="h-full w-full rounded-full object-cover object-center"
          src={tienda.storeFoto}
          alt="login"
          width={100}
          height={100}
        />
      </div>
    ),
  },
  { headerName: "RIF", field: "storeRif" },
  { headerName: "NOMBRE", field: "storeName" },
  { headerName: "DIRECCIÓN", field: "storeDireccion" },
  { headerName: "CORREO ELECTRÓNICO", field: "emailAddress" },
  { headerName: "TELÉFONO LOCAL", field: "phone" },
  { headerName: "WHATSAPP", field: "whatsapp" },
  { headerName: "FACEBOOK", field: "facebook" },
  { headerName: "TWITTER", field: "twitter" },
  { headerName: "INSTAGRAM", field: "instagram" },
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
const tiendaFormSchema = Yup.object().shape({
  storeFoto: Yup.string().required("Campo requerido"),
  storeRif: Yup.string()
    .required("Campo requerido")
    .min(8, "El nombre del login tiene que tener al menos un carácter")
    .max(100, "El nombre del login no puede superar los 100 carácteres"),
  storeName: Yup.string()
    .required("Campo requerido")
    .min(3, "El nombre tiene que tener al menos un carácter")
    .max(100, "El nombre no puede superar los 100 carácteres"),
  storeDireccion: Yup.string()
    .required("Campo requerido")
    .min(3, "El apellido tiene que tener al menos un carácter")
    .max(100, "El apellido no puede superar los 100 carácteres"),
  phone: Yup.string()
    .matches(/^[+0-9]+$/, "Debe ser +000000000000")
    .required("Campo requerido")
    .min(11, "El número tiene que ser mayor a 11"),
  whatsapp: Yup.string()
    .matches(/^[+0-9]+$/, "Debe ser +000000000000")
    .required("Campo requerido")
    .min(11, "El número tiene que ser mayor a 11"),
  emailAddress: Yup.string()
    .email("El email no tiene un formato válido")
    .required("Campo requerido"),
  descripcionCorta: Yup.string()
    .required("Campo requerido")
    .min(3, "La dirección tiene que tener al menos un carácter")
    .max(100, "la dirección no puede superar los 100 carácteres"),
  facebook: Yup.string().required("Campo requerido"),
  instagram: Yup.string().required("Campo requerido"),
  twitter: Yup.string().required("Campo requerido"),
});

const Tiendas = () => {
  const [searchValue, setSearchValue] = useState("");
  const isSubmitting = false;
  const { tiendas = [] } = useStore({
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
      <p className="text-gray-700 text-3xl mb-10 font-bold">Tiendas</p>
      <Container>
        <Formik
          validationSchema={tiendaFormSchema}
          initialValues={tiendaDefaultValues}
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
                    name="storeFoto"
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
                    name="storeRif"
                    as={Input}
                    bordered={true}
                    label="Rif"
                    placeholder="Rif-"
                    color="primary"
                    required
                    helperText={errors?.storeRif}
                    helperColor={errors?.storeRif ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="phone"
                    as={Input}
                    label="Teléfono Local"
                    placeholder="+000000000000"
                    color="primary"
                    required
                    helperText={errors?.phone}
                    helperColor={errors?.phone ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="whatsapp"
                    as={Input}
                    label="whatsapp"
                    placeholder="+000000000000"
                    color="primary"
                    required
                    helperText={errors?.whatsapp}
                    helperColor={errors?.whatsapp ? "error" : null}
                  />
                </div>
                <div className="grid grid-cols-2 gap-10 pt-9">
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="storeName"
                    as={Input}
                    label="Nombre de la Tienda"
                    placeholder="Nomre de la Tienda"
                    color="primary"
                    required
                    helperText={errors?.storeName}
                    helperColor={errors?.storeName ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    as={Input}
                    name="emailAddress"
                    label="Correo Electrónico"
                    placeholder="email@xxxx.xxx"
                    color="primary"
                    required
                    helperText={errors?.emailAddress}
                    helperColor={errors?.emailAddress ? "error" : null}
                  />
                </div>
                <div className="grid grid-cols-2 gap-10 pt-9">
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    as={Input}
                    name="storeDireccion"
                    label="Dirección"
                    placeholder="Ingrese la Ubicación"
                    color="primary"
                    required
                    helperText={errors?.storeDireccion}
                    helperColor={errors?.storeDireccion ? "error" : null}
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
                <div className="grid grid-cols-1 gap-10 pt-9">
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="descripcionCorta"
                    as={Input}
                    label="Descripción Corta"
                    placeholder="Ingrese la Descripción Corta"
                    color="primary"
                    required
                    helperText={errors?.descripcionCorta}
                    helperColor={errors?.descripcionCorta ? "error" : null}
                  />
                </div>
                <div className="grid grid-cols-3 gap-10 pt-9">
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    as={Input}
                    name="facebook"
                    label="Facebook"
                    placeholder="Ingrese Facebook"
                    color="primary"
                    required
                    helperText={errors?.facebook}
                    helperColor={errors?.facebook ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="instagram"
                    as={Input}
                    label="Instagram"
                    placeholder="@Instagram"
                    color="primary"
                    required
                    helperText={errors?.instagram}
                    helperColor={errors?.instagram ? "error" : null}
                  />
                  <Field
                    rounded
                    bordered={true}
                    type="text"
                    name="twitter"
                    as={Input}
                    label="Twitter"
                    placeholder="@Twitter"
                    color="primary"
                    required
                    helperText={errors?.twitter}
                    helperColor={errors?.twitter ? "error" : null}
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
            crear
          </button>
        </div>
      </Container>
      <div className=" mt-10">
        <Table
          columns={columns}
          items={tiendas.map((tienda) => ({
            ...tienda,
            key: tienda.storeId,
            actions: "actions",
          }))}
        />
      </div>
    </div>
  );
};
export default Tiendas;
