<script setup>
import { ref } from "vue";
import auth from "../api/auth";
import { useRouter } from "vue-router";

const name = ref("");
const email = ref("");
const password = ref("");
const passwordConfirmation = ref("");
const error = ref("");
const router = useRouter();

const register = async () => {
  if (password.value !== passwordConfirmation.value) {
    error.value = "As senhas não conferem!";
    return;
  }

  try {
    await auth.register(
      name.value,
      email.value,
      password.value,
      passwordConfirmation.value
    );
    router.push("/"); // Redireciona para a rota desejada após registro
  } catch (err) {
    error.value = "Erro ao registrar! Verifique os dados e tente novamente.";
  }
};
</script>

<template>
  <div class="mx-auto">
    <div
      class="pa-4 rounded mt-16 shadow bg-grey-darken-4"
      style="max-width: 400px"
    >
      <h2 class="text-center text-success">Registro</h2>
      <div class="d-flex flex-column">
        <label for="nameInput">Nome</label>
        <input
          v-model="name"
          placeholder="Seu nome"
          type="text"
          class="form-control mb-2 pa-1"
          id="nameInput"
        />
        <label for="emailInput">Email</label>
        <input
          v-model="email"
          placeholder="Seu email"
          type="email"
          class="form-control mb-2 pa-1"
          id="emailInput"
        />
        <label for="passwordInput">Senha</label>
        <input
          v-model="password"
          placeholder="Senha"
          type="password"
          class="form-control mb-2 pa-1"
          id="passwordInput"
        />
        <label for="passwordConfirmationInput">Confirmação de Senha</label>
        <input
          v-model="passwordConfirmation"
          placeholder="Confirme a senha"
          type="password"
          class="form-control mb-2 pa-1"
          id="passwordConfirmationInput"
        />
      </div>
      <button @click="register" class="bg-green-accent-3 btn btn-primary w-100">
        Registrar
      </button>
      <p class="text-center mt-2">
        Já possui uma conta?
        <RouterLink to="/login" class="text-success">Entrar</RouterLink>
      </p>
      <p v-if="error" class="text-danger text-center mt-2">{{ error }}</p>
    </div>
  </div>
</template>
