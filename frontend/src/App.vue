<template>
  <div>
    <nav class="navbar">
      <router-link to="/" class="nav-link">Dashboard</router-link>
      <router-link to="/motos" class="nav-link">Motos</router-link>
      <router-link to="/entretiens" class="nav-link">Entretiens</router-link>
      <router-link to="/pieces" class="nav-link">Pièces</router-link>
      <router-link to="/conducteurs" class="nav-link">Conducteurs</router-link>
      <router-link to="/addmoto" class="nav-link">Ajouter une Moto</router-link>
    </nav>
    <router-view /> <!-- Composant qui affiche la page en fonction de la route -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
});
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-around;
  background-color: #007bff;
  padding: 10px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

.nav-link:hover {
  text-decoration: underline;
}
</style>
