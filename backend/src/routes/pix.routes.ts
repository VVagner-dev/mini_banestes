import { Router } from "express";
import { pixController } from "../controllers/pix.controller.js";


export const pixRotas = Router();

pixRotas.post('/pix', pixController.criar);
pixRotas.delete('/pix', pixController.delete);