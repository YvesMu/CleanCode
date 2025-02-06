<template>
    <div class="login-container">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div>
          <label for="email">Email</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Mot de passe</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Se connecter</button>
        <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  import api from "../services/api";
  
  export default defineComponent({
    name: "Login",
    setup() {
      const email = ref("");
      const password = ref("");
      const errorMessage = ref("");
  
      const login = async () => {
        try {
          const response = await api.post("/auth/login", { email: email.value, password: password.value });
          localStorage.setItem("token", response.data.token);
          window.location.href = "/"; // Redirige vers le dashboard
        } catch (error) {
          errorMessage.value = "Échec de la connexion. Vérifiez vos identifiants.";
        }
      };
  
      return { email, password, login, errorMessage };
    },
  });
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  form div {
    margin-bottom: 15px;
  }
  label {
    display: block;
    font-weight: bold;
  }
  input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .error {
    color: red;
    text-align: center;
  }
  </style>
  