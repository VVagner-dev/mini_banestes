import { type Request, type Response } from "express";
import { fazerPix } from "../services/transacao.service.js";
export class TransacaoController {

    static teste(req: Request, res: Response) {
        return res.json({ message: "Rota de transação funcionando a parti do controler" })
    }

    static async fazerPix(req: Request, res: Response) {
        const { pix, cpf, valor } = req.body

        try {
            const pixRealizado = await fazerPix(cpf, pix, valor)
            res.status(201).json({ pix: pixRealizado })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "erro ao realizar o pix" })
        }
    }

}