import { createWebHistory, createRouter } from "vue-router";
import Card from "@/components/card1.vue";
import Home from "@/views/lista.vue";
import flip from "@/views/cardFlip.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/card/:id",
    name: "Card",
    component: Card,
    props: true
  },
  {
    path: "/flip/:id",
    name: "flip",
    component: flip,
    props: true
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;