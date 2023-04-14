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
      // eslint-disable-next-line implicit-arrow-linebreak
      import("../components/auth-components/login/LoginComponent.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
      import("../components/auth-components/home/HomeComponent.vue"),
    meta: { requiresAuth: true },
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      // eslint-disable-next-line implicit-arrow-linebreak
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

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (localStorage.getItem("jwt") == null) {
      next({
        path: "/",
        params: { nextUrl: to.fullPath },
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;
