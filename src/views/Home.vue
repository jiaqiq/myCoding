<template>
  <div class="home">
    <custom-input v-model="curValue" :customWidth="customWidthValue" :customHeight="customHeightValue" clearable></custom-input>
    <custom-select v-model="curSelected" :customWidth="customWidthValue" :customHeight="customHeightValue" clearable>
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
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
    <custom-link type="primary" href="http://www.baidu.com" target="_blank">baidu</custom-link>
    <custom-switch v-model="switchValue" active-color="#13ce66" inactive-color="#ff4949"></custom-switch>
    <el-tree :data="treeData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
    <custom-table :data="tableData">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </custom-table>
    <div>{{tuominName}}</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {

    switchValue: boolean = false;
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

  tableData = [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1517 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1519 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1516 弄'
  }];

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
