import CustomSelect from './src/customSelect.vue';

export default {
    install: (Vue:any) => {
        Vue.component(CustomSelect.name, CustomSelect);
    }
}

// import CustomInput from './customInput.vue';

// CustomInput.install = function(Vue:any) {
//   Vue.component(CustomInput.name, CustomInput);
// };

// export default CustomInput;