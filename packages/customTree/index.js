// import CustomTable from "./src/customTable.vue";

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomTable.name, CustomTable);
//     }
// }

import CustomTree from './src/customTree.vue';

CustomTree.install = function(Vue) {
  Vue.component(CustomTree.name, CustomTree);
};

export default CustomTree;