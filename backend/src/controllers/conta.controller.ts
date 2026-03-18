import { type Request, type Response } from "express";
import { criarConta } from "../services/conta.service.js";

export class contaController {

    static async criar(req: Request, res: Response) {
        const { nome, cpf, senha } = req.body
        try {
            const contaCriada = await criarConta(nome, cpf, senha);
            res.status(201).json({ contaCriada })
        }
        catch (error) {
            console.error(error)
            res.json({ menssage: "Erro ao criar a conta" })
        }
    }

}