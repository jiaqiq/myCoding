// import CustomInput from './src/customInput.vue';

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomInput.name, CustomInput);
//     }
// }

import CustomSearch from './src/customSearch.vue';

CustomSearch.install = function(Vue) {
  Vue.component(CustomSearch.name, CustomSearch);
};

export default CustomSearch;