import { prisma } from "../prisma.js"

export async function criarConta(nome: string, cpf: string, senha: string) {
    return await prisma.conta.create({
        data: {
            nome: nome,
            cpf: cpf,
            senha: senha
        }
    })
}