<script setup>
import AppBar from "@/layout/AppBar.vue";
import NavigationDrawer from "./layout/NavigationDrawer.vue";
import MainContent from "./layout/MainContent.vue";
</script>

<template>
  <v-app>
    <AppBar />
    <NavigationDrawer />
    <MainContent />
  </v-app>
</template>

<style scoped></style>
