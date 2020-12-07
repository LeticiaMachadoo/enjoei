import Vue from "vue";
import VueRouter from "vue-router";
import vInstructions from "@/pages/instructions.vue";
import vProducts from "@/pages/products.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Instructions",
    component: vInstructions
  },
  {
    path: "/busca",
    name: "Search",
    component: vProducts
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
