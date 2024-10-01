import { createWebHashHistory, createRouter } from "vue-router";

import HomeView from "./pages/HomeView.vue";
import ProductView from "./pages/ProductView.vue";
import ShopView from "./pages/ShopView.vue";
import FavouritesView from "./pages/FavouritesView.vue";
import BagView from "./pages/BagView.vue";
import ProfileView from "./pages/ProfileView.vue";

const routes = [
  { path: "/", component: HomeView },
  { path: "/product", component: ProductView },
  { path: "/shop", component: ShopView },
  { path: "/favourites", component: FavouritesView },
  { path: "/bag", component: BagView },
  { path: "/profile", component: ProfileView },
];

export const router = createRouter({
  history: createWebHashHistory("/DC-M2LUX-Nike"),
  routes,
});
