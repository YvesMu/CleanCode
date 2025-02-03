<template>
    <div class="container">
      <h1 class="title">Modifier une Moto</h1>
      <form @submit.prevent="modifierMoto">
        <div class="form-group">
          <label for="brand">Marque :</label>
          <input id="brand" v-model="moto.brand" type="text" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label for="model">Modèle :</label>
          <input id="model" v-model="moto.model" type="text" class="form-control" required />
        </div>
  
        <div class="form-group">
          <label for="year">Année :</label>
          <input id="year" v-model="moto.year" type="number" class="form-control" required />
        </div>
  
        <button type="submit" class="save-btn">Enregistrer les modifications</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import api from "../services/api.js";
import { useRoute, useRouter } from "vue-router";
import { ref } from "vue";

export default defineComponent({
  name: "EditMoto",
  setup() {
    const route = useRoute();
    const router = useRouter();
    const moto = reactive({ brand: "", model: "", year: 0 });

    const fetchMoto = async () => {
  try {
    // Vérifiez que l'ID est récupéré correctement à partir de la route
    const id = route.params.id;
    if (!id) {
      console.error("Aucun ID de moto fourni !");
      return;
    }
    const moto = ref<{ brand: string; model: string; year: number } | null>(null);
    // Appeler l'API avec l'ID
    const response = await api.get(`/moto/${id}`);
    moto.value = response.data; // Charger les données de la moto dans le formulaire
  } catch (error) {
    console.error("Erreur lors de la récupération de la moto :", error);
  }
};


    const modifierMoto = async () => {
  try {
    await api.put(`/moto/${route.params.id}`, moto); // Inclure correctement l'ID dans l'URL
    alert("Moto modifiée !");
    router.push("/motos");
  } catch (error) {
    console.error("Erreur lors de la modification :", error);
  }
};


    onMounted(() => {
      fetchMoto();
    });

    return { moto, modifierMoto };
  },
});
</script>

  
  <style scoped>
  .container {
    max-width: 600px;
    margin: 40px auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .title {
    font-size: 28px;
    color: #333;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #555;
  }
  
  .form-control {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  
  .save-btn {
    display: block;
    width: 100%;
    background-color: #007bff;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  
  .save-btn:hover {
    background-color: #0056b3;
  }
  </style>
  