<template>
  <div class="about">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
          <el-select v-model="scope.row.address" multiple placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
          <el-button type="primary" @click="copy(scope.row)">复制</el-button>
          <el-button @click="paste(scope.row,scope.$index)">粘贴</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

export default class Home extends Vue {

  tableData = [
    {
      date: "2016-05-02",
      name: "王小虎",
      address: []
    },
    {
      date: "2016-05-04",
      name: "王小虎",
      address: []
    },
    {
      date: "2016-05-01",
      name: "王小虎",
      address: []
    },
    {
      date: "2016-05-03",
      name: "王小虎",
      address: []
    }
  ];

  options = [
    {
      value: "1",
      label: "黄金糕"
    },
    {
      value: "2",
      label: "双皮奶"
    },
    {
      value: "3",
      label: "蚵仔煎"
    },
    {
      value: "4",
      label: "龙须面"
    },
    {
      value: "5",
      label: "北京烤鸭"
    }
  ];

  selectedArr = [];

// 打包报错暂时注掉
  copy(row: object) {
    // this.selectedArr = [];
    // row.address.map((item:any) => {
    //   this.selectedArr.push(item);
    // });
  }

  paste(row: object, idx: any) {
    let newArrTable = [
      ...new Set([...this.tableData[idx].address, ...this.selectedArr])
    ];
    Object.assign(this.tableData[idx], { address: newArrTable });
    let newTableData = this.tableData[idx];
    this.$set(this.tableData, idx, newTableData);
  }
}
</script>


