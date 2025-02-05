<template>
    <div class="form-container">
      <h2>Ajouter une Pièce</h2>
      <form @submit.prevent="ajouterPiece">
        <label for="name">Nom :</label>
        <input v-model="piece.name" id="name" type="text" required />
  
        <label for="quantity">Quantité :</label>
        <input v-model.number="piece.quantity" id="quantity" type="number" min="0" required />
  
        <label for="price">Prix (€) :</label>
        <input v-model.number="piece.price" id="price" type="number" step="0.01" min="0" required />
  
        <label for="lowStockThreshold">Seuil de stock bas :</label>
        <input v-model.number="piece.lowStockThreshold" id="lowStockThreshold" type="number" min="0" required />
  
        <button type="submit">Ajouter</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import api from "../services/api";
  import { useRouter } from "vue-router";
  
  // Interface pour une pièce
  interface Piece {
    name: string;
    quantity: number;
    price: number;
    lowStockThreshold: number;
  }
  
  export default defineComponent({
    name: "piece/addp",
    setup() {
      const router = useRouter();
      const piece = ref<Piece>({
        name: "",
        quantity: 0,
        price: 0,
        lowStockThreshold: 0,
      });
  
      // Ajouter une nouvelle pièce
      const ajouterPiece = async () => {
        try {
          await api.post("/pieces", piece.value);
          alert("Pièce ajoutée avec succès !");
          router.push("/pieces"); // Redirection vers la liste des pièces
        } catch (error) {
          console.error("Erreur lors de l'ajout de la pièce :", error);
          alert("Erreur lors de l'ajout de la pièce.");
        }
      };
  
      return { piece, ajouterPiece };
    },
  });
  </script>
  
  <style scoped>
  .form-container {
    max-width: 600px;
    margin: 20px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  form {
    display: flex;
    flex-direction: column;
  }
  
  label {
    margin: 10px 0 5px;
    font-weight: bold;
  }
  
  input {
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
  