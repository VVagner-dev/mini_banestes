import { type Request, type Response } from "express";

export class TransacaoController {

    static teste(req: Request, res: Response) {
        return res.json({ message: "Rota de transação funcionando a parti do controler" })
    }

}