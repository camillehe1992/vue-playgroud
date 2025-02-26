<template lang="">
  <v-navigation-drawer
    v-model="drawer"
    :rail="isRail"
    permanent
    @click="rail = false"
    @update:rail="toggleRail"
  >
    <!-- Rail Toggle Button with Tooltip -->
    <v-tooltip location="right">
      <template #activator="{ props }">
        <v-list-item
          v-if="isRail"
          prepend-icon="mdi-chevron-right"
          v-bind="props"
          @click="toggleRail"
        ></v-list-item>
        <v-list-item
          v-else
          prepend-icon="mdi-chevron-left"
          v-bind="props"
          @click="toggleRail"
        ></v-list-item>
      </template>
      <span>{{ isRail ? "Expand" : "Collapse" }}</span>
    </v-tooltip>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <!-- Navigation Links -->
      <v-list-item
        v-for="item in navItems"
        :key="item.name"
        :to="item.path"
        :prepend-icon="item.icon"
        :title="item.name"
        link
        :active="isActive(item.path)"
        @click="console"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
export default {
  name: "NavBar",
  props: {},
  data() {
    return {
      drawer: true, // Controls the visibility of the navigation drawer
      isRail: false, // Controls whether the drawer is in rail mode (collapsed)
      navItems: [
        { name: "Home", path: "/", icon: "mdi-home" },
        { name: "About", path: "/about", icon: "mdi-information" },
        { name: "Contact", path: "/contact", icon: "mdi-email" },
      ],
    };
  },
  methods: {
    toggleRail() {
      this.isRail = !this.isRail; // Toggle rail mode
    },
    isActive(path) {
      // Check if the current route matches the item's path
      return this.$route.path === path;
    },
    console() {
      console.log(this.$route.path);
    },
  },
};
</script>
<style scoped>
/* Custom styles for the navigation drawer */
.v-navigation-drawer {
  background-color: #f5f5f5; /* Light gray background */
}

.v-list-item--active {
  background-color: #e0e0e0; /* Highlight active link */
}
</style>
