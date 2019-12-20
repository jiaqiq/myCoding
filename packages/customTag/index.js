import CustomTag from './src/customTag.vue';

CustomTag.install = function(Vue) {
    Vue.component(CustomTag.name, CustomTag);
}

export default CustomTag;