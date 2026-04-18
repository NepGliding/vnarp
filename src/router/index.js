import { createRouter, createWebHistory } from "vue-router";
import ResourcesPage from "@/Views/ResourcesPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/home", name: "home", component: () => import("@/Views/HomePage.vue") },
    { path: "/article", name: "article", component: () => import("@/Views/ArticlePage.vue") },
    { path: "/", name: "resources", component: ResourcesPage },
  ],
});

export default router;
