<template>
  <div class="conducteurs-container">
    <h1>Liste des Conducteurs</h1>
    <table>
      <thead>
        <tr>
          <th>Nom</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="conducteur in conducteurs" :key="conducteur.id">
          <td>{{ conducteur.name }}</td>
          <td>{{ conducteur.email }}</td>
          <td>
            <button @click="viewDetails(conducteur.id)">Voir Détails</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "../services/api";

interface Conducteur {
  id: string;
  name: string;
  email: string;
}

export default defineComponent({
  name: "Conducteurs",
  setup() {
    const conducteurs = ref<Conducteur[]>([]);

    const fetchConducteurs = async () => {
      try {
        const response = await api.get("/users");
        conducteurs.value = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des conducteurs :", error);
      }
    };

    const viewDetails = (id: string) => {
      window.location.href = `/conducteurs/${id}`;
    };

    onMounted(fetchConducteurs);

    return { conducteurs, viewDetails };
  },
});
</script>

<style scoped>
.conducteurs-container {
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
thead {
  background-color: #f4f4f4;
}
th, td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: left;
}
button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
</style>
