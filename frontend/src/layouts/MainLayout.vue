<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// État pour la barre latérale
const drawer = ref(false); // Par défaut, la barre est fermée

// Configuration du menu
const menuItems = [
  { title: "Tableau de Bord", icon: "mdi-view-dashboard", route: "/" },
  { title: "Gestion des Motos", icon: "mdi-motorbike", route: "/motos" },
  { title: "Entretiens", icon: "mdi-tools", route: "/entretiens" },
  { title: "Stock Pièces", icon: "mdi-cog", route: "/pieces" },
  { title: "Conducteurs", icon: "mdi-account", route: "/conducteurs" },
];

// Gestion des routes
const router = useRouter();
</script>

<template>
  <div class="layout">
    <!-- Barre de navigation -->
    <aside class="sidebar" :class="{ open: drawer }">
      <div class="sidebar-header">Gestion de Flotte</div>
      <ul class="menu">
        <li
          v-for="item in menuItems"
          :key="item.title"
          @click="router.push(item.route)"
          class="menu-item"
        >
          <i class="material-icons">{{ item.icon }}</i>
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </aside>

    <!-- Contenu principal -->
    <div class="main-content">
      <!-- En-tête -->
      <header class="header">
        <!-- Bouton hamburger -->
        <button class="menu-btn" @click="drawer = !drawer">
          ☰
        </button>
        <h1>Gestion de Flotte</h1>
      </header>

      <!-- Contenu principal -->
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

/* Styles de la barre latérale */
.sidebar {
  width: 250px;
  background-color: #2c3e50;
  color: #ecf0f1;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 1000;
}

.sidebar.open {
  transform: translateX(0);
}

.sidebar-header {
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  padding: 1rem;
  background-color: #34495e;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

.menu-item:hover {
  background-color: #34495e;
}

.menu-item i {
  margin-right: 10px;
  font-size: 1.2rem;
}

/* Styles pour le contenu principal */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-left: 0; /* Pour éviter le décalage */
  transition: margin-left 0.3s ease;
}

.header {
  background-color: #3498db;
  color: white;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 1001;
}

.header h1 {
  margin: 0;
}

.menu-btn {
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
}

main {
  padding: 2rem;
  background-color: #ecf0f1;
  height: 100%;
  overflow-y: auto;
}
</style>
