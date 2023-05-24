import { NextApiRequest, NextApiResponse } from "next";
import { Topico } from "../../../../types/interfaces";

export default function handler(req: NextApiRequest, res: NextApiResponse<Topico[]>) {
    res.status(200).json([
        {
            topicId: 1,
            topicCodigo: "02456",
            topicTitle: "Cómo Pagar",
            topicIcono: "https://images.unsplash.com/photo-1601046668428-94ea13437736?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80",
            topicTopic: "Ventas"
        }
        // {
        //     topicId: 2,
        //     topicCodigo: "02789",
        //     topicTitle: "Cómo Pagar",
        //     topicIcono: "https://i.imgur.com/SasQOnb.png",
        //     topicTopic: "Pagos"
        // },
        // {
        //     topicId: 3,
        //     topicCodigo: "02908",
        //     topicTitle: "Cómo Pagar",
        //     topicIcono: "https://i.imgur.com/abU3Bt4.png",
        //     topicTopic: "Reclamos"
        // },
        // {
        //     topicId: 4,
        //     topicCodigo: "16547",
        //     topicTitle: "Cómo Pagar",
        //     topicIcono: "https://i.imgur.com/VjRK5n9.png",
        //     topicTopic: "Tiendas"
        // }
    ]);
}