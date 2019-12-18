// import CustomRadio from './src/customRadio.vue';

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomRadio.name, CustomRadio);
//     }
// }

import CustomRadio from './src/customRadio.vue';

CustomRadio.install = function(Vue) {
  Vue.component(CustomRadio.name, CustomRadio);
};

export default CustomRadio;