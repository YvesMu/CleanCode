<template>
  <div class="add-moto-container">
    <h2>Ajouter une Moto</h2>
    <form @submit.prevent="ajouterMoto">
      <div class="form-group">
        <label for="brand">Marque</label>
        <input id="brand" v-model="moto.brand" placeholder="Ex: Yamaha" required />
      </div>
      <div class="form-group">
        <label for="model">Modèle</label>
        <input id="model" v-model="moto.model" placeholder="Ex: MT-07" required />
      </div>
      <div class="form-group">
        <label for="year">Année</label>
        <input id="year" type="number" v-model="moto.year" placeholder="Ex: 2023" required />
      </div>
      <button type="submit" class="submit-btn">Ajouter Moto</button>
    </form>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "Addmoto",
  data() {
    return {
      moto: {
        brand: "",
        model: "",
        year: null,
      },
    };
  },
  methods: {
    async ajouterMoto() {
      try {
        console.log("Données envoyées :", this.moto);
        const response = await api.post("/moto", this.moto);
        console.log("Réponse API :", response.data);
        alert(`Moto ajoutée : ${response.data.moto.brand} ${response.data.moto.model}`);
        this.moto = { brand: "", model: "", year: null }; // Réinitialise le formulaire
      } catch (error) {
        console.error("Erreur lors de l’ajout :", error.response?.data || error.message);
        alert("Erreur lors de l’ajout : " + (error.response?.data || error.message));
      }
    },
  },
};
</script>

<style scoped>
.add-moto-container {
  max-width: 400px;
  margin: 50px auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  background: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 4px rgba(0, 123, 255, 0.5);
}

.submit-btn {
  width: 100%;
  padding: 10px;
  background: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

.submit-btn:hover {
  background: #0056b3;
}
</style>
