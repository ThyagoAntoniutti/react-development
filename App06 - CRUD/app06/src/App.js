import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Cadastro from './componentes/cadastro';
import Contatos from './componentes/contatos';
import './reset.css';
import './App.css';

export default function App() {

  return(

    <>
      <header>
        <Routes>
            <Route path="/cadastro_contato" Component={Cadastro}/>
            <Route path="/contatos_cadastrados" Component={Contatos}/>
        </Routes>
      </header>
      <main className="corpo">
            <div className="caixa">
                <div className="dadosCaixa">
                    <h1 className="titulo_inicial">Cadastro de Contatos</h1>
                    <div className="dadosGeral">
                        <div className="dados">
                            <ul className="caixaBotao">
                                <li><Link to="/cadastro_contato" className="btnCadastrar rota">Cadastrar contato</Link></li>
                                <li><Link to="/contatos_cadastrados" className="btnVisualizar rota">Visualizar contatos</Link></li>
                            </ul>
                        </div>                        
                    </div>

                </div>
            </div>
        </main>
    </>
  )
}