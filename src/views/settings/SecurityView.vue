<template>
  <MainLayout :title="title">
    <p>This is the {{ title }} page.</p>
  </MainLayout>
</template>

<script setup>
import MainLayout from "@/layout/MainLayout.vue";

const title = "Security";
</script>

<style scoped></style>
