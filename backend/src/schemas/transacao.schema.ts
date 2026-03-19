import z from "zod";

export const fazerPixSchema = z.object({
    cpf: z.string().min(11).max(15),
    valor: z.number().positive("O valor deve ser maior que zero!"),
    pix: z.string(),
    senha: z.string()
})

export const extratoSchema = z.object({
    cpf: z.string().min(11).max(15),
})

