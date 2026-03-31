import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

export default function TarefaItem({ tarefa, onRemover, onAtualizar }) {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{tarefa.texto}</Text>
      <View style={styles.actions}>
        <Switch value={tarefa.ativo} onValueChange={() => onAtualizar(tarefa.id)} />
        <TouchableOpacity onPress={() => onRemover(tarefa.id)}>
            <Text style={styles.remover}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  texto: { fontSize: 16 },
  remover: { fontSize: 18 },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 16
  }
});