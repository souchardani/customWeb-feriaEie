import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Forms from "../views/Forms.vue";
const routes = [
  {
    path: "/",
    name: "Forms",
    component: Forms,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
