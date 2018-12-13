/* eslint-disable prettier/prettier */
import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/project/:id',
      name: 'project',
      component: function () {
        return import('./views/Project.vue');
      }
    }
  ],
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    }
  }
});