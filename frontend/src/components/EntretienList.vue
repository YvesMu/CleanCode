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
            <td>{{ entretien.cost }}</td>
            <td>{{ entretien.moto.brand }} {{ entretien.moto.model }}</td>
            <td>
              <button @click="modifierEntretien(entretien)" class="edit-btn">Modifier</button>
              <button @click="supprimerEntretien(entretien.id)" class="delete-btn">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import api from "../services/api";
  
  interface Entretien {
    id: string;
    date: string;
    description: string;
    cost: number;
    moto: {
      id: string;
      brand: string;
      model: string;
    };
  }
  
  export default defineComponent({
    name: "EntretienList",
    setup() {
      const entretiens = ref<Entretien[]>([]);
  
      const fetchEntretiens = async () => {
        try {
          const response = await api.get("/entretiens");
          entretiens.value = response.data;
        } catch (error) {
          console.error("Erreur lors du chargement des entretiens :", error);
        }
      };
  
      const allerVersAjouterEntretien = () => {
        window.location.href = "/#/add-entretien";
      };
  
      const modifierEntretien = (entretien: Entretien) => {
        window.location.href = `/#/edit-entretien/${entretien.id}`;
      };
  
      const supprimerEntretien = async (id: string) => {
        if (confirm("Êtes-vous sûr de vouloir supprimer cet entretien ?")) {
          try {
            await api.delete(`/entretiens/${id}`);
            alert("Entretien supprimé !");
            fetchEntretiens();
          } catch (error) {
            console.error("Erreur lors de la suppression :", error);
          }
        }
      };
  
      onMounted(() => {
        fetchEntretiens();
      });
  
      return {
        entretiens,
        fetchEntretiens,
        allerVersAjouterEntretien,
        modifierEntretien,
        supprimerEntretien,
      };
    },
  });
  </script>
  
  <style scoped>
  @import '../assets/styles.css';
  </style>
  