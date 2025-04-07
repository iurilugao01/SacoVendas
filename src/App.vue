<script setup>
import { useRoute } from "vue-router";

import Sidebar from "@/components/TheSidebar.vue";
import Naviten from "@/components/AppNaviten.vue";
import Topbar from "./components/TheTopbar.vue";

const verifyRoutes = () => {
  const routes = ["/login", "/register"];
  return !routes.includes(useRoute().path);
};
</script>

<template>
  <Topbar></Topbar>

  <Sidebar v-if="verifyRoutes()">
    <Naviten icon="bi-house" link="/" content="Home" />
    <Naviten icon="bi-search" link="/" content="Explorar" />
    <Naviten icon="bi-plus-circle" link="/" content="Mais" />
    <Naviten icon="bi-person-raised-hand" link="/" content="Ajuda" />
  </Sidebar>

  <main>
    <RouterView />
  </main>
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

body,
html,
#app {
  height: 100vh;
  margin: 0;
  background-color: #2f2e2e;
  display: flex;
  flex-direction: column;
}

main {
  flex: 1;
  display: flex;
}
</style>
