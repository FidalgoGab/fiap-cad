import { View, Text, Image, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function App() {
  const usuario = {
    nome: "Gabriel Fidalgo",
    bio: "Desenvolvedor Fullstack, Flutter e aspirante de Design Patterns",
    curso: "Ciência da computação - 3° Semestre",
    avatar: "https://avatars.githubusercontent.com/u/99514428?v=4",
    links: [{nomeLink: 'GitHub', url: 'https://github.com/FidalgoGab'}, {nomeLink: 'LinkedIn', url: 'https://www.linkedin.com/in/gabriel-fidalgo-938a38248'}]
  };
  return (
    <View style={styles.container}>
      {/* Avatar */}
      <Image
        source={{ uri: usuario.avatar }}
        style={styles.avatar}
      />
      {/* Nome */}
      <Text style={styles.nome}>{usuario.nome}</Text>
      {/* Bio */}
      <Text style={styles.bio}>{usuario.bio}</Text>
      {/* Stats */}
      <View style={styles.stats}>
        <Text style={styles.stat}>👥 {usuario.curso}</Text>
      </View>
      <View style={styles.urlContainer}>
        {usuario.links.map((a, index) => <TouchableOpacity key={index} onPress={() => Linking.openURL(a.url)}><Text key={index} style={styles.url}>{a.nomeLink}</Text></TouchableOpacity>)}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0a0a0a',
    padding: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: '#E1306C',
    marginBottom: 16,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  bio: {
    width: '70%',
    fontSize: 14,
    color: '#aaa',
    textAlign: 'center',
    marginBottom: 16,
  },
  stats: {
    backgroundColor: '#1a1a1a',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  stat: {
    color: '#fff',
    fontSize: 14,
  },
  url: {
    color: '#3355ee',
    fontSize: 18,
    textAlign: 'center'
  },
  urlContainer: {
    width: '100%',
    marginTop: 16,
  }
});
