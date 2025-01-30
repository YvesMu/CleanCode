import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Motos from "../views/Motos.vue";
import Entretiens from "../views/Entretiens.vue";
import Pieces from "../views/Pieces.vue";
import Conducteurs from "../views/Conducteurs.vue";

const routes = [
  { path: "/", component: Dashboard },
  { path: "/motos", component: Motos },
  { path: "/entretiens", component: Entretiens },
  { path: "/pieces", component: Pieces },
  { path: "/conducteurs", component: Conducteurs },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
