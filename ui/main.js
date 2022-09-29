import Vue from "vue"
import App from "./App.vue"
import apolloProvider from "./vue-apollo"
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.config.productionTip = false;


Vue.use(VueRouter);

const router = new VueRouter({
  routes
 
});

new Vue({
  provide: apolloProvider.provide(),
  router,
  render: (h) => h(App)
  
}).$mount("#app");
