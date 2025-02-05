<template>
  <div class="container">
    <h1>Gestion des Pièces</h1>
    <button class="add-btn" @click="allerVersAjouterPiece">Ajouter une Pièce</button>

    <table class="table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Quantité</th>
          <th>Prix (€)</th> <!-- Nouvelle colonne pour afficher le prix -->
          <th>Seuil de Stock Bas</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="piece in pieces" :key="piece.id">
          <td>{{ piece.name }}</td>
          <td>{{ piece.quantity }}</td>
          <td>{{ piece.price.toFixed(2) }}</td> <!-- Affichage du prix formaté -->
          <td>{{ piece.lowStockThreshold }}</td>
          <td>
            <button class="edit-btn" @click="modifierPiece(piece)">Modifier</button>
            <button class="delete-btn" @click="supprimerPiece(piece.id)">Supprimer</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import api from "../services/api";

// Interface définissant les propriétés d'une pièce
interface Piece {
  id: string;
  name: string;
  quantity: number;
  price: number; // Propriété pour le prix
  lowStockThreshold: number;
}

export default defineComponent({

  name: "PieceList",
  setup() {
    const pieces = ref<Piece[]>([]);

    // Fonction pour récupérer la liste des pièces depuis le backend
    const fetchPieces = async () => {
      try {
        const response = await api.get("/pieces");
        pieces.value = response.data;
      } catch (error) {
        console.error("Erreur lors du chargement des pièces :", error);
      }
    };

    // Redirige vers la page d'ajout d'une pièce
    const allerVersAjouterPiece = () => {
      window.location.href = "/pieces/add";
    };

    // Redirige vers la page de modification d'une pièce
    const modifierPiece = (piece: Piece) => {
      window.location.href = `pieces/edit/${piece.id}`;
    };

    // Supprime une pièce du backend
    const supprimerPiece = async (id: string) => {
      if (confirm("Êtes-vous sûr de vouloir supprimer cette pièce ?")) {
        try {
          await api.delete(`/pieces/${id}`);
          alert("Pièce supprimée !");
          fetchPieces(); // Recharge la liste des pièces
        } catch (error) {
          console.error("Erreur lors de la suppression :", error);
        }
      }
    };

    onMounted(() => {
      fetchPieces(); // Charger les pièces dès le montage du composant
    });

    return {
      pieces,
      fetchPieces,
      allerVersAjouterPiece,
      modifierPiece,
      supprimerPiece,
    };
  },
});
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
}

.table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.table th,
.table td {
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
}

.table th {
  background-color: #f4f4f4;
}

.add-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
}

.add-btn:hover {
  background-color: #0056b3;
}

.edit-btn {
  background-color: #ffc107;
  color: white;
  padding: 5px 10px;
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
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.delete-btn:hover {
  background-color: #c82333;
}
</style>
