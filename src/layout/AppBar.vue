<template lang="">
  <v-app-bar app dark color="#646cff">
    <template #prepend>
      <!-- Toggle Button for the Drawer -->
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title><strong>Vue Playgroud</strong></v-app-bar-title>

    <template #append>
      <v-list-item
        lines="two"
        prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
        subtitle="Logged in"
        title="Jane Smith"
      ></v-list-item>
      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>
<script>
import { inject } from "vue";
export default {
  name: "AppBar",
  setup() {
    // Inject the toggleDrawer function from the parent component
    const toggleDrawer = inject("toggleDrawer");

    return {
      toggleDrawer,
    };
  },
};
</script>
<style scoped></style>
