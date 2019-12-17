import CustomSwitch from "./src/customSwitch.vue";

export default {
    install: (Vue:any) => {
        Vue.component(CustomSwitch.name, CustomSwitch);
    }
}