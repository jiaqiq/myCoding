<template>
  <div class="home">
    <custom-input v-model="curValue" :customWidth="customWidthValue" :customHeight="customHeightValue" clearable></custom-input>
    <custom-select v-model="curSelected" :customWidth="customWidthValue" :customHeight="customHeightValue" clearable>
      <template #option>
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </template>
    </custom-select>
    <custom-radio v-model="curRadio" :label="item" v-for="(item, index) in radioOptions" :key="index"></custom-radio>
    <custom-dialog2 :visible="visibleShow" @close="closeDialog" width="" title="自定义dialog">
      <template #content>
        <div>aaaaaaaaaaaaaa</div>
      </template>
      <template #footer>
        <el-button @click="closeDialog">取消</el-button>
      </template>
    </custom-dialog2>
    <custom-button @click="dialogShow">点击点击点击点击</custom-button>
    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <div>{{tuominName}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {

    tuominName: string = 'aaaaaaaaaaa';
    curRadio: string = '';
    curSelected: string = '';
    selectOptions = [{
      value: '选项1',
      label: '黄金糕'
    }, {
      value: '选项2',
      label: '双皮奶'
    }, {
      value: '选项3',
      label: '蚵仔煎'
    }, {
      value: '选项4',
      label: '龙须面'
    }, {
      value: '选项5',
      label: '北京烤鸭'
    }];
    defaultProps = {
      children: 'children',
      label: 'label'
    };
    treeData = [{
          label: '一级 1',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }];
 radioOptions = ['A', 'B', 'C'];
 curValue: string = '';
 visibleShow: boolean = false;
 customWidthValue: number = 240;
 customHeightValue: number = 30;
 btnCustomWidth: number = 98;
 btnCustomHeight: number = 40;

  mounted() {
    
  }
  customButton() {
    console.log(12313)
  }
  dialogShow() {
    this.visibleShow = true;
  }
  closeDialog() {
    this.visibleShow = false;
  }
  handleNodeClick(data) {
    console.log(data);
  }

}
</script>

<style lang="scss" scoped>

  .home {
    // /deep/ .el-tree-node__content {
    //   &:hover {
    //     background: #89c2f7;
    //   }
    // }
    // /deep/ .el-tree-node:focus.el-tree-node__content{
    //   background-color: #5daaf0;
    // }
  }
  
</style>
