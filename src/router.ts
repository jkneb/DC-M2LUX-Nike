import { createWebHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import ProductView from "./components/ProductView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/product", component: ProductView },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
