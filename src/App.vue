<script>
import AccountBox from "./components/AccountBox.vue";
import EntryBox from "./components/EntryBox.vue";
import GlobalSidebar from "./components/GlobalSidebar.vue";

export default {
  name: "App",
  components: {
    GlobalSidebar,
    AccountBox,
    EntryBox,
  },
};
</script>

<template>
  <GlobalSidebar />

  <AccountBox />

  <EntryBox />
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

body {
  height: 100vh;
  background-color: #2f2e2e;
  display: flex;
}
</style>
