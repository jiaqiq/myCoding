<template>
    <div class="custom-radio-container">
        <el-radio
        :value="value"
        :label="label"
        :name="name"
        :size="size"
        :border="border"
        :disabled="disabled"
        @change="changeFun"
        @input="inputFun">
        </el-radio>
    </div>
</template>


<script>
export default {
    name: 'CustomRadio',

    props: {
      value: [String, Number, Boolean],
      label: [String, Number, Boolean],
      disabled: Boolean,
      name: String,
      border: Boolean,
      size: String
    },

    data() {
        return {
            
        }
    },

    mounted() {
        
    },

    methods: {
        changeFun() {
            this.$emit('change');
        },
        inputFun(val) {
            this.$emit('input', val);
        }
    }
}
</script>


<style lang="scss" scoped>

    $size: 14px;
    .custom-radio-container {
        display: inline-block;
        line-height: $size;
        /deep/ .el-radio__input {
            width: $size;
            height: $size;
            /deep/ .el-radio__inner {
                width: 100%;
                height: 100%;
            }
            /deep/ .el-radio__inner:after {
                background-color: unset;
                box-sizing: content-box;
                content: "";
                border: 1px solid #fff;
                border-left: 0;
                border-top: 0;
                width: 3px;
                height: 8px;
                position: absolute;
                top: 0%;
                left: 40%;
                border-radius: 0;
                transform: rotate(45deg) scaleY(1);
            }
        }
        /deep/ .el-radio__input.is-checked .el-radio__inner {
            border-color: #50C850;
            background: #50C850;
        }
    }
</style>