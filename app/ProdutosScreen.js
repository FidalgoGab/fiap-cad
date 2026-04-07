import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { produtos } from "../data/produtos";
import { useRouter } from "expo-router";
import { useCarrinho } from "../context/CarrinhoContext";

export default function ProdutosScreen() {
  const { adicionar, carrinho } = useCarrinho();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Produtos</Text>
      <Text> Itens no carrinho: {carrinho.length}</Text>
      <TouchableOpacity onPress={() => router.push("/CarrinhoScreen")}>
        <Text style={styles.carrinhoButton}>Ver carrinho</Text>
      </TouchableOpacity>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card} key={item.key}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>R$ {item.preco.toFixed(2)}</Text>
            <Button
              title="Adicionar ao Carrinho"
              onPress={() => adicionar(item)}
            />
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
