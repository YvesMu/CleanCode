<template>
    <div class="form-container">
      <h2>Modifier l’Entretien</h2>
      <form @submit.prevent="modifierEntretien">
        <label>Date:</label>
        <input v-model="entretien.date" type="date" required />
  
        <label>Description:</label>
        <input v-model="entretien.description" type="text" required />
  
        <label>Coût:</label>
        <input v-model="entretien.cost" type="number" required />
  
        <button type="submit">Enregistrer</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import api from "../services/api.js";
  
  export default defineComponent({
    name: "EditEntretien",
    setup() {
      const route = useRoute();
      const entretien = ref({ date: "", description: "", cost: 0 });
  
      const fetchEntretien = async () => {
        try {
          const response = await api.get(`/entretiens/${route.params.id}`);
          entretien.value = response.data;
        } catch (error) {
          console.error("Erreur :", error);
        }
      };
  
      const modifierEntretien = async () => {
        await api.put(`/entretiens/${route.params.id}`, entretien.value);
        alert("Entretien modifié !");
        window.location.href = "/#/entretiens";
      };
  
      onMounted(() => fetchEntretien());
  
      return { entretien, modifierEntretien };
    },
  });
  </script>
  