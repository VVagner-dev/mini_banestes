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

export async function depositar(cpf: string, deposito: number) {

    return await prisma.conta.update({
        where: {
            cpf: cpf
        },
        data: {
            saldo: {
                increment: deposito
            }
        }
    })

}

