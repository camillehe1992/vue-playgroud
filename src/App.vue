<template>
  <v-app>
    <!-- Show AppBar and NavBar only if the user is logged in -->
    <AppBar v-if="isAuthenticated" />
    <NavBar v-if="isAuthenticated" />

    <v-main>
      <!-- Show Login component if the user is not logged in -->
      <LoginView v-if="!isAuthenticated" />

      <!-- Show the rest of the app (BreadcrumbsBar and Router View) if the user is logged in -->
      <template v-else>
        <v-card>
          <BreadcrumbsBar />
          <router-view />
        </v-card>
      </template>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, provide, onMounted } from "vue";
import { useRouter } from "vue-router";
import AppBar from "@/layout/AppBar.vue";
import NavBar from "@/layout/NavBar.vue";
import BreadcrumbsBar from "@/layout/BreadcrumbsBar.vue";
import LoginView from "@/views/LoginView.vue";

// Reactive state for authentication
const isAuthenticated = ref(false);

// Check authentication status on component mount
onMounted(() => {
  const token = localStorage.getItem("authToken");
  isAuthenticated.value = !!token; // Set isAuthenticated to true if a token exists
});

// Watch for changes in the authentication status
const router = useRouter();
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("authToken");

  // Redirect to login if the user is not authenticated and tries to access a protected route
  if (to.meta.requiresAuth && !token) {
    next("/login");
  } else {
    next();
  }
});

// Shared state for the drawer
const drawer = ref(true);

// Toggle function for the drawer
const toggleDrawer = () => {
  drawer.value = !drawer.value;
};

// Provide the drawer state and toggle function to child components
provide("drawer", drawer);
provide("toggleDrawer", toggleDrawer);
</script>

<style scoped>
.v-main {
  background-color: #f2f3f3;
}
</style>
