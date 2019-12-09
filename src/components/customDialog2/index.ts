import CustomDialog from './src/customDialog.vue'

export default {
    install: (Vue: any) => {
        Vue.component(CustomDialog.name, CustomDialog);
    }
}