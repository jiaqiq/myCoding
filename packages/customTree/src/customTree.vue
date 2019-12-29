<template>
    <div class="custom-tree-container">
        <el-tree
            :data="data"
            show-checkbox
            default-expand-all
            node-key="id"
            ref="tree"
            highlight-current
            :props="defaultProps">
        </el-tree>
    </div>
</template>


<script>
export default {
    name: 'CustomTree',

    props: {
      
    },

    data() {
        return {
            
        }
    },

    mounted() {
        
    },

    methods: {
        
    }
}
</script>


<style lang="scss" scoped>

</style>