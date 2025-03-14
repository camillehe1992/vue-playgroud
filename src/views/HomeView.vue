<template>
  <MainLayout :title="title">
    <div class="home-container">
      <h1>Welcome, {{ username }}!</h1>
      <p>You are logged in.</p>
      <button @click="handleLogout">Logout</button>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import MainLayout from "@/layout/MainLayout.vue";

const title = "Home";

const username = ref("");
const router = useRouter();

// Fetch username from localStorage
onMounted(() => {
  const token = localStorage.getItem("authToken");
  if (!token) {
    router.push("/login");
  }
});

// Handle logout
const handleLogout = () => {
  localStorage.removeItem("authToken");
  router.push("/login");
};
</script>

<style scoped>
.home-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
}

button {
  padding: 10px 20px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #ff1a1a;
}
</style>
