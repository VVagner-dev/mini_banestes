import { Router } from "express";
import { pixController } from "../controllers/pix.controller.js";
import { AuthMiddlewere } from "../middlewares/auth.middlewere.js";

export const pixRotas = Router();

/**
 * @openapi
 * /api/pix:
 *   post:
 *     summary: Gera uma nova chave Pix aleatória (Protegido)
 *     tags: [PIX]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       201:
 *         description: Chave Pix criada com sucesso.
 *       401:
 *         description: Não autorizado ou Token inválido.
 */
pixRotas.post('/pix', AuthMiddlewere.authHeaderVerification, pixController.criar);

/**
 * @openapi
 * /api/pix:
 *   delete:
 *     summary: Deleta uma chave Pix específica (Protegido)
 *     tags: [PIX]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               key: { type: string, example: "uuid-da-chave-pix" }
 *     responses:
 *       204:
 *         description: Chave deletada com sucesso.
 *       400:
 *         description: Erro ao deletar a chave.
 */
pixRotas.delete('/pix', AuthMiddlewere.authHeaderVerification, pixController.delete);