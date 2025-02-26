<template>
  <v-app>
    <!-- Provide the drawer state to child components -->
    <AppBar />
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { ref, provide } from "vue";
import AppBar from "@/layout/AppBar.vue";
import NavBar from "@/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    NavBar,
  },
  setup() {
    const drawer = ref(true); // Shared state for the drawer
    const toggleDrawer = () => {
      drawer.value = !drawer.value; // Toggle the drawer state
    };

    // Provide the drawer state and toggle function to child components
    provide("drawer", drawer);
    provide("toggleDrawer", toggleDrawer);

    return {};
  },
};
</script>

<style>
/* Global styles */
</style>
