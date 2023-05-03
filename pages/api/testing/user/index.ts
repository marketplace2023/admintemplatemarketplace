import { NextApiRequest, NextApiResponse } from "next";
import { Usuario } from "../../../../types/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<Usuario[]>) {
    res.status(200).json([
        {
            userId: 1,
            userFoto: "https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
            userLogin: "FJardim",
            userFirstName: "Felicia de Carmen",
            userLastName: "Jardim",
            phone: "+584149498382",
            emailAddress: "licdafeliciajardim0305@gmail.com",
            addressUser: "Guacara centro calle plaza",
            roles: "Admin"
        },
        {
            userId: 2,
            userFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            userLogin: "APerez",
            userFirstName: "Alejandro Manuel",
            userLastName: "Perez",
            phone: "+584249497403",
            emailAddress: "aleperez541@gmail.com",
            addressUser: "Valencia San Diego calle 3-2 Sol",
            roles: "Cliente"
        },
        {
            userId: 3,
            userFoto: "https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
            userLogin: "FLopez",
            userFirstName: "Felipe ",
            userLastName: "Lopez",
            phone: "+584149498382",
            emailAddress: "felipelopez5@gmail.com",
            addressUser: "Guacara centro calle plaza",
            roles: "Admin"
        },
        {
            userId: 4,
            userFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            userLogin: "APerez",
            userFirstName: "Alejandro Andres",
            userLastName: "Perez",
            phone: "+584249497403",
            emailAddress: "aandres41@gmail.com",
            addressUser: "Valencia San Diego calle 3-2 Sol",
            roles: "Cliente"
        },
        {
            userId: 5,
            userFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            userLogin: "Francisco",
            userFirstName: "Francisco",
            userLastName: "Lara",
            phone: "+584268956230",
            emailAddress: "franciscolara@gmail.com",
            addressUser: "Guacara centro calle plaza",
            roles: "Admin"
        },
        {
            userId: 6,
            userFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            userLogin: "LPerez",
            userFirstName: "Luis",
            userLastName: "Perez",
            phone: "+584269872036",
            emailAddress: "lperez@gmail.com",
            addressUser: "Valencia San Diego calle 3-2 Sol",
            roles: "Cliente"
        }
        ,
        {
            userId: 7,
            userFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            userLogin: "Mariaj",
            userFirstName: "Maria de Carmen",
            userLastName: "Jimenez",
            phone: "+584125697103",
            emailAddress: "mariaj@gmail.com",
            addressUser: "Guacara centro calle plaza",
            roles: "Admin"
        },
        {
            userId: 8,
            userFoto: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
            userLogin: "MPerez",
            userFirstName: "Manuel",
            userLastName: "Perez",
            phone: "+584249497403",
            emailAddress: "mperez541@gmail.com",
            addressUser: "Valencia San Diego calle 3-2 Sol",
            roles: "Cliente"
        }
    ]);
}
