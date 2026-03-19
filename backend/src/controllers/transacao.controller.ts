import { type Request, type Response } from "express";
import { fazerPix, verExtrato } from "../services/transacao.service.js";
import { fazerPixSchema, extratoSchema } from "../schemas/transacao.schema.js";

export class TransacaoController {

    static teste(req: Request, res: Response) {
        return res.json({ message: "Rota de transação funcionando a parti do controler" })
    }

    static async fazerPix(req: Request, res: Response) {
        const validacao = fazerPixSchema.safeParse(req.body)

        if (!validacao.success) {
            return res.status(400).json({
                message: "Dados invalidos",
                erros: validacao.error.format()
            })
        }
        const { pix, cpf, valor, senha } = validacao.data

        try {
            const pixRealizado = await fazerPix(cpf, pix, valor, senha)
            res.status(201).json({ pix: pixRealizado })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "erro ao realizar o pix" })
        }
    }

    static async extrato(req: Request, res: Response) {
        const validacao = extratoSchema.safeParse(req.body)

        if (!validacao.success) {
            return res.status(400).json({
                message: "Dados invalidos",
                erros: validacao.error.format()
            })
        }
        const { cpf } = validacao.data

        try {
            const extrato = await verExtrato(cpf)
            res.status(201).json({ extrato: extrato })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssage: "erro ao ver o extrato" })
        }

    }

}