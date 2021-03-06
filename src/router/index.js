import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/FoxconnHome.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
      // import(/* webpackChunkName: "about" */ "../components/TestProps.vue"),
  },
  {
    path: "/reporter-oct/",
    name: "oct",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/NewReporterOct.vue"),
  },
  {
    path: "/reporter-nov/",
    name: "nov",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/oct-ori.vue"),
  },
  {
    path: "/reporter-dec/",
    name: "dec",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/TestAnkor2.vue"),
  },
];

const router = createRouter({

  // for ankor_farmer
  // scrollBehavior(to) {
  //   if (to.hash) {
  //     return {
  //       el: to.hash,
  //       behavior: 'smooth',
  //       top: 45,
  //     }
  //   }
  // },

  history: createWebHashHistory(),
  routes,
});

export default router;
