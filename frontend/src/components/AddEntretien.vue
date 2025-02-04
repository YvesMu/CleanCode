<template>
    <div class="form-container">
      <h2>Ajouter un Entretien</h2>
      <form @submit.prevent="ajouterEntretien">
        <label for="date">Date:</label>
        <input v-model="entretien.date" id="date" type="date" required />
  
        <label for="description">Description:</label>
        <input v-model="entretien.description" id="description" type="text" required />
  
        <label for="cost">Coût:</label>
        <input v-model.number="entretien.cost" id="cost" type="number" min="0" required />
  
        <label for="moto">Moto:</label>
        <select v-model="entretien.motoId" id="moto" required>
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
  import api from "../services/api";
  
  interface Moto {
    id: string;
    brand: string;
    model: string;
  }
  
  interface Entretien {
    date: string;
    description: string;
    cost: number;
    motoId: string;
  }
  
  export default defineComponent({
    name: "AddEntretien",
    setup() {
      const entretien = ref<Entretien>({
        date: "",
        description: "",
        cost: 0,
        motoId: "",
      });
      const motos = ref<Moto[]>([]);
  
      const fetchMotos = async () => {
        try {
          const response = await api.get("/moto");
          motos.value = response.data;
        } catch (error) {
          console.error("Erreur lors du chargement des motos :", error);
        }
      };
  
      const ajouterEntretien = async () => {
        try {
          if (!entretien.value.motoId) {
            alert("Veuillez sélectionner une moto.");
            return;
          }
          await api.post("/entretiens", entretien.value);
          alert("Entretien ajouté !");
          window.location.href = "/#/entretiens"; // Redirige vers la liste des entretiens
        } catch (error) {
          console.error("Erreur lors de l'ajout de l'entretien :", error);
          alert("Une erreur est survenue lors de l'ajout de l'entretien.");
        }
      };
  
      onMounted(() => {
        fetchMotos();
      });
  
      return { entretien, motos, ajouterEntretien };
    },
  });
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
    font-weight: bold;
  }
  
  input,
  select {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  