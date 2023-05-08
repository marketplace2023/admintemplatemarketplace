import { NextApiRequest, NextApiResponse } from "next";
import { Admin } from "../../../../types/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<Admin[]>) {
    res.status(200).json([
        {
            adminId: 1,
            adminFoto: "https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
            adminLogin: "FJardim",
            adminName: "Felicia de Carmen",
            adminLastName: "Jardim",
            adminphone: "+584149498382",
            adminEmailAddress: "licdafeliciajardim0305@gmail.com"

        },
        {
            adminId: 1,
            adminFoto: "https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
            adminLogin: "FJardim",
            adminName: "Felicia de Carmen",
            adminLastName: "Jardim",
            adminphone: "+584149498382",
            adminEmailAddress: "licdafeliciajardim0305@gmail.com"
        },
        {
            adminId: 1,
            adminFoto: "https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
            adminLogin: "FJardim",
            adminName: "Felicia de Carmen",
            adminLastName: "Jardim",
            adminphone: "+584149498382",
            adminEmailAddress: "licdafeliciajardim0305@gmail.com"
        }
    ]);
}