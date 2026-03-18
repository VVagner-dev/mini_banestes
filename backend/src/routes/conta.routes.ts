import { Router } from "express";
import { contaController } from "../controllers/conta.controller.js";


export const contasRotas = Router();

contasRotas.post('/conta', contaController.criar);
contasRotas.post('/conta/deposito', contaController.depositar);