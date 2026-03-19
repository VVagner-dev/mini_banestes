import z from "zod";

export const depositoSchema = z.object({
    cpf: z.string().min(11).max(15),
    deposito: z.number().positive("O valor deve ser maior que zero!")
});

export const criarContaSchema = z.object({
    cpf: z.string().min(11).max(15),
    nome: z.string().min(3),
    senha: z.string()
})