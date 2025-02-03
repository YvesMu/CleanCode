<template>
    <div class="container">
      <h1 class="title">Liste des Motos</h1>
      <button class="add-btn" @click="allerVersAjouterMoto">Ajouter une Moto</button>
  
      <table class="table">
        <thead>
          <tr>
            <th>Marque</th>
            <th>Modèle</th>
            <th>Année</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="moto in motos" :key="moto.id">
            <td>{{ moto.brand }}</td>
            <td>{{ moto.model }}</td>
            <td>{{ moto.year }}</td>
            <td>
              <button @click="allerVersModifierMoto(moto.id)" class="edit-btn">Modifier</button>
              <button @click="supprimerMoto(moto.id)" class="delete-btn">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRouter } from "vue-router"; // Import du router
import api from "../services/api.js";

interface Moto {
  id: string;
  brand: string;
  model: string;
  year: number;
}

export default defineComponent({
  name: "Motos",
  setup() {
    const motos = ref<Moto[]>([]);
    const router = useRouter(); // Déclaration du router

    const fetchMotos = async () => {
      try {
        const response = await api.get("/moto");
        motos.value = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des motos :", error);
      }
    };

    const allerVersAjouterMoto = () => {
      router.push("/addmoto");
    };

    const allerVersModifierMoto = (id: string) => {
      router.push({ name: "EditMoto", params: { id } });
    };

    const supprimerMoto = async (id: string) => {
      if (confirm("Êtes-vous sûr de vouloir supprimer cette moto ?")) {
        try {
          await api.delete(`/moto/${id}`);
          alert("Moto supprimée !");
          fetchMotos();
        } catch (error) {
          console.error("Erreur lors de la suppression :", error);
        }
      }
    };

    onMounted(() => {
      fetchMotos();
    });

    return { motos, fetchMotos, allerVersAjouterMoto, allerVersModifierMoto, supprimerMoto };
  },
});
</script>
  
  <style scoped>
  .container {
    max-width: 1000px;
    margin: 20px auto;
    padding: 20px;
    text-align: center;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    background-color: #fff;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .table th,
  .table td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
  }
  
  .table th {
    background-color: #007bff;
    color: white;
    font-weight: bold;
  }
  
  .add-btn {
    background-color: #28a745;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 20px;
  }
  
  .add-btn:hover {
    background-color: #218838;
  }
  
  .edit-btn {
    background-color: #ffc107;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .edit-btn:hover {
    background-color: #e0a800;
  }
  
  .delete-btn {
    background-color: #dc3545;
    color: white;
    padding: 8px 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .delete-btn:hover {
    background-color: #c82333;
  }
  </style>
  