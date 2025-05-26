import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoProps {
  label: string;
  onPress: () => void;
}

export default function Botao({ label, onPress }: BotaoProps) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    minHeight: 80,
    minWidth: 80,
  },
  textoBotao: {
    color: 'white',
    fontSize: 25,
  },
});
