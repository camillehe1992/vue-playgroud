<template>
  <MainLayout :title="title" :subtitle="subtitle">
    <p>This is the {{ title }} page.</p>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../../layout/MainLayout.vue";

const title = "Analytics";
const subtitle = "This is a subtitle or description.";
</script>
<style scoped></style>
