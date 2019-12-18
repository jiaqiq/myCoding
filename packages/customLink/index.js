// import CustomLink from './src/customLink.vue';

// export default {
//     install: (Vue:any) => {
//         Vue.component(CustomLink.name, CustomLink);
//     }
// }

import CustomLink from './src/customLink.vue';

CustomLink.install = function(Vue) {
  Vue.component(CustomLink.name, CustomLink);
};

export default CustomLink;