import { prisma } from "../prisma.js";
import bcrypt from "bcrypt"
import crypto from "node:crypto"
import jwt from "jsonwebtoken"
import { error } from "node:console";

export async function login(cpf: string, senha: string) {
    const conta = await prisma.conta.findUnique({ where: { cpf: cpf } })
    if (conta == null) {
        throw new Error("conta não encontrada")
    } else {
        if (!(await bcrypt.compare(senha, conta.senha))) {
            throw new Error("senha incorreta")
        }
    }
    const token = crypto.randomUUID();
    const expiraEm = new Date(Date.now() + 24 * 60 * 60 * 1000)
    await prisma.refreshTokens.create({
        data: {
            Token: token,
            userID: conta.id,
            expiraEm: expiraEm,
            revoked: false
        }
    })

    const accessToken = jwt.sign({
        id: conta.id, cpf: conta.cpf
    },
        process.env.JWT_SECRET || "chave_secreta_super_segura",
        { expiresIn: "15m" }
    );

    return {
        accessToken,
        refreshToken: token
    }


}

export async function refresh(token: string) {
    const refre = await prisma.refreshTokens.findUnique({ where: { Token: token }, include: { user: true } })
    if (refre == null) {
        throw new Error("Token invalido")
    }
    if (refre.revoked == true) {
        throw new Error("token vencido")
    }
    if (refre.expiraEm < new Date()) {
        throw new Error("Sessão expirada")
    }

    const accessToken = jwt.sign({
        id: refre.user.id, cpf: refre.user.cpf
    },
        process.env.JWT_SECRET || "chave_secreta_super_segura",
        { expiresIn: "15m" }
    );

    return { accessToken: accessToken }


}