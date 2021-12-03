import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
  },
  { path: "/default", component: () => import("../components/Table.vue") },
  {
    path: "/pagination",
    component: () => import("../components/TablePagination.vue"),
  },
  {
    path: "/infinite-scroll",
    component: () => import("../components/TableInfiniteScroll.vue"),
  },
];

export default new Router({
  mode: "history",
  routes,
});
