<style lang="scss" scoped>
  .demo-block {
    div {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .custom-tree-container {
        /* display: inline-block;
        margin: 0 10px 20px 0; */
    }
  }
</style>

# CustomTree 树形控件

---

### 基础用法

<div class="demo-block">
    <el-row>
        <el-col :span="12">
            <el-tree
                :data="data"
                show-checkbox
                default-expand-all
                node-key="id"
                ref="tree"
                highlight-current
                @check="check"
                :props="defaultProps">
            </el-tree>
            <el-button @click="treeSave">保存</el-button>
        </el-col>
        <el-col :span="12">
            <el-table
                :data="tableDataComp"
                style="width: 100%">
                <el-table-column
                    prop="level1"
                    label="一级类别"
                    width="180">
                </el-table-column>
                <el-table-column
                    prop="level2"
                    label="二级类别"
                    width="180">
                </el-table-column>
            </el-table>
            <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page.sync="pageInfo.pageNo"
                :page-size.sync="pageInfo.pageSize"
                :page-sizes="[10, 20, 50, 100, 200]"
                layout="total, sizes, prev, pager, next, jumper"
                :total="pageInfo.total">
            </el-pagination>
        </el-col>
    </el-row>
    
</div>

::: demo

```html
<div>
    
</div>

```
:::

<script>
    export default {
        data() {
            return {
                pageInfo: {
                    pageNo: 1,
                    pageSize: 10,
                    total: 0
                },
                checkedNodes: [],
                halfNode: [],
                data: [{
                    id: 1,
                    label: '一级 1',
                    level: 1,
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        level: 2,
                        parent: '一级 1',
                        children: [{
                        id: 9,
                        label: '三级 1-1-1',
                        level: 3,
                        }, {
                        id: 10,
                        label: '三级 1-1-2',
                        level: 3,
                        }]
                    }]
                    }, {
                    id: 2,
                    label: '一级 2',
                    level: 1,
                    children: [{
                        id: 5,
                        label: '二级 2-1',
                        level: 2,
                        parent: '一级 2'
                    }, {
                        id: 6,
                        label: '二级 2-2',
                        level: 2,
                        parent: '一级 2'
                    }]
                    }, {
                    id: 3,
                    label: '一级 3',
                    level: 1,
                    children: []
                },
                {
                    id: 11,
                    label: '一级 4',
                    level: 1,
                    children: [
                        {
                            id: 22,
                            label: '二级 4-1',
                            level: 2,
                            parent: '一级 4'
                        },
                        {
                            id: 33,
                            label: '二级 4-2',
                            level: 2,
                            parent: '一级 4'
                        },
                        {
                            id: 44,
                            label: '二级 4-3',
                            level: 2,
                            parent: '一级 4'
                        }
                    ]
                }],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                },

                tableData: []
            };
        },
        computed: {
            tableDataComp() {
                return this.tableData.slice((this.pageInfo.pageNo-1)*this.pageInfo.pageSize,this.pageInfo.pageNo*this.pageInfo.pageSize)
            }
        },
        methods: {
            handleSizeChange(val) {
                this.pageInfo.pageSize = val;
                this.$message({
                    type: 'info',
                    message: `每页${val}条`
                })
            },
            handleCurrentChange(val) {
                this.pageInfo.pageNo = val;
                // this.$message({
                //     type: 'info',
                //     message: `当前页: ${val}`
                // })
            },
            check() {
                this.checkedNodes = this.$refs.tree.getCheckedNodes();
                this.halfNode = this.$refs.tree.getHalfCheckedNodes();
                console.log('checkedNodes', this.checkedNodes)
                console.log('halfNode', this.$refs.tree.getHalfCheckedNodes());
            },
            treeSave() {
                if(this.checkedNodes.length) {
                    this.checkedNodes.forEach((item) => {
                        if(item.level == 1 && !item.children.length) {
                            this.tableData.push({
                                level1: item.label,
                                level2: ''
                            })
                        }
                        if(item.level == 2) {
                            this.tableData.push({
                                level1: item.parent,
                                level2: item.label
                            })
                        }
                    })
                    this.pageInfo.total = this.tableData.length;
                } else {
                    this.$message({
                        type: 'warning',
                        message: '请先选择节点后再保存'
                    })
                }
            }

        }   
    }
</script>