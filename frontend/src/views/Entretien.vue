<template>
    <div class="container">
      <h1 class="title">Liste des Entretiens</h1>
      <button class="add-btn" @click="allerVersAjouterEntretien">Ajouter un Entretien</button>
  
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Coût</th>
            <th>Moto</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="entretien in entretiens" :key="entretien.id">
            <td>{{ entretien.date }}</td>
            <td>{{ entretien.description }}</td>
            <td>{{ entretien.cost }} €</td>
            <td>{{ entretien.moto?.brand }} {{ entretien.moto?.model }}</td>
            <td>
              <button @click="modifierEntretien(entretien.id)" class="edit-btn">Modifier</button>
              <button @click="supprimerEntretien(entretien.id)" class="delete-btn">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import api from "../services/api.js";
  
  interface Entretien {
    id: string;
    date: string;
    description: string;
    cost: number;
    moto: {
      brand: string;
      model: string;
    };
  }
  
  export default defineComponent({
    name: "Entretiens",
    setup() {
      const entretiens = ref<Entretien[]>([]);
  
      const fetchEntretiens = async () => {
        try {
          const response = await api.get("/entretiens");
          entretiens.value = response.data;
        } catch (error) {
          console.error("Erreur lors du chargement :", error);
        }
      };
  
      const allerVersAjouterEntretien = () => {
        window.location.href = "/#/add-entretien";
      };
  
      const modifierEntretien = (id: string) => {
        window.location.href = `/#/edit-entretien/${id}`;
      };
  
      const supprimerEntretien = async (id: string) => {
        if (confirm("Voulez-vous vraiment supprimer cet entretien ?")) {
          try {
            await api.delete(`/entretiens/${id}`);
            fetchEntretiens();
          } catch (error) {
            console.error("Erreur lors de la suppression :", error);
          }
        }
      };
  
      onMounted(() => fetchEntretiens());
  
      return { entretiens, allerVersAjouterEntretien, modifierEntretien, supprimerEntretien };
    },
  });
  </script>
  
  <style scoped>
  @import '../assets/styles.css';
  </style>
  