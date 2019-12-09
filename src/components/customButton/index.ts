import CustomButton from './src/customButton.vue';

export default {
    install: (Vue:any) => {
        Vue.component(CustomButton.name, CustomButton);
    }
}

// import CustomInput from './customInput.vue';

// CustomInput.install = function(Vue:any) {
//   Vue.component(CustomInput.name, CustomInput);
// };

// export default CustomInput;