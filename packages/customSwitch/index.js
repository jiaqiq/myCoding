// import CustomSwitch from "./src/customSwitch.vue";

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomSwitch.name, CustomSwitch);
//     }
// }

import CustomSwitch from './src/customSwitch.vue';

CustomSwitch.install = function(Vue) {
  Vue.component(CustomSwitch.name, CustomSwitch);
};

export default CustomSwitch;