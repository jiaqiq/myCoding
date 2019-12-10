import CustomTable from "./src/customTable.vue";

export default {
    install: (Vue:any) => {
        Vue.component(CustomTable.name, CustomTable);
    }
}