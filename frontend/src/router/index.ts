import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Motos from "../views/Motos.vue";
import Entretiens from "../views/Entretiens.vue";
import Pieces from "../views/Pieces.vue";
import Conducteurs from "../views/Conducteurs.vue";
import AddMoto from "../components/Addmoto.vue"; // Composant pour ajouter une moto

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard }, // Page principale
  { path: "/motos", name: "Motos", component: Motos }, // Page des motos
  { path: "/entretiens", name: "Entretiens", component: Entretiens }, // Page des entretiens
  { path: "/pieces", name: "Pieces", component: Pieces }, // Page des pièces
  { path: "/conducteurs", name: "Conducteurs", component: Conducteurs }, // Page des conducteurs
  { path: "/add-moto", name: "AddMoto", component: AddMoto }, // Page pour ajouter une moto
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
