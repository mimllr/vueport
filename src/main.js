/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import VueShowdown from 'vue-showdown';
import router from "./router";
import {
  Layout
} from 'bootstrap-vue/es/components';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Layout);
Vue.use(VueShowdown, {
  emoji: true
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");