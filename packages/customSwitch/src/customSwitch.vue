<template>
  <el-switch
    :value="value"
    :disabled="disabled"
    :width="width"
    :active-icon-class="activeIconClass"
    :inactive-icon-class="inactiveIconClass"
    :active-text="activeText"
    :inactive-text="inactiveText"
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
</template>

<script>
export default {
    name: 'CustomSwitch',

    props: {
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

<style>

</style>