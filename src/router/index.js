import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/home", name: "home", component: () => import("@/Views/HomePage.vue") },
    { path: "/article", name: "article", component: () => import("@/Views/ArticlePage.vue") },
    { path: "/", name: "resources", component: () => import("@/Views/ResourcesPage.vue") },
  ],
});

export default router;
