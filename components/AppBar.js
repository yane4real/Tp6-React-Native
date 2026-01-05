import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Ionicons } from "@expo/vector-icons";

export default function AppBar({ title }) {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.bar}>
      <Text style={styles.title}>{title}</Text>

      <TouchableOpacity onPress={logout}>
        <Ionicons name="log-out-outline" size={28} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 60,
    backgroundColor: "#eee",
    paddingHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    elevation: 4,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
