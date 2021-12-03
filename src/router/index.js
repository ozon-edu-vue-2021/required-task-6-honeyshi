import Router from "vue-router";
import Vue from "vue";

Vue.use(Router);

const routes = [
  {
    path: "/",
    component: { render: (h) => h("div", ["Select table type to view"]) },
  },
  { path: "/default", component: () => import("../components/Table.vue") },
  {
    path: "/pagination",
    component: () => import("../components/TablePagination.vue"),
  },
];

export default new Router({
  mode: "history",
  routes,
});
