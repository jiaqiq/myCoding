<template>
    <div class="custom-dialog-container" v-show="visible">
        <el-dialog
            :visible="visible"
            :title="title"
            :modal="modal"
            :modalAppendToBody="modalAppendToBody"
            :appendToBody="appendToBody"
            :lockScroll="lockScroll"
            :closeOnClickModal="closeOnClickModal"
            :closeOnPressEscape="closeOnPressEscape"
            :showClose="showClose"
            :width="width"
            :fullscreen="fullscreen"
            :customClass="customClass"
            :top="top"
            :beforeClose="beforeClose"
            :center="center"
            :destroyOnClose="destroyOnClose"
            @open="openFun"
            @opened="openedFun"
            @close="closeFun"
            @closed="closedFun">
            <div :style="`max-height:${customHeight || customHeightValue}px;overflow:auto;`">
              <slot name="content"></slot>
            </div>
            <div slot="footer" class="dialog-footer" v-if="$slots.footer">
                <slot name="footer"></slot>
            </div>
        </el-dialog>
    </div>
</template>


<script>
export default {
    name: 'CustomDialog2',

    props: {
      customHeight: [String, Number],
      
      visible: {
        type: Boolean,
        default: false
      },

      title: {
        type: String,
        default: ''
      },

      modal: {
        type: Boolean,
        default: true
      },

      modalAppendToBody: {
        type: Boolean,
        default: true
      },

      appendToBody: {
        type: Boolean,
        default: false
      },

      lockScroll: {
        type: Boolean,
        default: true
      },

      closeOnClickModal: {
        type: Boolean,
        default: true
      },

      closeOnPressEscape: {
        type: Boolean,
        default: true
      },

      showClose: {
        type: Boolean,
        default: true
      },

      width: String,

      fullscreen: Boolean,

      customClass: {
        type: String,
        default: ''
      },

      top: {
        type: String,
        default: '15vh'
      },
      beforeClose: Function,
      center: {
        type: Boolean,
        default: false
      },

      destroyOnClose: Boolean
    },

    data() {
        return {
            customHeightValue: '400'  // default
        }
    },

    computed: {
        
    },
    mounted() {
        
    },

    methods: {
        openFun() {
            this.$emit('open');
        },
        openedFun() {
            this.$emit('opened');
        },
        closeFun() {
            this.$emit('close');
        },
        closedFun() {
            this.$emit('closed');
        }
    }
}
</script>

<style lang="scss" scoped>

  // 减去滚动条宽度
  // /deep/ .el-row {
  //   width: calc(100% - 10px) !important;
  // }
    /*修改滚动条样式*/
  .content-class::-webkit-scrollbar {
      width:10px;
      height:10px;
    }
  .content-class::-webkit-scrollbar-track {
      background: rgb(239, 239, 239);
      border-radius:2px;
    }
  .content-class::-webkit-scrollbar-thumb {
      background: rgba(0,0,0,0.10);
      border-radius:10px;
    }
  .content-class::-webkit-scrollbar-thumb:hover {
      background: rgba(0,0,0,0.25);
  }
</style>