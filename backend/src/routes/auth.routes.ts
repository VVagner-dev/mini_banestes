import { Router } from "express";
import { AuthControler } from "../controllers/auth.controller.js";

export const authRotas = Router();

/**
 * @openapi
 * /api/login:
 *   post:
 *     summary: Realiza o login (Público)
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cpf:
 *                 type: string
 *                 example: "123.456.789-00"
 *               senha:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login bem-sucedido. Retorna tokens.
 *       400:
 *         description: Dados inválidos ou erro no login.
 */
authRotas.post('/login', AuthControler.login);

/**
 * @openapi
 * /api/refresh:
 *   post:
 *     summary: Gera um novo AccessToken (Público)
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               token:
 *                 type: string
 *                 example: "uuid-do-seu-refresh-token"
 *     responses:
 *       200:
 *         description: Novo AccessToken gerado.
 *       400:
 *         description: Token inválido ou expirado.
 */
authRotas.post('/refresh', AuthControler.authRefresh);