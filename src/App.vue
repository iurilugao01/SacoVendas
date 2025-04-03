<script setup></script>

<template>
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
