import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App() {

  const botoes = ["AC", "", " ", "DEL", "7", "8", "9", "*", "4", "5", "6", "-",
                  "1", "2", "3", "+", ".", "0", "+/-", "="];
  const [numeroAtual, setNumeroAtual] = useState("")

  function calcular(){
    const splitNumeros = numeroAtual.split(" ")
    const operador = splitNumeros[1]
    console.log(splitNumeros)
    if(operador == "*"){
      setNumeroAtual((parseFloat(splitNumeros[0]) * parseFloat(splitNumeros[2])).toString())
    }
    if(operador == "/"){
      setNumeroAtual((parseFloat(splitNumeros[0]) / parseFloat(splitNumeros[2])).toString())
    }
    if(operador == "+"){
      setNumeroAtual((parseFloat(splitNumeros[0]) + parseFloat(splitNumeros[2])).toString())
    }
    if(operador == "-"){
      setNumeroAtual((parseFloat(splitNumeros[0]) - parseFloat(splitNumeros[2])).toString())
    }
  }

  function userInput(botaoPressionado:string){
    if(botaoPressionado == "+" || botaoPressionado == "/" || botaoPressionado == "*" || botaoPressionado == "-"){
      setNumeroAtual(numeroAtual + " " + botaoPressionado + " ")
      return
    }
    if(botaoPressionado == "DEL"){
      console.log(numeroAtual)
      setNumeroAtual(numeroAtual.substring(0, (numeroAtual.length - 1)))
      return
    }
    if(botaoPressionado == "."){
      setNumeroAtual(numeroAtual + botaoPressionado)
      return
    }
    if(botaoPressionado == "%"){
      return
    }
    if(botaoPressionado == "AC"){
      setNumeroAtual("")
      return
    }
    if(botaoPressionado == "="){
      calcular()
      return
    }
    setNumeroAtual(numeroAtual + botaoPressionado)
  }

  return (
    <View>
      <View style={styles.resultado}>
        <Text style={styles.textoResultado}>{numeroAtual}</Text>
      </View>
      <View style={styles.botoes}>
        {botoes.map((botao) => 
          <TouchableOpacity key={botao} style={styles.botao} onPress={() => userInput(botao)}>
            <Text style={styles.textoBotao}>{botao}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  resultado: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    height: 400,
    backgroundColor: 'rgb(22, 22, 22)',
  },
  textoResultado: {
    color: 'rgb(255, 255, 255)',
    fontWeight: 100,
    fontSize: 50,
    margin: 10,
    alignSelf: 'flex-end'
  },
  botoes: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  botao: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(0, 0, 0)',
    minHeight: 80,
    minWidth: 80
  },
  textoBotao: {
    color: 'rgb(255, 255, 255)',
    fontSize: 25,
  }
});
