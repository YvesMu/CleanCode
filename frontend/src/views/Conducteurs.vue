<template>
  <v-container>
    <v-card>
      <v-card-text>
        <div class="container">
          <h1 class="title">Liste des Conducteurs</h1>
          <button class="add-btn" @click="allerVersAjouterConducteur">Ajouter un Conducteur</button>

          <table class="table">
            <thead>
              <tr>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="conducteur in conducteurs" :key="conducteur.id">
                <td>{{ conducteur.nom }}</td>
                <td>{{ conducteur.prenom }}</td>
                <td>{{ conducteur.email }}</td>
                <td>
                  <button @click="modifierConducteur(conducteur.id)" class="edit-btn">
                    Modifier
                  </button>
                  <button @click="supprimerConducteur(conducteur.id)" class="delete-btn">
                    Supprimer
                  </button>
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

interface Conducteur {
  id: string
  nom: string
  prenom: string
  email: string
}

export default defineComponent({
  name: 'Conducteurs',
  setup() {
    const conducteurs = ref<Conducteur[]>([])

    const fetchConducteurs = async () => {
      try {
        const response = await api.get('/conducteurs')
        conducteurs.value = response.data
      } catch (error) {
        console.error('Erreur lors du chargement :', error)
      }
    }

    const allerVersAjouterConducteur = () => {
      window.location.href = '/addconducteur'
    }

    const modifierConducteur = (id: string) => {
      window.location.href = `/editconducteur/${id}`
    }

    const supprimerConducteur = async (id: string) => {
      if (confirm('Voulez-vous vraiment supprimer ce conducteur ?')) {
        try {
          await api.delete(`/conducteurs/${id}`)
          fetchConducteurs()
        } catch (error) {
          console.error('Erreur lors de la suppression :', error)
        }
      }
    }

    onMounted(() => fetchConducteurs())

    return { conducteurs, allerVersAjouterConducteur, modifierConducteur, supprimerConducteur }
  },
})
</script>

<style scoped>
@import '../assets/styles.css';
</style>