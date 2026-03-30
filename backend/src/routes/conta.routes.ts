import { Router } from "express";
import { contaController } from "../controllers/conta.controller.js";
import { AuthMiddlewere } from "../middlewares/auth.middlewere.js";

export const contasRotas = Router();

/**
 * @openapi
 * /api/conta:
 *   post:
 *     summary: Cadastra uma nova conta (Público)
 *     tags: [Contas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome: { type: string, example: "Wagner Silva" }
 *               cpf: { type: string, example: "123.456.789-00" }
 *               senha: { type: string, example: "123456" }
 *     responses:
 *       201: { description: "Conta criada com sucesso" }
 *       400: { description: "Erro no cadastro" }
 */
contasRotas.post('/conta', contaController.criar);

/**
 * @openapi
 * /api/conta/deposito:
 *   post:
 *     summary: Realiza um depósito na própria conta (Protegido)
 *     tags: [Contas]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               deposito: { type: number, example: 500.0 }
 *     responses:
 *       201: { description: "Depósito realizado com sucesso" }
 *       401: { description: "Não autorizado" }
 */
contasRotas.post('/conta/deposito', AuthMiddlewere.authHeaderVerification, contaController.depositar);


contasRotas.get('/conta', AuthMiddlewere.authHeaderVerification, contaController.visaoConta);