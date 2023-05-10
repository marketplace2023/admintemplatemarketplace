import React from "react";
import Container from "../components/usuarios/Container";
import { Card, Input, Text, Textarea } from "@nextui-org/react";
import { Form as FormikForm, Formik, Field } from "formik";
import { publicidadDefaultValues } from "../components/publicidad/publicidadHelper";

const publicidad = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };
  return (
    <div>
      <p className="text-gray-700 text-3xl mb-10 font-bold">
        Seccion Publicitaria
      </p>
      <Container>
        <Formik
            // validationSchema={tiendaFormSchema}
            initialValues={publicidadDefaultValues}
            onSubmit={handleSubmit}
            enableReinitialize
        >
          {({ values, errors }) => (
            <div className="p-4">
              <div className=" my-12 ">
                <label>
                  <input type="file" name="" hidden="false"/>
                    <Card variant="bordered">
                      <Card.Body className="h-48">
                        <Text className=" flex justify-center">
                          Arrastre una imagen o haga click aqui
                        </Text>
                      </Card.Body>
                    </Card>
                </label>
              </div>
                <div className="grid grid-cols-1 gap-10">
                  <Field
                      rounded
                      type="text"
                      name="storeRif"
                      as={Input}
                      bordered={true}
                      label="Título"
                      placeholder="Ingrese el título de la publicidad"
                      color="primary"
                      required
                      helperText={errors?.storeRif}
                      helperColor={errors?.storeRif ? "error" : null}
                  />
                  <Field
                      rounded
                      type="text"
                      name="storeRif"
                      as={Textarea}
                      bordered={true}
                      label="Descripción"
                      placeholder="Ingrese descripción corta de la publicidad"
                      color="primary"
                      required
                      helperText={errors?.storeRif}
                      helperColor={errors?.storeRif ? "error" : null}
                  />
                </div>
                <div className="flex justify-end mt-6">
                    <button
                        // type="submit"
                        // disabled={isSubmitting}
                        className="text-white bg-emerald-400 hover:bg-emerald-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Guardar
                    </button>
                </div>
              </div>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default publicidad;
