import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Motos from "../components/Motos.vue";
import Entretiens from "../views/Entretien.vue";
import Pieces from "../views/Pieces.vue";
import Conducteurs from "../views/Conducteurs.vue";
import AddMoto from "../components/Addmoto.vue";
import EditMoto from "../components/EditMoto.vue";
import EntretienList from "../components/EntretienList.vue";
import AddEntretien from "../components/AddEntretien.vue";
import EditEntretien from "../components/EditEntretien.vue";
import EntretienRappels from "../components/EntretienRappels.vue";
import AddPiece from "../components/AddPiece.vue";
import EditPiece from "../components/EditPiece.vue";


const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/motos", name: "Motos", component: Motos },
  { path: "/entretiens", name: "Entretiens", component: Entretiens },
  { path: "/pieces", name: "Pieces", component: Pieces },
  { path: "/conducteurs", name: "Conducteurs", component: Conducteurs },
  { path: "/addmoto", name: "AddMoto", component: AddMoto },
  { path: "/editmoto/:id", name: "EditMoto", component: EditMoto, props: true }, 
  { path: "/entretiens/list", name: "EntretienList", component: EntretienList },
  { path: "/addentretien", name: "AddEntretien", component: AddEntretien },
  { path: "/editentretien/:id", name: "EditEntretien", component: EditEntretien, props: true },
  { path: "/rappels", name: "EntretienRappels", component: EntretienRappels },
  { path: "/pieces/add", name: "AddPiece", component: AddPiece },
  { path: "/pieces/edit/:id", name: "EditPiece", component: EditPiece, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
