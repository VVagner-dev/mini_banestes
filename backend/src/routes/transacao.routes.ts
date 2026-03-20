import { Router } from "express";
import { TransacaoController } from "../controllers/transacao.controller.js";
import { AuthMiddlewere } from "../middlewares/auth.middlewere.js";

export const transacaoRotas = Router();



transacaoRotas.get('/transacao', TransacaoController.teste);
/**
 * @openapi
 * /api/fazerPix:
 *   post:
 *     summary: Realiza um PIX (Protegido)
 *     tags: [Transações]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               pix: { type: string, example: "chave-destino" }
 *               valor: { type: number, example: 50.0 }
 *               senha: { type: string, example: "123456" }
 *     responses:
 *       201:
 *         description: Pix realizado com sucesso.
 *       400:
 *         description: Dados inválidos ou erro no Pix.
 */

transacaoRotas.post('/fazerPix', AuthMiddlewere.authHeaderVerification, TransacaoController.fazerPix);

/**
 * @openapi
 * /api/extrato:
 *   get:
 *     summary: Visualiza o extrato da conta logada (Protegido)
 *     tags: [Transações]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de transações.
 *       401:
 *         description: Não autorizado.
 */
transacaoRotas.get('/extrato', AuthMiddlewere.authHeaderVerification, TransacaoController.extrato);