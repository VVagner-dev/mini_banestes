import express from "express";
import { transacaoRotas } from "./routes/transacao.routes.js";
import { contasRotas } from "./routes/conta.routes.js";



const app = express();
const porta = 3001;

app.use(express.json())

app.use('/api', transacaoRotas);
app.use('/api', contasRotas);
app.listen(porta, () => console.log("Servidor funcionando em http://localhost:3001"));