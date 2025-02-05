<template>
    <div class="form-container">
      <h2>Modifier une Pièce</h2>
      <form @submit.prevent="modifierPiece">
        <label for="name">Nom :</label>
        <input v-model="piece.name" id="name" type="text" required />
  
        <label for="quantity">Quantité :</label>
        <input v-model.number="piece.quantity" id="quantity" type="number" min="0" required />
  
        <label for="price">Prix (€) :</label>
        <input v-model.number="piece.price" id="price" type="number" step="0.01" min="0" required />
  
        <label for="lowStockThreshold">Seuil de stock bas :</label>
        <input v-model.number="piece.lowStockThreshold" id="lowStockThreshold" type="number" min="0" required />
  
        <button type="submit">Modifier</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref, onMounted } from "vue";
  import api from "../services/api";
  import { useRoute, useRouter } from "vue-router";
  
  // Interface pour une pièce
  interface Piece {
    id: string;
    name: string;
    quantity: number;
    price: number;
    lowStockThreshold: number;
  }
  
  export default defineComponent({
    name: "EditPiece",
  props: ["id"], // ✅ Accepte l'ID en paramètre
  setup(props) {
    const route = useRoute();
    const router = useRouter();
    const pieceId = route.params.id; // ✅ Récupère l'ID de l'URL
    const piece = ref({
      name: "",
      quantity: 0,
      price: 0,
      lowStockThreshold: 0,
    })
  
      // Récupérer la pièce à modifier
      const fetchPiece = async () => {
      try {
        const response = await api.get(`/pieces/${pieceId}`);
        piece.value = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération de la pièce :", error);
      }
    };
  
      // Modifier une pièce
      const modifierPiece = async () => {
        try {
          await api.put(`/pieces/${pieceId}`, piece.value);
          alert("Pièce modifiée avec succès !");
          router.push("/pieces"); // Redirection vers la liste des pièces
        } catch (error) {
          console.error("Erreur lors de la modification de la pièce :", error);
          alert("Erreur lors de la modification de la pièce.");
        }
      };
  
      onMounted(() => {
        fetchPiece();
      });
  
      return { piece, modifierPiece };
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
  