<template>
  <div class="app">
    <nav class="navbar">
      <router-link to="/" class="nav-link">Dashboard</router-link>
      <router-link to="/motos" class="nav-link">Motos</router-link>
      <router-link to="/entretiens" class="nav-link">Entretiens</router-link>
      <router-link to="/pieces" class="nav-link">Pièces</router-link>
      <router-link to="/conducteurs" class="nav-link">Conducteurs</router-link>
      <router-link to="/addmoto" class="nav-link add-moto">Ajouter une Moto</router-link>
    </nav>
    <router-view />
    <!-- Composant qui affiche la page en fonction de la route -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style scoped>
/* Fond global pour la page */
.app {
  background: linear-gradient(to right, #2c3e50, #4ca1af); /* Dégradé de couleurs modernes */
  min-height: 100vh; /* Prend toute la hauteur de la fenêtre */
  padding: 0;
  margin: 0;
  font-family: 'Arial', sans-serif; /* Typographie générique */
}

/* Style de la navbar */
.navbar {
  display: flex;
  justify-content: space-evenly;
  background: radial-gradient(circle, rgba(39, 55, 70, 0.8) 0%, rgba(56, 88, 116, 0.8) 100%);
  padding: 15px 30px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Ombre subtile */
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(5px); /* Effet flou pour un arrière-plan plus élégant */
}

/* Liens de navigation */
.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s, transform 0.2s ease-in-out; /* Transition fluide */
}

.nav-link:hover {
  color: #f39c12; /* Couleur au survol */
  transform: scale(1.1); /* Animation de zoom */
}

/* Bouton "Ajouter une Moto" */
.add-moto {
  background-color: #f39c12;
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s, transform 0.3s ease;
}

.add-moto:hover {
  background-color: #e67e22; /* Changement de couleur au survol */
  transform: scale(1.05);
}

.navbar a {
  margin: 0 10px;
}

.navbar a.active {
  color: #e67e22; /* Mettre en évidence le lien actif */
}
</style>
