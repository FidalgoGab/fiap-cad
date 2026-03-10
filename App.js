import { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
export default function App() {
  const [copos, setCopos] = useState(0);
  const [meta, setMeta] = useState(false);
  const [iconCopos, setIconCopos] = useState("");
  useEffect(() => {
    if (copos > 0) {
      setIconCopos((cur) => (cur += "🥤"));
    }
    if (copos === 8) {
      setMeta(true);
    }
    if (copos === 0) {
      setMeta(false);
      setIconCopos("");
    }
  }, [copos]);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor: meta ? "#3c5c5c" : "#0f0f0f",
      }}
    >
      <Text style={styles.msg}>{meta ? "🏆 Meta do dia atingida!" : ""}</Text>
      <Text style={styles.counter}>{copos} copos</Text>
      <TouchableOpacity style={styles.btn} onPress={() => setCopos(copos + 1)}>
        <Text style={styles.btnText}>Mais um copo d'água</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={() => setCopos(0)}>
        <Text style={styles.btnText}>Resetar</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scroll}>
        <Text style={styles.iconContainer}>{iconCopos}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  msg: { color: "#aaa", fontSize: 24, marginBottom: 12, marginTop: 32 },
  counter: { color: "#fff", fontSize: 72, fontWeight: "bold" },
  btn: {
    marginTop: 24,
    backgroundColor: "#6c63ff",
    paddingHorizontal: 40,
    paddingVertical: 16,
    borderRadius: 50,
  },
  btnText: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  iconContainer: {
    marginTop: 12,
    fontSize: 32,
  },
  scroll: {
    marginTop: 24,
  },
});
