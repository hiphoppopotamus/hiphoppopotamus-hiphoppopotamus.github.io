import Vue from 'vue';
import App from './Home.vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import VueResizeText from 'vue-resize-text';

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueResizeText);

new Vue({
  render: h => h(App),
}).$mount('#home');
