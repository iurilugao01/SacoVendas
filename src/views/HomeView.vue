<script setup>
import Sidebar from "@/components/TheSidebar.vue";
import Naviten from "@/components/AppNaviten.vue";
import AccountBox from "@/components/AccountBox.vue";
import EntryBox from "@/components/EntryBox.vue";
import SalesChart from "@/components/SalesChart.vue";
</script>

<template>
  <Sidebar>
    <Naviten icon="bi-house" link="/" content="Home" />
    <Naviten icon="bi-search" link="/" content="Explorar" />
    <Naviten icon="bi-plus-circle" link="/" content="Mais" />
    <Naviten icon="bi-person-raised-hand" link="/" content="Ajuda" />
  </Sidebar>

  <AccountBox />

  <EntryBox />

  <SalesChart />
</template>
