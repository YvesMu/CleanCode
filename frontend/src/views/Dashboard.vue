<template>
  <div class="dashboard">
    <!-- Carte de bienvenue -->
    <div class="card welcome">
      <h2 class="text-2xl font-bold">Bienvenue sur la plateforme</h2>
      <p class="text-lg opacity-90">Sélectionnez une section dans le menu pour commencer.</p>
    </div>

    <!-- Carte des statistiques -->
    <div class="card stats">
      <h2 class="text-2xl font-bold mb-4">📊 Statistiques générales</h2>
      <ul class="space-y-3">
        <li class="stat-item">
          <span class="icon">🏍️</span> <strong>Total des motos :</strong> <span>{{ stats.motos }}</span>
        </li>
        <li class="stat-item">
          <span class="icon">🛠️</span> <strong>Entretiens planifiés :</strong> <span>{{ stats.entretiens }}</span>
        </li>
        <li class="stat-item">
          <span class="icon">📦</span> <strong>Pièces disponibles :</strong> <span>{{ stats.pieces }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import api from "../services/api";

export default defineComponent({
  name: "Dashboard",
  setup() {
    const stats = ref({
      motos: 0,
      entretiens: 0,
      pieces: 0,
    });

    const fetchStats = async () => {
      try {
        const motosResponse = await api.get("/motos"); // API pour récupérer les motos
        const entretiensResponse = await api.get("/entretiens"); // API pour les entretiens
        const piecesResponse = await api.get("/pieces"); // API pour les pièces

        stats.value = {
          motos: motosResponse.data.length,
          entretiens: entretiensResponse.data.length,
          pieces: piecesResponse.data.reduce(
            (total: number, piece: { quantity: number }) => total + piece.quantity,
            0
          ),
        };
      } catch (error) {
        console.error("Erreur lors du chargement des statistiques :", error);
      }
    };

    onMounted(() => {
      fetchStats();
    });

    return {
      stats,
    };
  },
});
</script>

<style scoped>
.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center; /* Center cards horizontally */
  align-items: stretch; /* Make cards expand to same height */
  min-height: 100vh; /* Takes full height */
  padding: 20px;
}

.card {
  flex: 1;
  max-width: 500px;
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card:hover {
  transform: translateY(-5px);
}

.card.welcome {
  background: linear-gradient(135deg, #3498db, #2980b9);
  color: white;
}

.card.stats ul {
  list-style: none;
  padding: 0;
}

.stat-item {
  display: flex;
  align-items: center;
  font-size: 18px;
  gap: 10px;
}

.icon {
  font-size: 24px;
}
</style>
