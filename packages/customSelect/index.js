// import CustomSelect from './src/customSelect.vue';

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomSelect.name, CustomSelect);
//     }
// }

import CustomSelect from './src/customSelect.vue';

CustomSelect.install = function(Vue) {
  Vue.component(CustomSelect.name, CustomSelect);
};

export default CustomSelect;