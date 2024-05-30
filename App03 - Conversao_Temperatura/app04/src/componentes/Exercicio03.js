import React, {useState} from "react";

export default function Exercicio03() {

    const [temperatura, setTemperatura] = useState();

    let conversao = (parseFloat(temperatura) - 32) * (5 / 9);

    return (

        <>
            <section className="container">

                <header>
                    <h1>Conversão de temperatura</h1>
                    <p>Converta °F para °C</p>
                </header>

                <main className="containerDados">
                    <section className="dados">
                        <label>Temperatura em °F:</label>
                        <input type="number" 
                        name="temperatura"
                        value={temperatura}
                        onChange={(e) => setTemperatura(e.target.value)}
                        className="textoTemperatura"/>
                    </section>

                    <section className="dados">
                        <button className="botaoConverter">Converter</button>
                    </section>

                </main>

                <footer>
                    <p>Resultado da Conversão: {conversao.toFixed(2)} °Celsius</p>
                </footer>
            </section>
        </>
    )
}