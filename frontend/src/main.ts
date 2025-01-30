import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import Vuetify et les styles
import { createVuetify } from "vuetify";
import "vuetify/styles"; // Styles de Vuetify
import "@mdi/font/css/materialdesignicons.css"; // Icônes Material Design

// Créer une instance de Vuetify
const vuetify = createVuetify();

const app = createApp(App);

// Ajouter Vuetify et le routeur à l'application
app.use(vuetify);
app.use(router);
app.mount("#app");
