import Express from "express";
import { transacaoRotas } from "./routes/transacao.routes.js";



const app = Express();
const porta = 3001;


app.use('/api', transacaoRotas);
app.listen(porta, () => console.log("Servidor funcionando em http://localhost:3001"));