import type { Decimal } from "@prisma/client/runtime/library"
import { prisma } from "../prisma.js"

export async function fazerPix(cpf: string, pix: string, valor: number) {
    const pagador = await prisma.conta.findUnique({ where: { cpf: cpf } });
    const remetente = await prisma.pixKeys.findUnique({ where: { key: pix }, include: { conta: true } })
    if (pagador == null || remetente == null) {
        throw new Error("conta não encontrada")
    } else {
        if (pagador.saldo.lessThan(valor)) {
            throw new Error("saldo insuficiente")
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