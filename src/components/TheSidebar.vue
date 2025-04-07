<script setup>
import { ref } from "vue";

const expanded = ref(false);
</script>

<template>
  <nav :class="{ expanded: expanded }">
    <div class="btn-expand">
      <i class="bi bi-list-task" @click="expanded = !expanded"></i>
      <span class="nav-header">Saco Vendas</span>
    </div>

    <ul>
      <li class="">
        <a href="#">
          <span class="icon"><i class="bi bi-house"></i></span>
          <span class="txt-link">Home</span>
        </a>
      </li>
      <li class="">
        <a href="#">
          <span class="icon"><i class="bi bi-search"></i></span>
          <span class="txt-link">Explorar</span>
        </a>
      </li>
      <li class="">
        <a href="#">
          <span class="icon"><i class="bi bi-plus-circle-dotted"></i></span>
          <span class="txt-link">Mais</span>
        </a>
      </li>
      <li class="">
        <a href="#">
          <span class="icon"><i class="bi bi-person-raised-hand"></i></span>
          <span class="txt-link">Ajuda</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

body {
  height: 100%;
  display: flex;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 65px;
  height: 100vh;
  background-color: #202020;
  padding: 40px 0 40px 1%;
  display: flex;
  flex-direction: column;
  box-shadow: 3px 0 0 #0aa533;
  overflow: hidden;
  transition: 0.5s;
}

nav:hover,
.expanded {
  width: 300px;
}

.nav-header {
  font-size: 20px;
  margin-left: 20px;
  color: #0aa533;
  position: absolute;
  white-space: nowrap;
}

.btn-expand {
  width: 100%;
  padding: 20px 4%;
  margin-left: 10px;
}

.btn-expand > i {
  color: #fff;
  font-size: 24px;
  cursor: pointer;
}

ul {
  margin-top: 30px;
  height: 100%;
  list-style: none;
}

li {
  transition: 0.2s;
  margin-bottom: 20px;
}

li:hover {
  background-color: #0aa533;
}

a {
  color: #fff;
  text-decoration: none;
  font-size: 20px;
  padding: 20px 4%;
  display: flex;
}

.icon {
  margin-left: 10px;
}

.txt-link {
  margin-left: 20px;
}
</style>
