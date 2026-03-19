import { Router } from "express";
import { TransacaoController } from "../controllers/transacao.controller.js";


export const transacaoRotas = Router();

transacaoRotas.get('/transacao', TransacaoController.teste);
transacaoRotas.post('/fazerPix', TransacaoController.fazerPix);
transacaoRotas.post('/extrato', TransacaoController.extrato);