<script setup>
import { ref } from "vue";
import Notifybox from "./AppNotifybox.vue";

const userInfo = {
  username: "johndoe01",
  authority: "user",
  profileImage:
    "https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small_2x/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg",
};

const showNotifys = ref(false);

const profileIcon = ref({
  click: false,
  hover: false,
});
</script>

<template>
  <div class="container">
    <div class="user-info-container">
      <div class="notify-icon">
        <i class="bi bi-bell" @click="showNotifys = !showNotifys"></i>
        <Notifybox v-show="showNotifys" />
      </div>

      <img :src="userInfo.profileImage" alt="Foto de perfil" />

      <div class="user-info-content text-center text-break">
        <span class="text-white">{{ userInfo.username }}</span>
        <span class="text-white">{{ userInfo.authority }}</span>
      </div>
      <i
        :class="{
          bi: true,
          'bi-caret-down': !profileIcon.hover,
          'bi-caret-down-fill': profileIcon.hover,
          'rotate-icon': profileIcon.click,
        }"
        @click="profileIcon.click = !profileIcon.click"
        @mouseenter="profileIcon.hover = true"
        @mouseleave="profileIcon.hover = false"
      ></i>
    </div>
  </div>
</template>

<style scoped>
.notify-icon {
  display: flex;
  margin-right: 12px;
  align-items: center;
}

.bi-bell {
  font-size: 32px;
  cursor: pointer;
}
.container {
  background-color: #181717;
  position: absolute;
  display: flex;
  flex-direction: column;

  top: 0;
  width: 100%;
  height: 4rem;
  margin-bottom: 12px;
}
img {
  width: 50px;
  height: 50px;
  margin-right: 12px;
  margin-top: 8px;
  border-radius: 50%;
}
.user-info-container {
  display: flex;
  justify-content: flex-end;
}
.user-info-content {
  width: 5rem;
  margin-top: 5px;
}
.bi-caret-down,
.bi-caret-down-fill {
  display: flex;
  cursor: pointer;
  height: 16px;
  margin-top: 32px;
  transition: transform 0.3s ease-in-out;
}
.rotate-icon {
  transform: rotate(0.5turn);
}
</style>
