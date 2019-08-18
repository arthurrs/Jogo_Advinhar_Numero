import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App(props) {
  //entrada, rodando, fim
  const [estado, setEstado] = useState("ENTRADA");

  //palpite
  const [palpite, setPalpite] = useState(150);
  const [numeroPalpites, setNumeroPalpites] = useState(1);

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setMin(0);
    setMax(300);
    setNumeroPalpites(1);
    setPalpite(150);
  };
  if (estado === "ENTRADA") {
    return (
      <div>
        <p>Para jogar basta escolher um número entre 0 e 300 !!!</p>
        <button onClick={iniciarJogo}>Começar a Jogar</button>
      </div>
    );
  }

  const menor = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMax(palpite);
    const proxPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(proxPalpite);
  };

  const maior = () => {
    setNumeroPalpites(numeroPalpites + 1);
    setMin(palpite);
    const proxPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(proxPalpite);
  };

  const acertou = () => {
    setEstado("FIM");
  };

  if (estado === "FIM") {
    return (
      <div>
        <p>
          Acertei o número {palpite} com {numeroPalpites} chutes
        </p>
        <button onClick={iniciarJogo}>Iniciar Novamente!</button>
      </div>
    );
  }
  //0 a 300
  //palpites
  return (
    <div className="App">
      <p>O seu número é {palpite} ?</p>
      <p>
        Min: {min} / Max: {max}
      </p>
      <button onClick={menor}>Menor!</button>
      <button onClick={acertou}>Acertou!</button>
      <button onClick={maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
