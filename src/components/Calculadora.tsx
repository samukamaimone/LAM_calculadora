import { useState } from 'react';
import Index from './Index';
import Botoes from './Botoes';

const botoes = [
  "AC", "", " ", "DEL", "7", "8", "9", "*",
  "4", "5", "6", "-", "1", "2", "3", "+",
  ".", "0", "+/-", "="
];

export default function Calculadora() {
  const [numeroAtual, setNumeroAtual] = useState("");

  function calcular() {
    const splitNumeros = numeroAtual.split(" ");
    const operador = splitNumeros[1];

    if (operador === "*") {
      setNumeroAtual((parseFloat(splitNumeros[0]) * parseFloat(splitNumeros[2])).toString());
    } else if (operador === "/") {
      setNumeroAtual((parseFloat(splitNumeros[0]) / parseFloat(splitNumeros[2])).toString());
    } else if (operador === "+") {
      setNumeroAtual((parseFloat(splitNumeros[0]) + parseFloat(splitNumeros[2])).toString());
    } else if (operador === "-") {
      setNumeroAtual((parseFloat(splitNumeros[0]) - parseFloat(splitNumeros[2])).toString());
    }
  }

  function userInput(botaoPressionado: string) {
    if (["+", "/", "*", "-"].includes(botaoPressionado)) {
      setNumeroAtual(numeroAtual + " " + botaoPressionado + " ");
      return;
    }
    if (botaoPressionado === "DEL") {
      setNumeroAtual(numeroAtual.slice(0, -1));
      return;
    }
    if (botaoPressionado === "AC") {
      setNumeroAtual("");
      return;
    }
    if (botaoPressionado === "=") {
      calcular();
      return;
    }
    setNumeroAtual(numeroAtual + botaoPressionado);
  }

  return (
    <>
      <Index value={numeroAtual} />
      <Botoes botoes={botoes} onPress={userInput} />
    </>
  );
}
