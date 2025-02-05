<script>
import AccountBox from "./components/AccountBox.vue";
import EntryBox from "./components/EntryBox.vue";
import GlobalSidebar from "./components/GlobalSidebar.vue";
import SalesChart from "./components/SalesChart.vue";

export default {
  name: "App",
  components: {
    GlobalSidebar,
    AccountBox,
    EntryBox,
    SalesChart,
  },
};
</script>

<template>
  <GlobalSidebar />

  <AccountBox />

  <EntryBox />

  <SalesChart />
</template>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");

body {
  height: 100vh;
  background-color: #2f2e2e;
  display: flex;
}
</style>
