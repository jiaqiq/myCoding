import CustomLink from './src/customLink.vue';

export default {
    install: (Vue:any) => {
        Vue.component(CustomLink.name, CustomLink);
    }
}