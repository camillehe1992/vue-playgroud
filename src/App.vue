<template>
  <v-app>
    <AppBar />
    <NavBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "@/layout/AppBar.vue";
import NavBar from "@/layout/NavBar.vue";

export default {
  name: "App",
  components: {
    AppBar,
    NavBar,
  },
};
</script>

<style scoped></style>
