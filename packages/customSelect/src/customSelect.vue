<template>
    <div class="custom-select-container"
        :style="`width:${customWidth}px; height:${customHeight}px`">
        <el-select
        :value="value"
        :autocomplete="autocomplete"
        :automaticDropdown="automaticDropdown"
        :size="size"
        :disabled="disabled"
        :clearable="clearable"
        :filterable="filterable"
        :allowCreate="allowCreate"
        :loading="loading"
        :popperClass="popperClass"
        :remote="remote"
        :loadingText="loadingText"
        :noMatchText="noMatchText"
        :noDataText="noDataText"
        :remoteMethod="remoteMethod"
        :filterMethod="filterMethod"
        :multiple="multiple"
        :multipleLimit="multipleLimit"
        :placeholder="placeholder"
        :defaultFirstOption="defaultFirstOption"
        :reserveKeyword="reserveKeyword"
        :valueKey="valueKey"
        :collapseTags="collapseTags"
        :popperAppendToBody="popperAppendToBody"
        @change="changeFun"
        @visible-change="visibleChangeFun"
        @remove-tag="removeTagFun"
        @clear="clearFun"
        @blur="blurFun"
        @focus="focusFun"
        @input="inputFun">
            <slot></slot>
        </el-select>
    </div>
</template>


<script>
export default {
    name: 'CustomSelect',

    props: {
      customWidth: {
          type: [String, Number],
          default: 240
      },
      customHeight: {
          type: [String, Number],
          default: 30
      },
      value: [String, Number, Boolean],
      autocomplete: {
        type: String,
        default: 'off'
      },
      /** @Deprecated in next major version */
      autoComplete: {
        type: String,
        validator(val) {
          process.env.NODE_ENV !== 'production' &&
            console.warn('[Element Warn][Select]\'auto-complete\' property will be deprecated in next major version. please use \'autocomplete\' instead.');
          return true;
        }
      },
      automaticDropdown: Boolean,
      size: String,
      disabled: Boolean,
      clearable: Boolean,
      filterable: Boolean,
      allowCreate: Boolean,
      loading: Boolean,
      popperClass: String,
      remote: Boolean,
      loadingText: String,
      noMatchText: String,
      noDataText: String,
      remoteMethod: Function,
      filterMethod: Function,
      multiple: Boolean,
      multipleLimit: {
        type: Number,
        default: 0
      },
      placeholder: {
        type: String
      },
      defaultFirstOption: Boolean,
      reserveKeyword: Boolean,
      valueKey: {
        type: String,
        default: 'value'
      },
      collapseTags: Boolean,
      popperAppendToBody: {
        type: Boolean,
        default: true
      }
    },

    watch: {
       multiple(val){
          if(val){
              
          }  
       }
    },
    computed: {
        
    },

    data() {
        return {
            
        }
    },

    computed: {
        
    },
    mounted() {
        
    },

    methods: {
        changeFun(val) {
            this.$emit('change', val);
        },
        visibleChangeFun() {
            this.$emit('visibleChange');
        },
        removeTagFun() {
            this.$emit('removeTag');
        },
        clearFun() {
            this.$emit('clear');
        },
        blurFun() {
            this.$emit('blur');
        },
        focusFun() {
            this.$emit('focus');
        },
        inputFun(val) {
            this.$emit('input', val);
        }
    }
}
</script>


<style lang="scss" scoped>
    .custom-select-container {
        display: inline-block;
        /deep/ .el-select {
            width: 100% !important;
            height: 100% !important;
        }
        /deep/ .el-input {
            width: 100% !important;
            height: 100% !important;
        }
        /deep/ .el-input__inner {
            width: 100% !important;
            height: 100% !important;
        }
        /deep/ .el-input__icon {
            line-height: 100% !important;
        }
    }
</style>