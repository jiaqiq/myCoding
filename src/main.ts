import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'highlight.js/styles/color-brewer.css' //导入高亮样式
import 'vue2-animate/dist/vue2-animate.min.css'
import './assets/styl/index.styl'; //导入基本样式
import demoBlock from './components/demo-block.vue'//高亮代码块组件

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import clipboard from 'clipboard';

import customInput from '@/components/customInput';
import customDialog from '@/components/customDialog';
import customDialog2 from '@/components/customDialog2';
import customSelect from '@/components/customSelect';
import customRadio from '@/components/customRadio';
import customButton from '@/components/customButton';
import customLink from '@/components/customLink';
import customSwitch from '@/components/customSwitch';
import customTable from '@/components/customTable';

import MainHeader from '@/components/header.vue';

import './assets/styles/common.css';
import jiaqi_npm_test from 'jiaqi_npm_test';
//注册到vue原型上
Vue.prototype.clipboard = clipboard;
Vue.prototype.$hideName = jiaqi_npm_test.$hideName;

Vue.config.productionTip = false
Vue.component('demo-block', demoBlock)
Vue.use(ElementUI);
// 自定义组件导入
Vue.use(customInput);
Vue.use(customDialog);
Vue.use(customDialog2);
Vue.use(customSelect);
Vue.use(customRadio);
Vue.use(customButton);
Vue.use(customLink);
Vue.use(customSwitch);
Vue.use(customTable);

Vue.component('main-header', MainHeader);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
