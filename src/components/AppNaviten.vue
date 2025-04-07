<script setup>
import { defineProps } from "vue";

const props = defineProps({
  link: {
    type: String,
    default: "#",
  },
  icon: {
    type: String,
    default: "bi-boxes",
  },
  content: {
    type: String,
    default: "Novo link",
  },
});

props;
</script>

<template>
  <li>
    <RouterLink :to="link">
      <span class="icon"><i :class="['bi', icon]"></i></span>
      <span class="txt-link">{{ content }}</span>
    </RouterLink>
  </li>
</template>
