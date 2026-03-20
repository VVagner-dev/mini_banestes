import express from "express";
import { transacaoRotas } from "./routes/transacao.routes.js";
import { contasRotas } from "./routes/conta.routes.js";
import { pixRotas } from "./routes/pix.routes.js";
import { authRotas } from "./routes/auth.routes.js";
import swaggerUi from 'swagger-ui-express'
import { swaggerSpec } from "./swagger.js";
import cors from "cors"


const app = express();
const porta = 3001;

app.use(express.json())
app.use(cors());

app.use('/api', transacaoRotas);
app.use('/api', contasRotas);
app.use('/api', pixRotas);
app.use('/api', authRotas);
app.use('/api/doc', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(porta, () => console.log("Servidor funcionando em http://localhost:3001"));