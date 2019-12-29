<template>
  <div id="custom-switch-container">
    <div :class="isInnerText ? 'inner': ''">
      <el-switch
        :value="value"
        :disabled="disabled"
        :width="width"
        :active-icon-class="activeIconClass"
        :inactive-icon-class="inactiveIconClass"
        :active-text="isInnerText ? activeTextComp: activeText"
        :inactive-text="isInnerText ? inactiveTextComp: inactiveText"
        :active-value="activeValue"
        :inactive-value="inactiveValue"
        :active-color="activeColor"
        :inactive-color="inactiveColor"
        :name="name"
        :validate-event="validateEvent"
        @change="changeFun"
        @input="inputFun"
        >
      </el-switch>
    </div>
  </div>
</template>

<script>
export default {
    name: 'CustomSwitch',

    props: {
      isInnerText: {
        type: Boolean,
        default: false
      },
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      width: {
        type: Number,
        default: 40
      },
      activeIconClass: {
        type: String,
        default: ''
      },
      inactiveIconClass: {
        type: String,
        default: ''
      },
      activeText: String,
      inactiveText: String,
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      validateEvent: {
        type: Boolean,
        default: true
      }
    },

    computed: {
      activeTextComp: function() {
        if (this.value && this.activeText) {
          return this.activeText;
        }else {
          return ' ';     // 空格占位 平滑过度
        }
      },
      inactiveTextComp: function() {
        if (!this.value && this.inactiveText) {
          return this.inactiveText;
        }else {
          return ' ';
        }
      }
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
  #custom-switch-container {
    display: inline-block;
    text-align: center;
    position: relative;
    .inner {
      /deep/ .el-switch__label--right {
        position: absolute;
        top: 0;
        left: 5px;
        color: #fff;
        margin-left: 0 !important;
        z-index: 2019;
      }
      /deep/ .el-switch__label--left {
        position: absolute;
        top: 0;
        right: 5px;
        color: #fff;
        margin-right: 0 !important;
        z-index: 2019;
      }
    }
  }
</style>