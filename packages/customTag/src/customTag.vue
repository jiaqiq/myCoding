<template>
    <div class="custom-tag-container" 
    :style="`width:${customWidth}px; height:${customHeight}px`">
    <el-popover
    placement="top-start"
    width="200"
    trigger="hover"
    :disabled="true"
    :content="`该资质还有${0}天过期`">
        <el-tag
            slot="reference"
            :closable="closable"
            :type="type"
            :hit="hit"
            :disableTransitions="disableTransitions"
            :color="color"
            :size="size"
            :effect="effect"
            @click="clickFun"
            @close="closeFun">
            <slot></slot>
        </el-tag>
  </el-popover>
        
    </div>
</template>


<script>
export default {
    name: 'CustomTag',

    props: {
      importData: {
          type: Object,
          default: (() => {})
      },
      text: String,
      closable: Boolean,
      type: String,
      hit: Boolean,
      disableTransitions: Boolean,
      color: String,
      size: String,
      effect: {
        type: String,
        default: 'light',
        validator(val) {
          return ['dark', 'light', 'plain'].indexOf(val) !== -1;
        }
      },
      customWidth: {
          type: [String, Number],
          default: 70
      },
      customHeight: {
          type: [String, Number],
          default: 25
      }
    },

    data() {
        return {
            
        }
    },

    created() {
       
    },

    methods: {
        clickFun() {
            this.$emit('click');
        },
        closeFun() {
            this.$emit('close');
        }
    }
}
</script>


<style lang="scss" scoped>

    .custom-tag-container {
        /deep/ .el-tag {
            width: 100%;
            height: 100%;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
        }
    }
</style>