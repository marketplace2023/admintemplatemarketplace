import React from "react";
import { Table as NextUITable } from "@nextui-org/react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { Usuario } from '../../types/interfaces';

type TableProps = {
  usuarios: Usuario[];
}

export const Table = (props: TableProps) => {
  const { usuarios = [] } = props;

  return <NextUITable
    aria-label="Example table with static content"
    css={{
      height: "auto",
      minWidth: "100%",
      shadow: "$xl",
    }}
  >
    <NextUITable.Header>
      <NextUITable.Column>FOTO</NextUITable.Column>
      <NextUITable.Column>LOGIN</NextUITable.Column>
      <NextUITable.Column>NOMBRE</NextUITable.Column>
      <NextUITable.Column>APELLIDO</NextUITable.Column>
      <NextUITable.Column>CORREO ELECTRÓNICO</NextUITable.Column>
      <NextUITable.Column>TELÉFONO</NextUITable.Column>
      <NextUITable.Column>DIRECCIÓN</NextUITable.Column>
      <NextUITable.Column>ROL</NextUITable.Column>
      <NextUITable.Column>{''}</NextUITable.Column>
    </NextUITable.Header>

    <NextUITable.Body items={usuarios}>
      {(usuario) => <NextUITable.Row key={usuario.userId}>
        <NextUITable.Cell>
          <div className="relative h-10 w-10">
            <img
              className="h-full w-full rounded-full object-cover object-center"
              src={usuario.userFoto}
              alt=""
            />
          </div>
        </NextUITable.Cell>
        <NextUITable.Cell>{usuario.userLogin}</NextUITable.Cell>
        <NextUITable.Cell>{usuario.userFirstName}</NextUITable.Cell>
        <NextUITable.Cell>{usuario.userLastName}</NextUITable.Cell>
        <NextUITable.Cell>{usuario.phone}</NextUITable.Cell>
        <NextUITable.Cell>{usuario.emailAddress}</NextUITable.Cell>
        <NextUITable.Cell>{usuario.addressUser}</NextUITable.Cell>
        <NextUITable.Cell>{usuario.roles}</NextUITable.Cell>
        <NextUITable.Cell>
          <div className="flex">
            <div className="cursor-pointer text-blue-600 hover:text-blue-200">
              <BiEditAlt style={{ fontSize: '2em', marginLeft: '20px' }} />
            </div>
            <div className="cursor-pointer text-red-600 hover:text-red-200">
              <BiTrash style={{ fontSize: '2em', marginLeft: '20px' }} />
            </div>
          </div>
        </NextUITable.Cell>
      </NextUITable.Row>}
    </NextUITable.Body>
    <NextUITable.Pagination
      shadow
      noMargin
      align="center"
      rowsPerPage={3}
      onPageChange={(page) => console.log({ page })}
    />
  </NextUITable>;
};
