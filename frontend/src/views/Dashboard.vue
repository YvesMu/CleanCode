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
          <span class="icon">🏍️</span> <strong>Total des motos :</strong> <span>45</span>
        </li>
        <li class="stat-item">
          <span class="icon">🛠️</span> <strong>Entretiens planifiés :</strong> <span>12</span>
        </li>
        <li class="stat-item">
          <span class="icon">📦</span> <strong>Pièces disponibles :</strong> <span>200</span>
        </li>
      </ul>
    </div>
  </div>
</template>

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
