import { View, Text, FlatList, Button, TextInput } from "react-native";
import { useEffect, useState, useContext } from "react";
import {
  loadTodos,
  addTodoOffline,
  updateTodoOffline,
  deleteTodoOffline,        // 1. import
} from "../services/database";
import { ThemeContext } from "../context/ThemeContext";

export default function TodoListOfflineScreen() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);

  const { theme, toggleTheme } = useContext(ThemeContext);

  const refreshTodos = () => setTodos(loadTodos());

  const handleAddOrUpdate = () => {
    if (!title.trim()) return;

    if (editingId) {
      updateTodoOffline(editingId, title);
      setEditingId(null);
    } else {
      addTodoOffline(title);
    }
    setTitle("");
    refreshTodos();
  };

  /* 2. handler suppression */
  const handleDelete = (id) => {
    deleteTodoOffline(id);
    refreshTodos();
  };

  useEffect(() => {
    refreshTodos();
  }, []);

  return (
    <>
      {/* Toggle theme */}
      <Button
        title={`Passer en mode ${theme === "light" ? "sombre" : "clair"}`}
        onPress={toggleTheme}
      />

      {/* Ajout / Modification */}
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Tâche offline"
          value={title}
          onChangeText={setTitle}
          style={{
            borderWidth: 1,
            padding: 10,
            marginBottom: 10,
          }}
        />
        <Button
          title={editingId ? "✏️ Mettre à jour" : "➕ Ajouter hors ligne"}
          onPress={handleAddOrUpdate}
        />
      </View>

      {/* Liste */}
      {todos.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          Aucune tâche disponible hors ligne
        </Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 10,
                alignItems: "center",
              }}
            >
              <Text style={{ flex: 1 }}>{item.title}</Text>

              <View style={{ flexDirection: "row" }}>
                {/* Éditer */}
                <Button
                  title="✏️"
                  onPress={() => {
                    setTitle(item.title);
                    setEditingId(item.id);
                  }}
                />
                {/* Supprimer */}
                <Button
                  title="🗑️"
                  onPress={() => handleDelete(item.id)}
                />
              </View>
            </View>
          )}
        />
      )}
    </>
  );
}