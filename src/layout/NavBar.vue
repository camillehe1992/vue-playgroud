<template>
  <v-navigation-drawer v-model="drawer" app :rail="isRail">
    <!-- Navigation Links -->
    <v-list density="compact" nav>
      <template v-for="item in navItems" :key="item.name">
        <!-- Single-Level Item -->
        <v-list-item
          v-if="!item.children"
          :to="item.path"
          :prepend-icon="item.icon"
          :title="item.name"
          link
          :active="isActive(item.path)"
        ></v-list-item>

        <!-- Multi-Level Item -->
        <v-list-group v-else v-model="item.isOpen">
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :prepend-icon="item.icon"
              :title="item.name"
            ></v-list-item>
          </template>

          <!-- Sub-Items -->
          <v-list-item
            v-for="child in item.children"
            :key="child.name"
            :to="child.path"
            :prepend-icon="child.icon"
            :title="child.name"
            link
            :active="isActive(child.path)"
          ></v-list-item>
        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script s>
import { inject } from "vue";

export default {
  name: "NavBar",
  setup() {
    // Inject the drawer state from the parent component
    const drawer = inject("drawer");

    return {
      drawer,
    };
  },
  data() {
    return {
      isRail: false, // Controls whether the drawer is in rail mode (collapsed)
      navItems: [
        {
          name: "Home",
          path: "/",
          icon: "mdi-home",
        },
        {
          name: "Dashboard",
          icon: "mdi-view-dashboard",
          isOpen: false, // Manually control group expansion
          children: [
            {
              name: "Analytics",
              path: "/dashboard/analytics",
              icon: "mdi-chart-line",
            },
            {
              name: "Reports",
              path: "/dashboard/reports",
              icon: "mdi-file-chart",
            },
          ],
        },
        {
          name: "Settings",
          icon: "mdi-cog",
          isOpen: false, // Manually control group expansion
          children: [
            {
              name: "Profile",
              path: "/settings/profile",
              icon: "mdi-account",
            },
            {
              name: "Security",
              path: "/settings/security",
              icon: "mdi-lock",
            },
          ],
        },
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
    isGroupActive(item) {
      // Check if any child route is active
      return item.children?.some((child) => this.isActive(child.path));
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
