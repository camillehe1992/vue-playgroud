<template>
  <v-card variant="text">
    <v-card-item>
      <v-card-title v-if="title"> {{ title }}</v-card-title>
      <v-card-subtitle v-if="subtitle"> {{ subtitle }}</v-card-subtitle>
    </v-card-item>
    <v-card-item>
      <!-- Main Content Slot -->
      <slot></slot>
    </v-card-item>
  </v-card>
</template>

<script>
export default {
  name: "MainLayout",
  props: {
    title: {
      type: String,
      default: null,
    },
    subtitle: {
      type: String,
      default: null,
    },
  },
};
</script>
<style scoped></style>
