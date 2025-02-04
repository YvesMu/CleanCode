<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div class="container">
          <h1 class="title">Gestion du Stock des Pièces</h1>
          <button class="add-btn" @click="allerVersAjouterPiece">Ajouter une Pièce</button>

          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Quantité</th>
                <th>Prix</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="piece in pieces" :key="piece.id">
                <td>{{ piece.name }}</td>
                <td>{{ piece.quantity }}</td>
                <td>{{ piece.price }} €</td>
                <td>
                  <button @click="modifierPiece(piece.id)" class="edit-btn">Modifier</button>
                  <button @click="supprimerPiece(piece.id)" class="delete-btn">Supprimer</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import api from '../services/api.js'

interface Piece {
  id: string
  name: string
  quantity: number
  price: number
}

export default defineComponent({
  name: 'Pieces',
  setup() {
    const pieces = ref<Piece[]>([])

    const fetchPieces = async () => {
      try {
        const response = await api.get('/pieces')
        pieces.value = response.data
      } catch (error) {
        console.error('Erreur lors du chargement :', error)
      }
    }

    const allerVersAjouterPiece = () => {
      window.location.href = '/addpiece'
    }

    const modifierPiece = (id: string) => {
      window.location.href = `/editpiece/${id}`
    }

    const supprimerPiece = async (id: string) => {
      if (confirm('Voulez-vous vraiment supprimer cette pièce ?')) {
        try {
          await api.delete(`/pieces/${id}`)
          fetchPieces()
        } catch (error) {
          console.error('Erreur lors de la suppression :', error)
        }
      }
    }

    onMounted(() => fetchPieces())

    return { pieces, allerVersAjouterPiece, modifierPiece, supprimerPiece }
  },
})
</script>

<style scoped>
@import '../assets/styles.css';
</style>