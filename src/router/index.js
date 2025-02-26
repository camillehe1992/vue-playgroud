import { createRouter, createWebHistory } from "vue-router";

// Import your components
import HomeView from "@/views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ContactView from "@/views/ContactView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "About",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "Contact",
    component: ContactView,
  },
  // Add a catch-all route at the end (optional)
  {
    path: "/:pathMatch(.*)*", // Matches any unmatched route
    redirect: "/", // Redirect to home or a 404 page
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
