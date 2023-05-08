import { useState } from "react";
import { Table as NextUITable } from "@nextui-org/react";
import { BiEditAlt, BiTrash } from "react-icons/bi";
import { Tienda } from '../../types/interfaces';
import { ModalTiendaEditar } from "./ModalTiendaEditar";

type TableProps = {
    tiendas: Tienda[];
}

export const Table = (props: TableProps) => {
    const { tiendas = [] } = props;

    const [selectedStore, setSelectedStore] = useState(null);

    return <>
        <NextUITable
            aria-label="Example table with static content"

            css={{
                height: "auto",
                minWidth: "100%",
                shadow: "$xl",
            }}
        >
            <NextUITable.Header>
                <NextUITable.Column>FOTO</NextUITable.Column>
                <NextUITable.Column>TIENDA</NextUITable.Column>
                <NextUITable.Column>RIF</NextUITable.Column>
                <NextUITable.Column>DIRECCIÓN</NextUITable.Column>
                <NextUITable.Column>TELÉFONO LOCAL</NextUITable.Column>
                <NextUITable.Column>CORREO ELECTRÓNICO</NextUITable.Column>
                <NextUITable.Column>WHATSAPP</NextUITable.Column>
                <NextUITable.Column>FACEBOOK</NextUITable.Column>
                <NextUITable.Column>INSTAGRAM</NextUITable.Column>
                <NextUITable.Column>TWITTER</NextUITable.Column>
                <NextUITable.Column>{''}</NextUITable.Column>
            </NextUITable.Header>

            <NextUITable.Body items={tiendas}>
                {(tienda) => <NextUITable.Row key={tienda.storeId} >
                    <NextUITable.Cell>
                        <div className="relative h-10 w-10">
                            <img
                                className="h-full w-full rounded-full object-cover object-center"
                                src={tienda.storeFoto}
                                alt=""
                            />
                        </div>
                    </NextUITable.Cell>
                    <NextUITable.Cell>{tienda.storeName}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.storeRif}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.storeDireccion}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.phone}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.emailAddress}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.whatsapp}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.facebbok}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.instagram}</NextUITable.Cell>
                    <NextUITable.Cell>{tienda.twitter}</NextUITable.Cell>

                    <NextUITable.Cell>
                        <div className="flex">
                            <div
                                className="cursor-pointer text-blue-600 hover:text-blue-200"
                                onClick={() => setSelectedStore(tienda)}
                            >
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
        </NextUITable>

        <ModalTiendaEditar
            store={selectedStore}
            visible={!!selectedStore}
            onClose={() => setSelectedStore(null)}
        />
    </>;
};
