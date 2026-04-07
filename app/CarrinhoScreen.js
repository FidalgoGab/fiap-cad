import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { useCarrinho } from "../context/CarrinhoContext";

export default function CarrinhoScreen() {
  const { carrinho } = useCarrinho();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>
      <Text> Itens no carrinho: {carrinho.length}</Text>
      <TouchableOpacity onPress={() => router.push("/ProdutosScreen")}>
        <Text style={styles.carrinhoButton}>Ver produtos</Text>
      </TouchableOpacity>
      <FlatList
        data={carrinho}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.key}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60 },
  titulo: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  card: {
    backgroundColor: "#f0f0f0",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },
  nome: { fontSize: 16, fontWeight: "600" },
  carrinhoButton: {
    textAlign: "center",
    color: "#44aadd",
    fontSize: 18,
  },
});
