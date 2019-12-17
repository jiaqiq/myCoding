import CustomRadio from './src/customRadio.vue';

export default {
    install: (Vue:any) => {
        Vue.component(CustomRadio.name, CustomRadio);
    }
}