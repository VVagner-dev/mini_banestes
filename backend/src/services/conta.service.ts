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
    const conta = await prisma.conta.findUnique({ where: { cpf: cpf } });
    if (conta == null) {
        throw new Error("Conta não encontrada");
    }
    return await prisma.$transaction([
        prisma.conta.update({
            where: {
                cpf: conta.cpf
            },
            data: {
                saldo: {
                    increment: deposito
                }
            }
        }),
        prisma.transacao.create({
            data: {
                pagadorId: conta.id,
                remetenteId: conta.id,
                valor: deposito
            }
        })
    ])

}

