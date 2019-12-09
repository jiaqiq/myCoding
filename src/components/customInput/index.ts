import CustomInput from './src/customInput.vue';

export default {
    install: (Vue:any) => {
        Vue.component(CustomInput.name, CustomInput);
    }
}

// import CustomInput from './customInput.vue';

// CustomInput.install = function(Vue:any) {
//   Vue.component(CustomInput.name, CustomInput);
// };

// export default CustomInput;