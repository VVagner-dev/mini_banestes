import { type Request, type Response } from "express";
import { criarConta, depositar, verConta } from "../services/conta.service.js";
import { depositoSchema, criarContaSchema, verContaSchema } from "../schemas/conta.schema.js";
export class contaController {

    static async criar(req: Request, res: Response) {
        const validacao = criarContaSchema.safeParse(req.body)

        if (!validacao.success) {
            return res.status(400).json({
                message: "Dados invalidos",
                erros: validacao.error.format()
            })
        }

        const { nome, cpf, senha } = validacao.data
        try {
            const contaCriada = await criarConta(nome, cpf, senha);
            res.status(201).json({ contaCriada })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssagem: "Erro ao criar a conta" })
        }
    }

    static async depositar(req: Request, res: Response) {
        const validacao = depositoSchema.safeParse(req.body)

        if (!validacao.success) {
            return res.status(400).json({
                message: "Dados invalidos",
                erros: validacao.error.format()
            })
        }

        const { deposito } = validacao.data
        const { cpf } = (req as any).user;
        try {
            const depositou = await depositar(cpf, deposito);
            res.status(201).json({ depositou })
        }
        catch (error) {
            console.error(error)
            res.status(400).json({ menssagem: "Erro ao depositar na conta" })
        }
    }

    static async visaoConta(req: Request, res: Response){
         const { cpf } = (req as any).user;
        try{
            const visaoConta = await verConta(cpf)
            res.status(200).json({visaoConta})
        }catch(error){
            console.error(error)
            res.status(400).json({menssagem: "Erro ao ver a conta"})
        }
    }



}