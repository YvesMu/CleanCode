<template>
    <div class="dashboard">
      <div class="card welcome">
        <h2>Bienvenue sur la plateforme</h2>
        <p>Sélectionnez une section dans le menu pour commencer.</p>
      </div>
  
      <div class="card stats">
        <h2>Statistiques générales</h2>
        <ul>
          <li><strong>Total des motos :</strong> 45</li>
          <li><strong>Entretiens planifiés :</strong> 12</li>
          <li><strong>Pièces disponibles :</strong> 200</li>
        </ul>
      </div>
    </div>
  </template>
  
  <style scoped>
  .dashboard {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
  
  .card {
    background: white;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .card h2 {
    margin-top: 0;
  }
  
  .card.welcome {
    background: #3498db;
    color: white;
  }
  
  .card.stats ul {
    padding: 0;
    list-style: none;
  }
  
  .card.stats li {
    margin-bottom: 10px;
  }
  </style>
  