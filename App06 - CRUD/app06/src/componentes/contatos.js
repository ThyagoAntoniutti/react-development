import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from '../App';
import Cadastro from './cadastro';

class Contatos extends React.Component {
    
    constructor(props){
        super(props);

        this.state = {
            contatos: [
                {'nome':'Luis Guilherme', 'email':'luis.guilherme@email.com', 'telefone':'123456789'},
                {'nome':'Thyago Capeleti', 'email':'thyago.capeleti@email.com', 'telefone':'129078435'},
            ]
        }
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
                                    <td>{contato.telefone}</td>
                                    <td>Atualizar Deletar</td>
                                </tr>
                            )
                        }

                        
                    </tbody>
                </div>
                <div className="caixa">
                    <ul className="caixaBotao">
                        <li><Link to="/cadastro_contato"  className="btnCadastrar rota" type="submit">Cadastrar</Link></li>
                        <li><Link to="/home" className="btnVisualizar rota">Home</Link></li>
                    </ul>
                </div>
            </main>
        </div>
        )
    }
}

export default Contatos;