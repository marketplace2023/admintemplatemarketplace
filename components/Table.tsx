import { ReactNode } from "react"
import { Table as NUITable } from "@nextui-org/react";

type TableProps<T> = {
    columns: { headerName: string, field: keyof T, renderCell?: (item: T) => ReactNode }[],
    items: T[],
}

export const Table = <T,>(props: TableProps<T>) => {
    const { columns, items } = props;

    return <>
        <NUITable
            aria-label="Table"
            css={{
                height: "auto",
                minWidth: "100%",
                shadow: "$xl",
            }}
        >
            <NUITable.Header columns={columns}>
                {(column) => <NUITable.Column key={column.field as string}>{column.headerName}</NUITable.Column>}
            </NUITable.Header>

            <NUITable.Body items={items}>
                {items.map((item, itemIndex) => <NUITable.Row key={itemIndex}>
                    {columns.map((column, columnIndex) => <NUITable.Cell key={columnIndex}>
                        {column.renderCell
                            ? column.renderCell(item)
                            : item[column.field as string]
                        }
                    </NUITable.Cell>)}
                </NUITable.Row>)}
            </NUITable.Body>
            <NUITable.Pagination
                shadow
                noMargin
                align="center"
                rowsPerPage={4}
                onPageChange={(page) => console.log({ page })}
            />
        </NUITable>
    </>;
};
