import CustomDialog from './src/customDialog.vue'

export default {
    install: (Vue: any) => {
        Vue.component('custom-dialog', CustomDialog);
    }
}