import z from "zod";

export const loginSchema = z.object({
    cpf: z.string().min(11).max(15),
    senha: z.string().min(6)
});

export const refreshSchema = z.object({
    token: z.string().uuid()
});