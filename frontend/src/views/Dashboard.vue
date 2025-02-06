<template>
  <div class="dashboard">
    <!-- Carte de bienvenue -->
    <div class="card welcome">
      <h2 class="text-3xl font-semibold">Bienvenue sur la plateforme</h2>
      <p class="text-xl opacity-80">Sélectionnez une section dans le menu pour commencer.</p>
    </div>

    <!-- Carte des statistiques -->
    <div class="card stats">
      <h2 class="text-3xl font-semibold mb-6">📊 Statistiques générales</h2>
      <ul class="space-y-5">
        <li class="stat-item">
          <span class="icon">🏍️</span> <strong>Total des motos :</strong>
          <span>{{ stats.motos }}</span>
        </li>
        <li class="stat-item">
          <span class="icon">🛠️</span> <strong>Entretiens planifiés :</strong>
          <span>{{ stats.entretiens }}</span>
        </li>
        <li class="stat-item">
          <span class="icon">📦</span> <strong>Pièces disponibles :</strong>
          <span>{{ stats.pieces }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import api from '../services/api'

export default defineComponent({
  name: 'Dashboard',
  setup() {
    const stats = ref({
      motos: 0,
      entretiens: 0,
      pieces: 0,
    })

    const fetchStats = async () => {
      try {
        const motosResponse = await api.get('/motos') // API pour récupérer les motos
        const entretiensResponse = await api.get('/entretiens') // API pour les entretiens
        const piecesResponse = await api.get('/pieces') // API pour les pièces

        stats.value = {
          motos: motosResponse.data.length,
          entretiens: entretiensResponse.data.length,
          pieces: piecesResponse.data.reduce(
            (total: number, piece: { quantity: number }) => total + piece.quantity,
            0
          ),
        }
      } catch (error) {
        console.error('Erreur lors du chargement des statistiques :', error)
      }
    }

    onMounted(() => {
      fetchStats()
    })

    return {
      stats,
    }
  },
})
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  justify-content: center;
  align-items: stretch;
  min-height: 100vh;
  padding: 30px;
  background: #f7f9fc; /* Arrière-plan clair et doux */
}

.card {
  flex: 1;
  max-width: 480px;
  background: white;
  border-radius: 18px;
  padding: 30px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.card.welcome {
  background: linear-gradient(145deg, #6a82fb, #fc5c7d); /* Dégradé doux et moderne */
  color: white;
  text-align: center;
  padding: 40px;
}

.card.stats {
  background: linear-gradient(
    145deg,
    #fdbb2d,
    #22c1c3
  ); /* Dégradé énergique pour attirer l'attention */
}

.card.stats ul {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  font-size: 20px;
  gap: 12px;
  color: #333;
  transition: color 0.3s ease;
}

.stat-item:hover {
  color: #fdbb2d; /* Changement de couleur au survol pour interactivité */
}

.icon {
  font-size: 32px;
  color: #333;
  transition: color 0.3s ease;
}

.stat-item:hover .icon {
  color: #fdbb2d;
}

.stat-item strong {
  font-weight: bold;
}

.stat-item span {
  font-size: 20px;
  color: #2c3e50;
  font-weight: 500;
}
</style>
