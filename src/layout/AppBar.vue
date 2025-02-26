<template lang="">
  <v-app-bar color="primary" app>
    <template #prepend>
      <v-app-bar-nav-icon variant="text"></v-app-bar-nav-icon>
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
export default {
  name: "AppBar",
};
</script>
<style lang=""></style>
