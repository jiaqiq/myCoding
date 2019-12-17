import CustomButton from './src/customButton.vue';

export default {
    install: (Vue:any) => {
        Vue.component(CustomButton.name, CustomButton);
    }
}

// import CustomButton from './src/customButton.vue';

// CustomButton.install = function(Vue:any) {
//   Vue.component(CustomButton.name, CustomButton);
// };

// export default CustomButton;