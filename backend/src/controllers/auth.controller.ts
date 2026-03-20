import { type Request, type Response } from "express";
import { login, refresh } from "../services/auth.service.js";
import { loginSchema, refreshSchema } from "../schemas/auth.schema.js";

export class AuthControler {

    static async login(req: Request, res: Response) {
        const validacao = loginSchema.safeParse(req.body)

        if (!validacao.success) {
            return res.status(400).json({
                message: "Dados invalidos",
                erros: validacao.error.format()
            })
        }

        const { cpf, senha } = validacao.data
        try {
            const loginFeito = await login(cpf, senha)
            return res.status(200).json(loginFeito)
        }
        catch (error) {
            console.error(error)
            return res.status(400).json({ menssagem: "Erro ao realizar o login" })

        }
    }


    static async authRefresh(req: Request, res: Response) {
        const validacao = refreshSchema.safeParse(req.body)

        if (!validacao.success) {
            return res.status(400).json({
                message: "Dados invalidos",
                erros: validacao.error.format()
            })
        }

        const { token } = validacao.data
        try {
            const refreshFeito = await refresh(token)
            return res.status(200).json(refreshFeito)
        }
        catch (error) {
            console.error(error)
            return res.status(400).json({ menssagem: "Erro ao realizar o refresh" })
        }
    }
}