import { useState } from "react"
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Login() {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = async () => {
        console.log("CPF digitado: ", cpf);
        console.log("Senha digitada:", senha);
        alert("Carregando Login")
        try {
            const response = await api.post('/login', { cpf, senha })
            const token = response.data.token;
            localStorage.setItem('token', token)
        } catch (error) {
            console.log(error)
            alert("Erro ao carregar Login")
        }
    }

    return (
        <>
            <h1>Login Mini Banestes</h1>

            <input placeholder="Digite seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
            <input type="password" placeholder="Digite sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>
            <button onClick={handleLogin}>Entrar</button>
            <p><Link to="/cadastro">Não tenho conta</Link></p>
        </>
    )
}

