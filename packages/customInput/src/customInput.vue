<template>
    <div class="custom-input-container"
        :style="`width:${customWidth || customWidthValue}px; height:${customHeight || customHeightValue}px`">
        <el-input
            :value="value"
            :type="type"
            :maxlength="maxlength"
            :minlength="minlength"
            :show-word-limit="showWordLimit"
            :placeholder="placeholder"
            :clearable="clearable"
            :show-password="showPassword"
            :disabled="disabled"
            :size="size"
            :prefix-icon="prefixIcon"
            :suffix-icon="suffixIcon"
            :rows="rows"
            :autosize="autosize"
            :autocomplete="autocomplete"
            :name="name"
            :readonly="readonly"
            :resize="resize"
            :autofocus="autofocus"
            :form="form"
            :label="label"
            :tabindex="tabindex"
            :validate-event="validateEvent"
            @blur="blurFun"
            @focus="focusFun"
            @change="changeFun"
            @clear="clearFun"
            @input="inputFun">
        </el-input>
    </div>
</template>


<script>
export default {
    name: 'CustomInput',

    props: {
        value: [String, Number],
        maxlength: Number,
        minlength: Number,
        placeholder: String,
        disabled: Boolean,
        size: String,    // medium / small / mini
        prefixIcon: String,
        suffixIcon: String,
        name: String,
        readonly: Boolean,
        resize: String,
        autofocus: Boolean,
        form: String,
        label: String,
        tabindex: String,
        rows: Number,
        customWidth: [String, Number],
        customHeight: [String, Number],
        type: {
            type: String,
            default: 'text'
        },
        showWordLimit: {
            type: Boolean,
            default: false
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        autosize: {
            type: [Boolean, Object],
            default: false
        },
        autocomplete: {
            type: String,
            default: 'off'
        },
        validateEvent: {
            type: Boolean,
            default: true
        }
    },

    watch: {
       
    },

    data() {
        return {
            customWidthValue: 240,
            customHeightValue: 30
        }
    },

    computed: {
        
    },
    mounted() {
        
    },

    methods: {
        blurFun() {
            this.$emit('blur');
        },
        focusFun() {
            this.$emit('focus');
        },
        changeFun() {
            this.$emit('change');
        },
        clearFun() {
            this.$emit('clear');
        },
        inputFun(val) {
            this.$emit('input', val);
        }
    }
}
</script>


<style lang="scss" scoped>
    $border-color: #2E8AF1;
    
    .custom-input-container {
        display: inline-block;
        /deep/ .el-input {
            width:100% !important;
            height:100% !important;
        }
        /deep/ .el-input__inner {
            width: 100% !important;
            height: 100% !important;
        }
        /deep/ .el-input__inner:focus {
            border-color: $border-color;
        }
        /deep/ .el-input__icon {
            line-height: 100% !important;
        }
    }
</style>