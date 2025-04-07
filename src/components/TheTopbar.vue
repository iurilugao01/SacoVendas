<script setup>
const userInfo = {
  username: "johndoe01",
  authority: "user",
};
</script>

<template>
  <div class="container">
    <div class="user-info">
      <span class="text-white">{{ userInfo.username }}</span>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #181717;
  position: absolute;
  display: flex;

  top: 0;
  width: 100%;
  height: 4rem;
  margin-bottom: 12px;
}
.user-info {
  right: 0;
}
</style>
