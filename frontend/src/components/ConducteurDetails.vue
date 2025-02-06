<template>
    <div class="details-container">
      <h1>Détails du Conducteur</h1>
      <p><strong>Nom :</strong> {{ conducteur.name }}</p>
      <p><strong>Email :</strong> {{ conducteur.email }}</p>
  
      <h2>Commandes</h2>
      <ul>
        <li v-for="commande in commandes" :key="commande.id">
          {{ commande.productName }} - {{ commande.price }} €
        </li>
      </ul>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, onMounted, ref } from "vue";
  import api from "../services/api";
  import { useRoute } from "vue-router";
  
  export default defineComponent({
    name: "ConducteurDetails",
    setup() {
      const route = useRoute();
      const conducteur = ref<{ name: string; email: string }>({ name: "", email: "" });
      const commandes = ref<{ id: string; productName: string; price: number }[]>([]);
  
      const fetchDetails = async () => {
        try {
          const id = route.params.id as string;
          const conducteurResponse = await api.get(`/users/${id}`);
          conducteur.value = conducteurResponse.data;
  
          const commandesResponse = await api.get(`/users/${id}/commandes`);
          commandes.value = commandesResponse.data;
        } catch (error) {
          console.error("Erreur lors du chargement des détails :", error);
        }
      };
  
      onMounted(fetchDetails);
  
      return { conducteur, commandes };
    },
  });
  </script>
  
  <style scoped>
  .details-container {
    padding: 20px;
  }
  h1, h2 {
    margin-bottom: 15px;
  }
  p {
    margin: 10px 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    padding: 5px 0;
  }
  </style>
  