// import CustomInput from './src/customInput.vue';

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomInput.name, CustomInput);
//     }
// }

import CustomInput from './src/customInput.vue';

CustomInput.install = function(Vue) {
  Vue.component(CustomInput.name, CustomInput);
};

export default CustomInput;