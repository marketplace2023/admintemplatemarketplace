import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Form as FormikForm, Formik, Field } from "formik";

export const ModalUsuarioEditar = ({ user, visible, onClose }) => {
    console.log(user)
    return (
        <Modal
            closeButton
            preventClose
            aria-labelledby="modal-title"
            open={visible}
            onClose={onClose}
        >
            <Modal.Header>
                <Text id="modal-title" b size={32}>
                    Editar Información del Usuario
                </Text>
            </Modal.Header>
            <Modal.Body className="nextui-c-grJsex-ikUaMfZ-css " >
                <Formik
                    initialValues={{
                        userFoto: user?.userFoto,
                        userLogin: user?.userLogin,
                        userFirstName: user?.userFirstName,
                        userLastName: user?.userLastName,
                        phone: user?.phone,
                        emailAddress: user?.emailAddress,
                        addressUser: user?.addressUser,
                        roles: user?.roles,
                    }}
                    onSubmit={values => console.log(values)}
                    enableReinitialize
                >
                    {({ values, errors }) => (
                        <div>
                            <div className="flex justify-center items-center mx-auto p-4 ">
                                <label htmlFor="upload-file">
                                    {values.userFoto ? (
                                        <img src={values.userFoto} alt="user profile" className="rounded-full w-72 h-72 object-cover" />
                                    ) : (
                                        <FaUserCircle size={180} color="#34D39C" />
                                    )}
                                    <p className="m-auto text-center cursor-pointer hover:text-blue-600">
                                        Subir Foto
                                    </p>
                                </label>
                            </div>
                            <div className="grid grid-cols-1 gap-10 p-6">
                                <Field
                                    rounded
                                    type="text"
                                    name="userFirstName"
                                    bordered={true}
                                    label="Nombre"
                                    as={Input}
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
                            <div className=" w-full p-6 ">
                                <div className="grid grid-cols-2 gap-10">
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
                            </div>
                        </div>
                    )}
                </Formik>
            </Modal.Body>
            <Modal.Footer>
                <Button auto flat color="error" onPress={onClose}>
                    Close
                </Button>
                <Button auto flat color="success" onPress={onClose}>
                    guardar
                </Button>
            </Modal.Footer>
        </Modal >
    )
}
