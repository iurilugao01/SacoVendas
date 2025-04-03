<script setup>
import { ref } from "vue";
import auth from "../api/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

const login = async () => {
  try {
    await auth.login(email.value, password.value);
    router.push("/");
  } catch (err) {
    error.value = "Email ou Senha inválidas!";
  }
};
</script>

<template>
  <div class="mx-auto">
    <div class="pa-4 rounded mt-16 shadow bg-grey-darken-4">
      <h2 class="text-center text-success">Entrar</h2>
      <div class="d-flex flex-column">
        <label for="emailInput" :class="{ 'mb-1': true, 'text-danger': error }">
          Email
          <span v-if="error"> - {{ error }}</span>
        </label>
        <input
          v-model="email"
          placeholder="Email"
          type="email"
          class="form-control mb-2 pa-1"
          id="emailInput"
        />
        <label
          for="passwordInput"
          :class="{ 'mb-1': true, 'text-danger': error }"
        >
          Senha
          <span v-if="error"> - {{ error }}</span>
        </label>
        <input
          v-model="password"
          placeholder="Senha"
          type="password"
          class="form-control mb-2 pa-1"
          id="passwordInput"
        />
      </div>
      <button
        @click="login"
        class="my-1 bg-green-accent-3 btn btn-primary w-100"
      >
        Entrar
      </button>
      <p class="mt-1">
        Não possui uma conta?
        <RouterLink to="/register" class="text-success">Registre-se</RouterLink>
      </p>
    </div>
  </div>
</template>

<style>
.text-danger {
  color: #fe4040;
}
</style>
