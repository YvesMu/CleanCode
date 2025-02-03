import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Motos from "../components/Motos.vue";
import Entretiens from "../views/Entretiens.vue";
import Pieces from "../views/Pieces.vue";
import Conducteurs from "../views/Conducteurs.vue";
import AddMoto from "../components/Addmoto.vue";
import EditMoto from "../components/EditMoto.vue"; // Nouvelle page pour modifier une moto

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/motos", name: "Motos", component: Motos },
  { path: "/entretiens", name: "Entretiens", component: Entretiens },
  { path: "/pieces", name: "Pieces", component: Pieces },
  { path: "/conducteurs", name: "Conducteurs", component: Conducteurs },
  { path: "/addmoto", name: "AddMoto", component: AddMoto },
  { path: "/editmoto/:id", name: "EditMoto", component: EditMoto, props: true }, // Route dynamique
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
