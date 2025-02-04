import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Motos from "../components/Motos.vue";
import Entretiens from "../views/Entretiens.vue";
import Pieces from "../views/Pieces.vue";
import Conducteurs from "../views/Conducteurs.vue";
import AddEntretien from "../components/AddEntretien.vue";
import EditEntretien from "../components/EditEntretien.vue";

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/motos", name: "Motos", component: Motos },
  { path: "/entretiens", name: "Entretiens", component: Entretiens },
  { path: "/pieces", name: "Pieces", component: Pieces },
  { path: "/conducteurs", name: "Conducteurs", component: Conducteurs },
  { path: "/add-entretien", name: "AddEntretien", component: AddEntretien },
  { path: "/edit-entretien/:id", name: "EditEntretien", component: EditEntretien, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
