import { type Request, type Response } from "express";
import { criarPix, deletarChavePix } from "../services/pix.service.js";

export class pixController {

    static async criar(req: Request, res: Response) {
        const cpf = req.body.cpf
        try {
            const pixCriado = await criarPix(cpf);
            res.status(201).json({ pix: pixCriado })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "Erro ao criar a chave pix" })
        }
    }

    static async delete(req: Request, res: Response) {
        const { cpf, key } = req.body
        try {
            const pixDeletado = await deletarChavePix(cpf, key);
            res.status(204).send();
        } catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "Erro ao deletar a chave pix" })
        }
    }

}