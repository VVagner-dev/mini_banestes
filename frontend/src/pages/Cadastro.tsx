import { useState } from "react";
import api from "../services/api";
import { Link } from "react-router-dom";

export default function Cadastro() {
    const [cpf, setCpf] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");

    const handleCadastro = async () => {

        try {
            await api.post('/conta', { nome, senha, cpf })
            const response = await api.post('/login', { cpf, senha })
            alert("Caadastro realizado com sucesso")
            const token = response.data.token;
            localStorage.setItem("token", token)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h1>Cadastro Mini Banestes</h1>

            <input placeholder="Digite o seu nome" value={nome} onChange={(e) => setNome(e.target.value)}></input>
            <input placeholder="Digite o seu CPF" value={cpf} onChange={(e) => setCpf(e.target.value)}></input>
            <input type="password" placeholder="Digite o sua senha" value={senha} onChange={(e) => setSenha(e.target.value)}></input>

            <button onClick={handleCadastro}>Cadastrar</button>
            <p><Link to="/login">Já tenho conta</Link></p>
        </>
    )
}