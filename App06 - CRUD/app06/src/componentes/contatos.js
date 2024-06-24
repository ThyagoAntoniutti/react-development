import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from '../App';
import Cadastro from './cadastro';
import '../reset.css';
import '../App.css';

class Contatos extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            contatos: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:3006/contatos")
        .then(resposta => resposta.json())
        .then(dados => {
            this.setState({contatos : dados})
        })
    }

    componentWillUnmount() {
    }

    render (){
        return (
            <div>
            <header>
                <Routes>
                    <Route path="/home" Component={Home}/>
                    <Route path="/cadastro_contato" Component={Cadastro}/>
                </Routes>
            </header>
            <main className="corpo">
                <div className="caixa">
                <div>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.contatos.map((contato) => 
                                <tr>
                                    <td>{contato.nome}</td>
                                    <td>{contato.email}</td>
                                    <td>{contato.tel}</td>
                                    <td><button className="btnCadastrar">Atualizar</button><button className="btnCadastrar">Deletar</button></td>
                                </tr>
                            )
                        }                        
                    </tbody>
                </div>
                    <ul className="caixaBotao">
                        <li><Link to="/cadastro_contato" className="btnCadastrar rota" type="submit">Cadastrar</Link></li>
                        <li><Link to="/home" className="btnVisualizar rota">Home</Link></li>
                    </ul>
                </div>
            </main>
        </div>
        )
    }
}

export default Contatos;