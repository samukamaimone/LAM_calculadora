import { View, Text, StyleSheet } from 'react-native';

interface IndexProps {
  value: string;
}

export default function Index({ value }: IndexProps) {
  return (
    <View style={styles.resultado}>
      <Text style={styles.textoResultado}>{value}</Text>
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
    color: 'white',
    fontSize: 50,
    margin: 10,
  },
});
