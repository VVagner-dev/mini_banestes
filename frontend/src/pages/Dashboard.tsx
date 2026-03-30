import { useState, useEffect } from 'react';
import api from '../services/api';
interface Transacao{
    id: string;
    pagadorId : string 
    remetenteId : string
    valor: number
    DataHora : string
}

interface PixKey{
    id: string,
    key: string
}

export default function Dashboard() {
    const[minhasChaves, setMinhasChaves] = useState<PixKey[]>([]);

    const [nome, setNome] = useState("");
    const [saldo, setSaldo] = useState("");
    const [extrato, setExtrato] = useState<Transacao[]>([]);
    const [meuId, setMeuId] = useState<string | null>(null);

    const [chavePix, setchavePix] = useState("")
    const [valorPix, setValorPix] = useState(0)
    const [SenhaPix, setSenhaPix] = useState("")

    const [valorDeposito, setValorDeposito] = useState(0);
    const buscarDados = async () => {
        try{
            const response = await api.get('/conta')
            const conta = response.data.visaoConta;
            setNome(conta.nome)
            setSaldo(conta.saldo);
            setMeuId(conta.id)
            setMinhasChaves(conta.pix);

        }catch(error){
            console.error("Erro ao buscar dados",error)
        }
    }

    const buscarExtrato = async () => {
    const responseExtrato = await api.get('/extrato')
    setExtrato(responseExtrato.data.extrato);
    }

    const criarChave = async () => {
        try{
            await api.post('/pix');
            buscarDados();
        }catch(error){
            console.error("Erro ao criar pix",error)
        }
    }

    const deletarChave = async (chave: string) => {
        try{
            await api.delete('/pix', {data : {key: chave}});
            buscarDados();
        }catch(error){
            console.error("Erro ao deletar pix",error)
        }
    }

    const enviarPix = async (e: React.FormEvent) => {
        e.preventDefault();
        try{
            await api.post('/fazerPix', {
                pix: chavePix,
                valor : valorPix,
                senha: SenhaPix
            })

            alert("Pix realizado com sucesso")
            buscarDados()
            buscarExtrato()
        }catch(error){
            console.error("Erro ao fazer pix",error)
            alert("Erro ao fazer pix")
        }
    }

    const fazerDeposito = async(e: React.FormEvent) => {
        e.preventDefault();
        try{
            await api.post('conta/deposito', {
                deposito: valorDeposito
            });

            alert("Depósito realizado comm sucesso!");
            setValorDeposito(0);
            buscarDados();
            buscarExtrato();
        }catch(error){
            console.error("Erro ao fazer deposito",error)
            alert("Erro ao fazer deposito")
        }
    }


    
    useEffect(() => {
        buscarDados();
        buscarExtrato();
    },[]);



    return (
        <>
            <h1>Olá {nome}</h1>
            <h3>Saldo: R${saldo}</h3>

            <div>
                <h2>Meu extrato</h2>
                {extrato.length > 0 ? (
                extrato.map((Transacao) => {
                    const isSaida = Transacao.pagadorId == meuId;

                    return (
                        <div key={Transacao.id} style={{marginBottom : '10px'}}>
                            <p>
                                {isSaida? "🔴 Saida: " : "🟢 Entrada: "}
                                R$ {Transacao.valor}
                            </p>
                            <small>{new Date(Transacao.DataHora).toLocaleString()}</small>
                            <hr />
                            </div>
                    );
                })
            ): (<p>Nenhuma transação encontrada</p>

            )}
            </div>


            <div>
                <form onSubmit={enviarPix}>
                <h3>Fazer um pix</h3>
                <input placeholder='Chave pix' onChange={(e) => setchavePix(e.target.value)}/>
                <input placeholder='Valor' onChange={(e) => setValorPix(Number(e.target.value))}/>
                <input placeholder='Sua senha' type='password' onChange={(e) => setSenhaPix(e.target.value)}/>
                <button type='submit'>Enviar</button>
                </form>
            </div>

            <div>
                <h2>Minhas chaves pix ({minhasChaves.length}/3)</h2>
                <button onClick={criarChave} disabled={minhasChaves.length >=3}>Gerar Nova Chave Aleatória</button>

                <ul>
                    {minhasChaves.map((item) => (
                        <li key={item.id} style={{marginBottom: '5px'}}>
                            {item.key}
                            <button
                                onClick={() => deletarChave(item.key)}
                                style={{marginLeft: '10px', color: 'red'}}>
                                    Remover
                                </button>
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{border: '1px dashed #ccc', padding: '15px', marginTop: '20px'}}>
                    <h3>Deposito</h3>
                    <form onSubmit={fazerDeposito}>
                        <input type='number'
                        placeholder='Valor do depósito'
                        value={valorDeposito == 0 ? "" : valorDeposito}
                        onChange={(e) => setValorDeposito(Number(e.target.value))}/>
                        <button type='submit'>Depositar</button>
                    </form>
            </div>

        </>
    )
}
