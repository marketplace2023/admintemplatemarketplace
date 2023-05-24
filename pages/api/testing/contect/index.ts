import { NextApiRequest, NextApiResponse } from "next";
import { Ayuda } from "../../../../types/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<Ayuda[]>) {
    res.status(200).json([
        {
            contectId: 1,
            contectCodigo: "02458",
            contectTitle: "Cómo Pagar",
            contectTexto: "En el código anterior, hemos agregado la clase flex-row-reverse al contenedor <div>. Esto establecerá la dirección de flexión como de derecha a izquierda, lo que hará que el botón se alinee a la derecha dentro del contenedor flex. Ahora, el botón estará en el lado derecho del contenedor flex. Ten en cuenta que si hay otros elementos dentro del contenedor, su orden también se invertirá. Si deseas que solo el botón se muestre a la derecha y el resto de los elementos mantengan su posición, puedes envolver el botón en un contenedor adicional y aplicarle la clase mlauto para que se desplace hacia la derecha. Aquí tienes un ejemplo",
            contectTopic: "Ventas"
        },
        {
            contectId: 2,
            contectCodigo: "02469",
            contectTitle: "Cómo Pagar",
            contectTexto: "En el código anterior, hemos agregado la clase flex-row-reverse al contenedor <div>. Esto establecerá la dirección de flexión como de derecha a izquierda, lo que hará que el botón se alinee a la derecha dentro del contenedor flex. Ahora, el botón estará en el lado derecho del contenedor flex. Ten en cuenta que si hay otros elementos dentro del contenedor, su orden también se invertirá. Si deseas que solo el botón se muestre a la derecha y el resto de los elementos mantengan su posición, puedes envolver el botón en un contenedor adicional y aplicarle la clase mlauto para que se desplace hacia la derecha. Aquí tienes un ejemplo",
            contectTopic: "Ventas"
        },
        {
            contectId: 3,
            contectCodigo: "02458",
            contectTitle: "Cómo Pagar",
            contectTexto: "En el código anterior, hemos agregado la clase flex-row-reverse al contenedor <div>. Esto establecerá la dirección de flexión como de derecha a izquierda, lo que hará que el botón se alinee a la derecha dentro del contenedor flex. Ahora, el botón estará en el lado derecho del contenedor flex. Ten en cuenta que si hay otros elementos dentro del contenedor, su orden también se invertirá. Si deseas que solo el botón se muestre a la derecha y el resto de los elementos mantengan su posición, puedes envolver el botón en un contenedor adicional y aplicarle la clase mlauto para que se desplace hacia la derecha. Aquí tienes un ejemplo",
            contectTopic: "Ventas"
        },
        {
            contectId: 4,
            contectCodigo: "12428",
            contectTitle: "Cómo Pagar",
            contectTexto: "En el código anterior, hemos agregado la clase flex-row-reverse al contenedor <div>. Esto establecerá la dirección de flexión como de derecha a izquierda, lo que hará que el botón se alinee a la derecha dentro del contenedor flex. Ahora, el botón estará en el lado derecho del contenedor flex. Ten en cuenta que si hay otros elementos dentro del contenedor, su orden también se invertirá. Si deseas que solo el botón se muestre a la derecha y el resto de los elementos mantengan su posición, puedes envolver el botón en un contenedor adicional y aplicarle la clase mlauto para que se desplace hacia la derecha. Aquí tienes un ejemplo",
            contectTopic: "Ventas"
        },
        {
            contectId: 5,
            contectCodigo: "15369",
            contectTitle: "Cómo Pagar",
            contectTexto: "En el código anterior, hemos agregado la clase flex-row-reverse al contenedor <div>. Esto establecerá la dirección de flexión como de derecha a izquierda, lo que hará que el botón se alinee a la derecha dentro del contenedor flex. Ahora, el botón estará en el lado derecho del contenedor flex. Ten en cuenta que si hay otros elementos dentro del contenedor, su orden también se invertirá. Si deseas que solo el botón se muestre a la derecha y el resto de los elementos mantengan su posición, puedes envolver el botón en un contenedor adicional y aplicarle la clase mlauto para que se desplace hacia la derecha. Aquí tienes un ejemplo",
            contectTopic: "Ventas"
        }
    ]);
}