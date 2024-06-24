import React, {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from '../App';
import Contatos from './contatos';
import '../reset.css';
import '../App.css';

export default function Conteudo(){

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    submit(){
        const contato = {
            nome: this.state.nome,
            email: this.state.email,
            tel: this.state.tel
        }

        this.cadastraAluno;
    }

    return (

        <>
        <main className="corpo">
        <Routes>
            <Route path="/home" Component={Home}/>
            <Route path="/contatos_cadastrados" Component={Contatos}/>
        </Routes>
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

                        <ul className="caixaBotao">
                            <li><Link className="btnCadastrar rota" type="submit" onClick={this.submit}>Cadastrar</Link></li>
                            <li><Link to="/contatos_cadastrados" className="btnVisualizar rota">Visualizar contatos</Link></li>
                            <li><Link to="/home" className="btnVisualizar rota">Home</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
        </>
    )
}