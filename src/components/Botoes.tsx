import { View, StyleSheet } from 'react-native';
import Botao from './Botao';

interface BotoesProps {
  botoes: string[];
  onPress: (value: string) => void;
}

export default function Botoes({ botoes, onPress }: BotoesProps) {
  return (
    <View style={styles.botoes}>
      {botoes.map((botao) => (
        <Botao key={botao} label={botao} onPress={() => onPress(botao)} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  botoes: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
