import { prisma } from "../prisma.js";
import crypto from "node:crypto"

export async function criarPix(cpf: string) {
    const conta = await prisma.conta.findUnique({ where: { cpf: cpf } });
    if (conta == null) {
        throw new Error("conta não encontrada")
    } else {
        const totalChaves = await prisma.pixKeys.count({
            where: {
                contaId: conta.id
            }
        });
        if (totalChaves >= 3) {
            throw new Error("não pode ter mais de 3 chaves por conta")
        } else {
            const chaveAleatoria = crypto.randomUUID();
            return await prisma.pixKeys.create({
                data: {
                    key: chaveAleatoria,
                    contaId: conta.id
                }
            })
        }

    }
}


export async function deletarChavePix(cpf: string, chave: string) {
    try {
        return await prisma.pixKeys.delete({
            where: {
                key: chave,
                conta: {
                    cpf: cpf
                }
            }
        });
    }
    catch (error) {
        throw new Error("erro ao excluir chave pix")
    }
}





