import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function Sobre() {
  const router = useRouter();

  const favoriteStacks = ["🎯 Flutter", "🐈 NestJs", "🐧 Linux"];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Gabriel Fidalgo</Text>
      <Text style={styles.descricao}>2CCPO - 2026! 🚀</Text>
      <View style={styles.items}>
        {favoriteStacks.map((e, index) => (
          <View style={styles.popo}>
            <Text key={index} style={styles.stacks}>
              {e}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.voltar}>{"<-"} Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  titulo: { fontSize: 28, fontWeight: "bold", marginBottom: 12 },
  descricao: { fontSize: 22, color: "#555", marginBottom: 24 },
  voltar: { fontSize: 20, color: "#E83D84", fontWeight: "600" },
  items: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    flexDirection: "row",
    width: "100%",
    marginBottom: 24,
  },
  stacks: {
    fontSize: 22,
    fontWeight: 600,
    color: "#fff",
  },
  popo: {
    padding: 8,
    borderRadius: 16,
    backgroundColor: "#843DE8",
  },
});
