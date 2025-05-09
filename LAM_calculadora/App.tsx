import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const botoes = ["ac", "backspace", "7", "8", "9", "*", "4", "5", "6", "-",
                  "1", "2", "3", "+", "0", "="];

  return (
    <View>
      <View style={styles.resultado}>
        <Text style={{color: 'white', fontSize: 20, margin: 10}}>sdasdsagit a</Text>
        <StatusBar style="auto" />
      </View>
      <View style={styles.botoes}>
        {botoes.map((botao) => 
          <TouchableOpacity key={botao} style={styles.botao}><Text style={styles.textoBotao}>{botao}</Text></TouchableOpacity>
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
    height: 300,
    backgroundColor: 'rgb(22, 22, 22)',
  },
  botoes: {
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
