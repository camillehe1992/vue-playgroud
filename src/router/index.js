import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import LoginView from "@/views/LoginView.vue";
import AnalyticsView from "@/views/dashboard/AnalyticsView.vue";
import ReportsView from "@/views/dashboard/ReportsView.vue";
import ProfileView from "@/views/settings/ProfileView.vue";
import SecurityView from "@/views/settings/SecurityView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home", // Redirect root to home
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView,
  },
  {
    path: "/home",
    name: "Home",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/analytics",
    name: "Analytics",
    component: AnalyticsView,
  },
  {
    path: "/dashboard/reports",
    name: "Reports",
    component: ReportsView,
  },
  {
    path: "/settings/profile",
    name: "Profile",
    component: ProfileView,
  },
  {
    path: "/settings/security",
    name: "Security",
    component: SecurityView,
  },
  // Optional: Catch-all route for unmatched paths
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
