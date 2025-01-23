<script>
import { VApp, VContainer, VCard, VCardTitle, VCardText } from "vuetify/lib";

export default {
  name: "EmphDashboard",
  components: {
    VApp,
    VContainer,
    VCard,
    VCardTitle,
    VCardText,
  },
};
</script>

<template>
  <v-app>
    <v-container>
      <v-card>
        <v-card-title>Meu Dashboard</v-card-title>
        <v-card-text>Conteúdo do card</v-card-text>
      </v-card>
    </v-container>
  </v-app>
</template>
