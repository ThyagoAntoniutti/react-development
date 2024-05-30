import React, {useState} from "react";

export default function Exercicio02() {

    const [nota1, setNota1] = useState();
    const [nota2, setNota2] = useState();
    const [nota3, setNota3] = useState();
    const [nota4, setNota4] = useState();

    let soma = parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3) + parseFloat(nota4);
    let media = soma / 4;
    console.log(media);

    return (

        <>
            <section className="container">
                <header>
                    <h1><strong>Cálculo de Média</strong></h1>
                    <p>Digite as notas das 4 provas do aluno</p>
                </header>

                <main className="conjuntoNotas">

                    <section className="containerNotas">
                        <section className="nota">
                            <label>Nota 1:</label>
                            <input 
                            type="number" 
                            name="nota1"
                            value={nota1}
                            onChange={(e) => setNota1(e.target.value)}
                            className="textoNota"/>
                        </section>

                        <section className="nota">
                            <label>Nota 2:</label>
                            <input 
                            type="number" 
                            name="nota2"
                            value={nota2}
                            onChange={(e) => setNota2(e.target.value)}
                            className="textoNota"/>
                        </section>

                        <section className="nota">
                            <label>Nota 3:</label>
                            <input 
                            type="number"
                            name="nota3"
                            value={nota3}
                            onChange={(e) => setNota3(e.target.value)} 
                            className="textoNota"/>
                        </section>

                        <section className="nota">
                            <label>Nota 4:</label>
                            <input 
                            type="number" 
                            name="nota4"
                            value={nota4}
                            onChange={(e) => setNota4(e.target.value)}
                            className="textoNota"/>
                        </section>
                    </section>

                    <section>
                        <button className="botaoCalcular">Calcular Média</button>
                    </section>

                    <section>
                        <p>{media.toFixed(2)}</p>
                    </section>
                    
                </main>
            </section>
        </>
    )
}