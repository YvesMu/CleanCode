<template>
    <div class="container">
      <h1 class="title">Liste des Entretiens</h1>
      <br>
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
        window.location.href = "/addentretien";
      };
  
      const modifierEntretien = (id: string) => {
        window.location.href = `/editentretien/${id}`;
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
.container {
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.title {
  font-size: 28px;
  font-weight: bold;
  color: #333333;
}

.add-btn {
  background-color: #4caf50;
  color: white;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.add-btn:hover {
  background-color: #45a049;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.table th,
.table td {
  border: 1px solid #e0e0e0;
  text-align: left;
  padding: 12px 16px;
  font-size: 14px;
}

.table th {
  background-color: #f5f5f5;
  text-transform: uppercase;
  font-weight: 600;
  color: #6c757d;
}

.table tbody tr {
  transition: background-color 0.2s ease;
}

.table tbody tr:hover {
  background-color: #f9f9f9;
}

.table tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

.table .actions {
  display: flex;
  gap: 10px;
  justify-content: center;
}

.edit-btn {
  background-color: #ffc107;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.edit-btn:hover {
  background-color: #e0a800;
}

.delete-btn {
  background-color: #dc3545;
  color: white;
  padding: 6px 12px;
  border: none;
  border-radius: 3px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-btn:hover {
  background-color: #c82333;
}

.pagination {
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  gap: 5px;
}

.pagination button {
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  padding: 6px 12px;
  cursor: pointer;
  border-radius: 3px;
  transition: background-color 0.2s ease;
}

.pagination button:hover {
  background-color: #f1f1f1;
}

.pagination button.active {
  background-color: #007bff;
  color: white;
  border-color: #007bff;
}
</style>

  