<template>
    <div class="container">
      <h1>Rappels d'Entretien</h1>
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Moto</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="rappel in rappels" :key="rappel.id">
            <td>{{ rappel.date }}</td>
            <td>{{ rappel.description }}</td>
            <td v-if="rappel.moto">{{ rappel.moto.brand }} {{ rappel.moto.model }}</td>
            <td v-else> - </td>
            <td>
              <button @click="voirDetails(rappel)" class="view-btn">Voir détails</button>
            </td>
          </tr>
        </tbody>
      </table>
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
    id: string;
    date: string;
    description: string;
    moto?: Moto; // La moto peut être facultative
  }
  
  export default defineComponent({
    name: "EntretienRappels",
    setup() {
      const rappels = ref<Entretien[]>([]);
  
      const fetchRappels = async () => {
        try {
          const response = await api.get("/entretiens/rappels");
          rappels.value = response.data;
        } catch (error) {
          console.error("Erreur lors du chargement des rappels :", error);
        }
      };
  
      const voirDetails = (rappel: Entretien) => {
        alert(`Détails de l'entretien : ${rappel.description}`);
      };
  
      onMounted(() => fetchRappels());
  
      return { rappels, voirDetails };
    },
  });
  </script>
  
  <style scoped>
  .container {
    max-width: 800px;
    margin: 20px auto;
    text-align: center;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
  }
  
  .table th,
  .table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: left;
  }
  
  .table th {
    background-color: #f4f4f4;
  }
  
  .view-btn {
    background-color: #007bff;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .view-btn:hover {
    background-color: #0056b3;
  }
  </style>
  