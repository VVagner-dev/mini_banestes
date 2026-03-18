import { type Request, type Response } from "express";
import { criarConta, depositar } from "../services/conta.service.js";

export class contaController {

    static async criar(req: Request, res: Response) {
        const { nome, cpf, senha } = req.body
        try {
            const contaCriada = await criarConta(nome, cpf, senha);
            res.status(201).json({ contaCriada })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "Erro ao criar a conta" })
        }
    }

    static async depositar(req: Request, res: Response) {
        const { deposito, cpf } = req.body
        try {
            const depositou = await depositar(cpf, deposito);
            res.status(201).json({ depositou })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "Erro ao depositar na conta" })
        }
    }




}