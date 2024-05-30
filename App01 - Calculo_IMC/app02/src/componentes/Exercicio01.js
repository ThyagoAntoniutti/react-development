import React, {useState} from "react";

export default function Exercicio01() {

    const [idade, setIdade] = useState();
    const [peso, setPeso] = useState ();
    const [altura, setAltura] = useState();
    const [genero, setGenero] = useState();
    const [caracterizacao, setCaracterizacao] = useState();
    const [diagnostico, setDiagnostico] = useState();

   const imcFinal = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

    const calcularImc=()=> {

        if (idade > 60) {

            setCaracterizacao("Devido a sua idade, você é caracterizado como IDOSO.");
                
            if (imcFinal < 22) {
                setDiagnostico("Você está abaixo do peso ideal. Procure um profisional especializado...");
            } else if (imcFinal >= 22 && imcFinal <= 27) {
                setDiagnostico("Você está com o peso ideal...");
            } else {
                setDiagnostico("Você está com sobrepeso. Procure um profisional especializado...");
            }

        } else if (idade > 15 && idade <= 60) {

            setCaracterizacao("Devido a sua idade (" + idade + " anos), você é caracterizado como ADULTO.");

            if (imcFinal < 18.5) {
                setDiagnostico("MAGREZA. Seu IMC está muito baixo. Procure por ajuda especializada");
            } else if (imcFinal >= 18.5 && imcFinal <= 24.9) {
                setDiagnostico("NORMAL. Você está com o peso ideal.");
            } else if (imcFinal >= 25 && imcFinal <= 29.9) {
                setDiagnostico("SOBREPESO. Você está com sobrepeso. Procure por ajuda especializada");
            } else if (imcFinal >= 30 && imcFinal <= 39.9) {
                setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada imediatamente.");
            } else if (imcFinal >= 40) {
                setDiagnostico("OBESIDADE GRAVE. Você se encontra em estado de OBESIDADE GRAVE. Procure por ajuda especializada imediatamente.");
            }
        } else if (idade <= 15 && genero === 'Masculino') {

            setCaracterizacao("Devido a sua idade (" + idade + " anos), você é caracterizado como CRIANÇA do sexo " + genero + ".");

            if (idade === 6) {
                if (imcFinal < 14.5) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 14.5 && imcFinal <= 16.6) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 16.7 && imcFinal <= 18) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 18) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 7) {
                if (imcFinal < 15) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 15 && imcFinal <= 17.3) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 17.4 && imcFinal <= 19.1) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 19.1) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 8) {
                if (imcFinal < 15.6) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 15.6 && imcFinal <= 16.7) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 16.8 && imcFinal <= 20.3) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 20.3) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 9) {
                if (imcFinal < 16.1) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 16.1 && imcFinal <= 18.8) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 18.9 && imcFinal <= 21.4) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 21.4) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 10) {
                if (imcFinal < 16.7) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 16.7 && imcFinal <= 19.6) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 19.7 && imcFinal <= 22.5) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 22.5) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 11) {
                if (imcFinal < 17.2) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 17.2 && imcFinal <= 20.3) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 20.4 && imcFinal <= 23.7) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 23.7) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 12) {
                if (imcFinal < 17.8) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 17.8 && imcFinal <= 21.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 21.2 && imcFinal <= 24.8) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 24.8) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 13) {
                if (imcFinal < 18.5) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 18.5 && imcFinal <= 21.9) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 22 && imcFinal <= 25.9) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 25.9) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 14) {
                if (imcFinal < 19.2) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 19.2 && imcFinal <= 22.7) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 22.8 && imcFinal <= 26.9) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 26.9) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 15) {
                if (imcFinal < 19.9) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 19.9 && imcFinal <= 23.6) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 23.7 && imcFinal <= 27.7) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 27.7) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            }
        } else if (idade <= 15 && genero === 'Feminino') {

            setCaracterizacao("Devido a sua idade (" + idade + " anos), você é caracterizado como CRIANÇA do sexo " + genero + ".");

            if (idade === 6) {
                if (imcFinal < 14.3) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 14.3 && imcFinal <= 16.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 16.2 && imcFinal <= 17.4) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 17.4) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 7) {
                if (imcFinal < 14.9) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 14.9 && imcFinal <= 17.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 17.2 && imcFinal <= 18.9) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 18.9) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 8) {
                if (imcFinal < 15.6) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 15.6 && imcFinal <= 18.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 18.2 && imcFinal <= 20.3) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 20.3) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 9) {
                if (imcFinal < 16.3) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 16.3 && imcFinal <= 19.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 19.2 && imcFinal <= 21.7) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 21.7) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 10) {
                if (imcFinal < 17) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 17 && imcFinal <= 20.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 20.2 && imcFinal <= 23.2) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 23.2) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 11) {
                if (imcFinal < 17.6) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 17.6 && imcFinal <= 22.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 22.2 && imcFinal <= 25.9) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 25.9) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 12) {
                if (imcFinal < 18.3) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 18.3 && imcFinal <= 22.1) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 22.2 && imcFinal <= 25.9) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 25.9) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 13) {
                if (imcFinal < 18.9) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 18.9 && imcFinal <= 23) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 23.1 && imcFinal <= 27.7) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 27.7) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 14) {
                if (imcFinal < 19.3) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 19.3 && imcFinal <= 23.8) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 23.9 && imcFinal <= 27.9) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 27.9) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            } else if (idade === 15) {
                if (imcFinal < 19.6) {
                    setDiagnostico("ABAIXO DO NORMAL. Seu IMC se encontra ABAIXO DO NORMAL. Procure por ajuda especializada.");
                } else if (imcFinal >= 19.6 && imcFinal <= 24.2) {
                    setDiagnostico("NORMAL. Você está com o peso ideal.")
                } else if (imcFinal >= 24.3 && imcFinal <= 28.8) {
                    setDiagnostico("SOBREPESO. Você está com SOBREPESO. Procure por ajuda especializada.");
                } else if (imcFinal > 28.8) {
                    setDiagnostico("OBESIDADE. Você se encontra em estado de OBESIDADE. Procure por ajuda especializada.");
                }
            }
        }
    }

    return (

        <section className="container">

            <header className="cabecalho">

                <h1><strong>Exercício 01</strong> - Cálculo de IMC</h1>
                <p>Informe seus dados nos campos abaixo para calcular seu IMC. Os dados resultantes estão de acordo com os dados da OMS</p>

            </header>

            <main className="corpo">

                <section className="dados">
                    <section className="campos">
                        <label className="legendaCampos">Digite sua idade:</label>
                        <input 
                        type="number" 
                        name="idade"
                        value={idade}
                        onChange={(e) => setIdade(e.target.value)}
                        className="campoTexto"/>
                    </section>

                    <section className="campos">
                        <label className="legendaCampos">Digite seu peso:</label>
                        <input 
                        type="number" 
                        name="peso"
                        value={peso}
                        onChange={(e) => setPeso(e.target.value)}
                        className="campoTexto"/>
                    </section>

                    <section className="campos">
                        <label className="legendaCampos">Digite sua altura:</label>
                        <input 
                        type="number" 
                        name="altura"
                        value={altura}
                        onChange={(e) => setAltura(e.target.value)}
                        className="campoTexto"/>
                    </section>

                    <section className="campos">
                        <label className="legendaCampos">Qual seu gênero?</label>
                        <select 
                        value={genero} 
                        onChange={(e) => setGenero(e.target.value)}
                        className="campoTexto">
                            <option></option>
                            <option>Feminino</option>
                            <option>Masculino</option>
                        </select>
                    </section>
                </section>

                <section className="botao">
                    <button className="botaoCalcular" onClick={()=>calcularImc()}>Calcular</button>
                </section>
                
            </main>

            <footer className="rodape">

                <section className="containerResultados">

                    <section className="dadosUsuario">
                        <p className="textoResultados">Idade</p>
                        <p className="textoDadosUsuario">{idade} Anos</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Peso:</p>
                        <p className="textoDadosUsuario">{peso} Kg</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Altura:</p>
                        <p className="textoDadosUsuario">{altura} m</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Gênero:</p>
                        <p className="textoDadosUsuario">{genero}</p>
                    </section>

                    <section className="dadosUsuario">
                        <p className="textoResultados">Resultado IMC:</p>
                        <p className="textoDadosUsuario">{imcFinal.toFixed(2)}</p>
                    </section>

                </section>

                <section className="textoResultadoFinal">
                    <p>{caracterizacao}</p>
                    <p>{diagnostico}</p>
                </section>

            </footer>

        </section>
    )
}