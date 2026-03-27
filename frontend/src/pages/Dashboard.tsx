import { useState, useEffect } from 'react';
import api from '../services/api';
import { Link } from 'react-router-dom';


export default function Dashboard() {
    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState("");
    const [pix, setPix] = useState("");

    return (
        <>
            <h1>Olá </h1>

        </>
    )
}

const buscarDados = async () => {
    const response = await api.get('/conta/saldo')
}