/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import {
  Layout
} from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Layout);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");