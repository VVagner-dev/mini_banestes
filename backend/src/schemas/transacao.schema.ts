import z from "zod";

export const fazerPixSchema = z.object({
    valor: z.number().positive("O valor deve ser maior que zero!"),
    pix: z.string(),
    senha: z.string()
})

