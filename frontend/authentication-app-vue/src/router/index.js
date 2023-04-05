import Vue from "vue";
import VueRouter from "vue-router";

// eslint-disable-next-line import/no-extraneous-dependencies
import NProgress from "nprogress";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import("../components/auth-components/login/LoginComponent.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      import("../components/auth-components/home/HomeComponent.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import("../components/auth-components/register/RegisterComponent.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start();
  }
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
