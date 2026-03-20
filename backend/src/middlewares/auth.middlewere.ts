import { type NextFunction, type Request, type Response } from "express";
import jwt from "jsonwebtoken";
import { prisma } from "../prisma.js";

export class AuthMiddlewere {

    static async authHeaderVerification(req: Request, res: Response, next: NextFunction) {
        const authHeader = req.headers.authorization
        if (authHeader == null) {
            return res.status(401).json({ menssagem: "Token não fornecido" })
        }
        const token = authHeader.split(" ")[1];
        if (token == null) {
            return res.status(401).json({ menssagem: "Token mal formado" })
        }

        try {
            const codificado = jwt.verify(token, process.env.JWT_SECRET || "sua_chave");

            (req as any).user = codificado;
            next()
        } catch (error) {
            return res.status(401).json({ menssagem: "Token invalido" })
        }

    }
}