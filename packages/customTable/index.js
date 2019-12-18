// import CustomTable from "./src/customTable.vue";

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomTable.name, CustomTable);
//     }
// }

import CustomTable from './src/customTable.vue';

CustomTable.install = function(Vue) {
  Vue.component(CustomTable.name, CustomTable);
};

export default CustomTable;