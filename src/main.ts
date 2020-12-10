import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

import 'highlight.js/styles/color-brewer.css' //导入高亮样式
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/styl/index.styl'; //导入基本样式
import demoBlock from './components/demo-block.vue'//高亮代码块组件
import '../packages/theme-set/lib/index.css' //导入UI样式

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import CustomUI from '../packages/index';

import MainHeader from '@/components/header.vue';

import './assets/styles/common.css';

Vue.config.productionTip = false
Vue.component('main-header', MainHeader);
Vue.component('demo-block', demoBlock)
Vue.use(ElementUI);
// 自定义组件导入
Vue.use(CustomUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
