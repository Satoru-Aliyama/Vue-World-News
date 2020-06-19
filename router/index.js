import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/reference",
      name: "Reference",
      // route level code-splitting
      // this generates a separate chunk (Reference.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "Reference" */ "../views/Reference.vue"),
    },
  ],
  scrollBehavior() {
    console.log("aaa");
    return new Promise((resolve) => {
      this.app.$root.$on("triggerScroll", () => {
        let position = {
          x: 0,
          y: 0,
        };
        resolve(position);
      });
    });
  },
});
