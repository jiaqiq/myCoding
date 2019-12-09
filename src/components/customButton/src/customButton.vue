<template>
    <div class="custom-button-container">
        <el-button
            :size="size"
            :type="type"
            :plain="plain"
            :round="round"
            :circle="circle"
            :loading="loading"
            :disabled="disabled"
            :icon="icon"
            :autofocus="autofocus"
            :native-type="nativeType"
            @click="clickFun">
            <slot></slot>
        </el-button>
    </div>
</template>


<script>
export default {
    name: 'CustomButton',

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    data() {
        return {
            buttonText: '按钮'
        }
    },

    mounted() {
        
    },

    methods: {
       clickFun() {
           this.$emit('click');
       }
    }
}
</script>


<style lang="scss" scoped>
    $border-color: #2E8AF1;
    
    .custom-button-container {
        
    }
</style>