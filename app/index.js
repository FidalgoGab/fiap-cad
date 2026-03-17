import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
export default function Home() {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Image
        source={{ uri: "https://avatars.githubusercontent.com/u/99514428?v=4" }}
        style={styles.avatar}
      />
      <Text style={styles.titulo}>Gabriel Fidalgo</Text>
      <TouchableOpacity style={styles.botao} onPress={() => router.push('/sobre')}>
        <Text style={styles.botaoTexto}>Meu perfil</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#f5f5f5' },
  titulo:    { fontSize: 32, fontWeight: 'bold', marginBottom: 24 },
  botao:     { backgroundColor: '#E83D84', padding: 16, borderRadius: 12 },
  botaoTexto:{ color: '#fff', fontSize: 16, fontWeight: '600' },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E1306C',
    marginBottom: 16,
  },
});