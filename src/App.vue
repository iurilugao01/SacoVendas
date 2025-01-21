<script>
import AccountBox from "./components/AccountBox.vue";
import GlobalSidebar from "./components/GlobalSidebar.vue";

export default {
  name: "App",
  components: {
    GlobalSidebar,
    AccountBox,
  },
};
</script>

<template>
  <GlobalSidebar />

  <AccountBox />
</template>

<style>
body {
  height: 100vh;
  background-color: #2f2e2e;
  display: flex;
}
</style>
