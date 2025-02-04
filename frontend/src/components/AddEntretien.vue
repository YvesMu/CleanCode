<template>
    <div class="form-container">
      <h2>Ajouter un Entretien</h2>
      <form @submit.prevent="ajouterEntretien">
        <label>Date:</label>
        <input v-model="entretien.date" type="date" required />
  
        <label>Description:</label>
        <input v-model="entretien.description" type="text" required />
  
        <label>Coût:</label>
        <input v-model="entretien.cost" type="number" required />
  
        <label>Moto:</label>
        <select v-model="entretien.motoId">
          <option v-for="moto in motos" :key="moto.id" :value="moto.id">
            {{ moto.brand }} {{ moto.model }}
          </option>
        </select>
  
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import api from "../services/api.js";
  
  // ✅ Ajout d'une interface pour typer les motos
  interface Moto {
    id: string;
    brand: string;
    model: string;
  }
  
  export default defineComponent({
    name: "AddEntretien",
    setup() {
      const entretien = ref({ date: "", description: "", cost: 0, motoId: "" });
      const motos = ref<Moto[]>([]); // ✅ Correction du typage de `motos`
  
      const fetchMotos = async () => {
        try {
          const response = await api.get("/moto");
          motos.value = response.data;
        } catch (error) {
          console.error("Erreur :", error);
        }
      };
  
      const ajouterEntretien = async () => {
        try {
          await api.post("/entretiens", entretien.value);
          alert("Entretien ajouté !");
          window.location.href = "/#/entretiens";
        } catch (error) {
          console.error("Erreur lors de l'ajout :", error);
        }
      };
  
      onMounted(() => fetchMotos());
  
      return { entretien, motos, ajouterEntretien };
    },
  });
  </script>
  
  <style scoped>
.form-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

input, select {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
}

button:hover {
  background-color: #0056b3;
}
</style>

  