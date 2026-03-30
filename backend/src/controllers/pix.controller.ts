import { type Request, type Response } from "express";
import { criarPix, deletarChavePix } from "../services/pix.service.js";

export class pixController {

    static async criar(req: Request, res: Response) {
        const { cpf } = (req as any).user;
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
        const {key } = req.body
        const { cpf } = (req as any).user;
        try {
            const pixDeletado = await deletarChavePix(cpf, key);
            res.status(204).send();
        } catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "Erro ao deletar a chave pix" })
        }
    }

}