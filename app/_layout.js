import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { CarrinhoProvider } from "../context/CarrinhoContext";

export default function Layout() {
  return (
    <CarrinhoProvider>
      <Tabs screenOptions={{ tabBarActiveTintColor: "#E83D84" }}>
        <Tabs.Screen
          name="index"
          options={{
            title: "Produtos",
            tabBarIcon: ({ color }) => (
              <Ionicons name="products" size={24} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="kart"
          options={{
            title: "Carrinho",
            tabBarIcon: ({ color }) => (
              <Ionicons name="kart" size={24} color={color} />
            ),
          }}
        />
      </Tabs>
    </CarrinhoProvider>
  );
}
