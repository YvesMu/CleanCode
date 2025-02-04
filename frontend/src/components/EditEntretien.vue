<template>
    <div class="form-container">
      <h2>Modifier l'Entretien</h2>
      <form @submit.prevent="modifierEntretien">
        <label>Date:</label>
        <input v-model="entretien.date" type="date" required />
  
        <label>Description:</label>
        <input v-model="entretien.description" type="text" required />
  
        <label>Coût:</label>
        <input v-model="entretien.cost" type="number" step="0.01" required />
  
        <label>Moto:</label>
        <select v-model="entretien.motoId" required>
          <option v-for="moto in motos" :key="moto.id" :value="moto.id">
            {{ moto.brand }} {{ moto.model }}
          </option>
        </select>
  
        <button type="submit">Modifier</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import api from "../services/api";
  import { useRoute, useRouter } from "vue-router";
  
  interface Moto {
    id: string;
    brand: string;
    model: string;
  }
  
  interface Entretien {
    id: string;
    date: string;
    description: string;
    cost: number;
    motoId: string;
  }
  
  export default defineComponent({
    name: "EditEntretien",
    setup() {
      const route = useRoute();
      const router = useRouter();
      const entretienId = route.params.id as string; // Assurez-vous que l'ID est bien une string
      const entretien = ref<Entretien>({
        id: "",
        date: "",
        description: "",
        cost: 0,
        motoId: "",
      });
      const motos = ref<Moto[]>([]);
  
      // Récupération de l'entretien existant
      const fetchEntretien = async () => {
        try {
          const response = await api.get(`/entretiens/${entretienId}`);
          entretien.value = response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération de l'entretien :", error);
        }
      };
  
      // Récupération des motos disponibles
      const fetchMotos = async () => {
        try {
          const response = await api.get("/moto");
          motos.value = response.data;
        } catch (error) {
          console.error("Erreur lors de la récupération des motos :", error);
        }
      };
  
      // Modification de l'entretien
      const modifierEntretien = async () => {
        try {
          await api.put(`/entretiens/${entretienId}`, entretien.value);
          alert("Entretien modifié !");
          router.push("/entretiens"); // Redirige vers la liste des entretiens
        } catch (error) {
          console.error("Erreur lors de la modification de l'entretien :", error);
        }
      };
  
      onMounted(() => {
        fetchEntretien();
        fetchMotos();
      });
  
      return { entretien, motos, modifierEntretien };
    },
  });
  </script>
  
  <style scoped>
  .form-container {
    max-width: 500px;
    margin: 20px auto;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: white;
  }
  
  h2 {
    text-align: center;
    color: #333;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    font-weight: bold;
    margin-top: 10px;
  }
  
  input,
  select {
    padding: 8px;
    margin-top: 5px;
    border-radius: 5px;
    border: 1px solid #ccc;
  }
  
  button {
    margin-top: 20px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  