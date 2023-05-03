import React from "react";
import { Modal, Button, Text, Input } from "@nextui-org/react";
import { FaUserCircle } from "react-icons/fa";
import { Form as FormikForm, Formik, Field } from "formik";

export const ModalTiendaEditar = ({ store, visible, onClose }) => {
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
                    Editar Información del Tienda
                </Text>
            </Modal.Header>
            <Modal.Body className="nextui-c-grJsex-ikUaMfZ-css " >
                <Formik
                    initialValues={{
                        storeFoto: store?.storeFoto,
                        storeRif: store?.storeRif,
                        storeName: store?.storeName,
                        storeDireccion: store?.storeDireccion,
                        phone: store?.phone,
                        emailAddress: store?.emailAddress,
                        descripcionCorta: store?.descripcionCorta,
                        facebbok: store?.facebbok,
                        instagram: store?.instagram,
                        twitter: store?.twitter,
                        whatsapp: store?.whatsapp,
                    }}
                    onSubmit={values => console.log(values)}
                    enableReinitialize
                >
                    {({ values, errors }) => (
                        <div>
                            <div className="flex justify-center items-center mx-auto p-4 ">
                                <label htmlFor="upload-file">
                                    {values.storeFoto ? (
                                        <img src={values.storeFoto} alt="store profile" className="rounded-full w-72 h-72 object-cover" />
                                    ) : (
                                        <FaUserCircle size={180} color="#34D39C" />
                                    )}
                                    <p className="m-auto text-center cursor-pointer hover:text-blue-600">
                                        Subir Foto
                                    </p>
                                </label>
                            </div>
                            <div>

                                <div className="grid grid-cols-1 gap-6">
                                    <Field
                                        rounded
                                        type="text"
                                        name="storeName"
                                        bordered={true}
                                        label="Nombre de la Tienda"
                                        as={Input}
                                        color="primary"
                                        required
                                        helperText={errors?.storeName}
                                        helperColor={errors?.storeName ? "error" : null}
                                    />
                                    <Field
                                        rounded
                                        type="text"
                                        name="storeDireccion"
                                        bordered={true}
                                        label="Ubicación de la Tienda"
                                        as={Input}
                                        color="primary"
                                        required
                                        helperText={errors?.storeDireccion}
                                        helperColor={errors?.storeDireccion ? "error" : null}
                                    />
                                    <Field
                                        rounded
                                        type="text"
                                        name="emailAddress"
                                        bordered={true}
                                        label="Correo Electrónico"
                                        as={Input}
                                        color="primary"
                                        required
                                        helperText={errors?.emailAddress}
                                        helperColor={errors?.emailAddress ? "error" : null}
                                    />
                                    <Field
                                        rounded
                                        type="text"
                                        name="descripcionCorta"
                                        bordered={true}
                                        label="Descripción Corta"
                                        as={Input}
                                        color="primary"
                                        required
                                        helperText={errors?.descripcionCorta}
                                        helperColor={errors?.descripcionCorta ? "error" : null}
                                    />
                                    <div className="grid grid-cols-2 gap-4">
                                        <Field
                                            rounded
                                            type="text"
                                            name="storeRif"
                                            bordered={true}
                                            label="Rif"
                                            as={Input}
                                            color="primary"
                                            required
                                            helperText={errors?.storeRif}
                                            helperColor={errors?.storeRif ? "error" : null}
                                        />
                                        <Field
                                            rounded
                                            type="text"
                                            name="phone"
                                            bordered={true}
                                            label="Teléfono Local"
                                            as={Input}
                                            color="primary"
                                            required
                                            helperText={errors?.phone}
                                            helperColor={errors?.phone ? "error" : null}
                                        />
                                        <Field
                                            rounded
                                            type="text"
                                            name="whatsapp"
                                            bordered={true}
                                            label="Whatsapp"
                                            as={Input}
                                            color="primary"
                                            required
                                            helperText={errors?.whatsapp}
                                            helperColor={errors?.whatsapp ? "error" : null}
                                        />
                                        <Field
                                            rounded
                                            type="text"
                                            name="facebbok"
                                            bordered={true}
                                            label="Facebook"
                                            as={Input}
                                            color="primary"
                                            required
                                            helperText={errors?.facebbok}
                                            helperColor={errors?.facebbok ? "error" : null}
                                        />
                                        <Field
                                            rounded
                                            type="text"
                                            name="instagram"
                                            bordered={true}
                                            label="Instagram"
                                            as={Input}
                                            color="primary"
                                            required
                                            helperText={errors?.instagram}
                                            helperColor={errors?.instagram ? "error" : null}
                                        />
                                        <Field
                                            rounded
                                            type="text"
                                            name="twitter"
                                            bordered={true}
                                            label="Twitter"
                                            as={Input}
                                            color="primary"
                                            required
                                            helperText={errors?.twitter}
                                            helperColor={errors?.twitter ? "error" : null}
                                        />
                                    </div>
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
