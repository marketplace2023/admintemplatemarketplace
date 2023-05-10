import { NextApiRequest, NextApiResponse } from "next";
import { Tienda } from "../../../../types/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<Tienda[]>) {
    res.status(200).json([
        {
            storeId: 1,
            storeFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            storeRif: "J485123892542",
            storeName: "La Gran Aventura C.A,",
            storeDireccion: "Guacara centro calle plaza",
            phone: "+584149498382",
            emailAddress: "licdafeliciajardim0305@gmail.com",
            descripcionCorta: "La descripción del negocio generalmente se incluye inmediatamente después del resumen ejecutivo en la mayoría de los planes de negocios.",
            facebook: "LaAventura",
            instagram: "@LaAventura",
            twitter: "@LaAventura",
            whatsapp: "+584145263620"
        },
        {
            storeId: 2,
            storeFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            storeRif: "J485123892542",
            storeName: "Sary C.A,",
            storeDireccion: "Guacara",
            phone: "+584149498382",
            emailAddress: "licdafeliciajardim0305@gmail.com",
            descripcionCorta: "La descripción del negocio generalmente se incluye inmediatamente después del resumen ejecutivo en la mayoría de los planes de negocios.",
            facebook: "LaAventura",
            instagram: "@LaAventura",
            twitter: "@LaAventura",
            whatsapp: "+584145263620"
        }
    ]);
}
