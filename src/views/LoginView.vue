<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="username"
                label="Username"
                required
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
              ></v-text-field>
              <v-btn type="submit" color="primary">Login</v-btn>
            </v-form>
            <p v-if="error" class="error">{{ error }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const username = ref("");
const password = ref("");
const error = ref("");
const router = useRouter();

const handleLogin = () => {
  // Simulate a login request
  if (username.value === "admin" && password.value === "12345") {
    localStorage.setItem("authToken", "dummy-token"); // Save a dummy token
    router.push("/home"); // Redirect to the home page
  } else {
    error.value = "Invalid username or password";
  }
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
