import { prisma } from "../prisma.js"
import bcrypt from "bcrypt";


export async function fazerPix(cpf: string, pix: string, valor: number, senha: string) {
    const pagador = await prisma.conta.findUnique({ where: { cpf: cpf } });
    const remetente = await prisma.pixKeys.findUnique({ where: { key: pix }, include: { conta: true } })
    if (pagador == null || remetente == null) {
        throw new Error("conta não encontrada")
    } else {
        if (!(await bcrypt.compare(senha, pagador.senha))) {
            throw new Error("senha incorreta")
        }
        if (pagador.saldo.lessThan(valor)) {
            throw new Error("saldo insuficiente")
        }if(pagador.id == remetente.conta.id){
            throw new Error("pix para a mesma conta")
        }
        await prisma.$transaction([
            prisma.conta.update({
                where: {
                    cpf: cpf
                },
                data: {
                    saldo: {
                        decrement: valor
                    }
                }
            }),
            prisma.conta.update({
                where: {
                    id: remetente.conta.id
                },
                data: {
                    saldo: {
                        increment: valor
                    }
                }
            }),
            prisma.transacao.create({
                data: {
                    pagadorId: pagador.id,
                    remetenteId: remetente.conta.id,
                    valor: valor
                }
            })
        ])
    }

}

export async function verExtrato(cpf: string) {
    const conta = await prisma.conta.findUnique({ where: { cpf: cpf } });
    if (conta == null) {
        throw new Error("Conta não encontrada");
    }
    return await prisma.transacao.findMany({
        where: {
            OR: [
                { pagadorId: conta.id },
                { remetenteId: conta.id }
            ]
        },
        orderBy: { DataHora: 'desc' }
    })
}
