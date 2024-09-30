import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./components/HomeView.vue";
import ProductView from "./components/ProductView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/product", component: ProductView },
];

export const router = createRouter({
  history: createWebHashHistory("/DC-M2LUX-Nike"),
  routes,
});
