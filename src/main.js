/* eslint-disable prettier/prettier */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueAnalytics from 'vue-analytics';
import './styles/bootstrap_custom.scss';

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: process.env.VUE_APP_GA_TOKEN,
  router,
  debug: {
    enabled: isProd,
    sendHitTask: !isProd
  }
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");