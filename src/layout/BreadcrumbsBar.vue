<template>
  <v-breadcrumbs v-if="breadcrumbItems.length" :items="breadcrumbItems">
    <template #divider>
      <v-icon>mdi-chevron-right</v-icon>
    </template>
  </v-breadcrumbs>
  <v-divider></v-divider>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "BreadcrumbsBar",
  setup() {
    const route = useRoute();

    // Generate breadcrumb items based on the current route
    const breadcrumbItems = computed(() => {
      const paths = route.path.split("/").filter((path) => path !== "");
      const items = paths.map((path, index) => {
        return {
          title: path.charAt(0).toUpperCase() + path.slice(1), // Capitalize the first letter
          disabled: index === paths.length - 1, // Disable the last item
          to: "/" + paths.slice(0, index + 1).join("/"), // Generate the route path
        };
      });
      // Add "Home" as the first breadcrumb item
      if (route.path !== "/") {
        items.unshift({
          title: "Home",
          disabled: false,
          to: "/",
        });
      }
      return items;
    });
    return {
      breadcrumbItems,
    };
  },
};
</script>

<style scoped>
/* Custom styles for breadcrumbs */
.v-breadcrumbs {
  display: flex;
  justify-content: flex-start; /* Align to the left */
  align-items: flex-start; /* Align to the top */
}
</style>
