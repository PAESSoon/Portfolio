import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import ScrollAnimation from './directives/scrollAnimation'

Vue.use(BootstrapVue);

Vue.config.productionTip = false

Vue.directive('scrollAnimation', ScrollAnimation);

new Vue({
  render: h => h(App),
}).$mount('#app')
