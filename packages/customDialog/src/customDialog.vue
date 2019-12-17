<template>
  <div class="onelink-dialog-container">
    <!-- @closed="()=>{this.closeDialog && this.closeDialog()}" -->
    <!-- :class="`${isMax && 'max_900'}`" -->
    <el-dialog
      :title="title"
      :visible.sync="isShowVisible"
      @close="closed"
      :append-to-body="appendToBody"
      :custom-class="customClass"
      :class="{ 'max_900': isMax }"
    >
      <slot name="content"></slot>
      <div slot="footer" class="dialog-footer" v-if="$slots.foot">
        <slot name="foot"></slot>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator";
import fa from "element-ui/src/locale/lang/fa";

@Component
export default class onelinkDialog extends Vue {
  isShowVisible: Boolean = false;
  @Prop({ default: "请输入title", type: String }) title; //标题
  @Prop({ default: true, type: Boolean }) showVisible; //显示隐藏
  @Prop({ default: false, type: Boolean }) isMax; //是否使用大号弹窗
  // @Prop({ default: '418px', type: String }) isHeight; //是否使用大号弹窗
  @Prop() closeDialog;
  @Prop({ default: false, type: Boolean }) appendToBody; // 嵌套弹框需要
  @Prop({ default: "", type: String }) customClass;  //Dialog 的自定义类名 （某些弹框之前有用到

  @Watch("showVisible", { deep: true })
  showVisibleFun(val) {
    this.isShowVisible = val;
  }

  closed() {
    this.$emit("closed", false);
  }
    
}
</script>

<style lang="scss">
$dialogWidth: 600px;
$dialogHeight: 418px;

.onelink-dialog-container {

  .max_900 {
    .el-dialog {
      position: relative;
      width: 960px;
      height: 600px;
      max-height: 75%;
      .el-dialog__body {
        padding: 20px 20px;
        font-size: 12px;
        overflow: scroll;
      }
    }
  }
  .el-dialog {
    position: relative;
    width: $dialogWidth;
    height:$dialogHeight;
    max-height: 75%;
    .el-dialog__header {
      height: 48px;
      line-height: 48px;
      padding: 0 0 0 20px;
      background: #f0f2f5;
      .el-dialog__title {
        font-size: 16px;
      }
      .el-dialog__headerbtn {
        line-height: 1//关闭按钮ie兼容
      }
    }
    .el-dialog__body {
      padding: 20px 20px 40px;
      font-size: 12px;
      height: calc(100% - 106px) !important;
      overflow: scroll;
      .el-form-item__label,
      .el-form-item__content,
      .el-select,
      .el-input__inner {
        font-size: 12px;
      }
    }
    .el-dialog__footer {
      position: absolute;
      width: 100%;
      bottom: 0;
      padding: 15px;
      .dialog-footer {
        text-align: center;
        .el-button {
          padding: 7px 16px;
          border-radius: 3px;
        }
      }
    }
    

  }
  //火狐、ie浏览器下滚动条的隐藏
  overflow-y: scroll;
  scrollbar-color: transparent transparent;
  scrollbar-track-color: transparent;
  -ms-scrollbar-track-color: transparent;
  -ms-overflow-style:none;
}
</style>