<template>
  <MainLayout :title="title">
    <p>This is the Profile page.</p>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layout/MainLayout.vue";

const title = "Profile";
</script>

<style scoped></style>
