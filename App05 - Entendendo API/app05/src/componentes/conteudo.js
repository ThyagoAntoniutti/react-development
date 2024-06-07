import React, {useState} from "react";
import '../reset.css';
import '../App.css';

export default function Conteudo(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    return (

        <>
        <main className="corpo">
            <div className="caixa">
                <div className="dadosCaixa">
                    <h1>Cadastro de Contato:</h1>
                    <div className="dadosGeral">
                        <div className="dados">
                            <label>Nome:</label><br></br>
                            <input 
                            type="text" 
                            placeholder="Godofredo Aroldo dos Santos" 
                            required
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                            />
                        </div>
                        
                        <div className="dados">
                            <label>E-mail:</label><br></br>
                            <input 
                            type="text" 
                            placeholder="email@email.com" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            />
                        </div>

                        <div className="dados">
                            <label>Telefone:</label><br></br>
                            <input 
                            type="text" 
                            placeholder="(99) 9 9999-9999" 
                            required
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            />
                        </div>

                        <div className="caixaBotao">
                            <button className="btnCadastrar">Cadastrar contato</button>
                            <button className="btnVisualizar">Visualizar contatos</button>
                        </div>
                    </div>

                </div>
            </div>
        </main>
        </>
    )
}