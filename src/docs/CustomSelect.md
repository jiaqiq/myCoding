<style lang="scss" scoped>
  .demo-block {
    div {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .custom-select-container {
        /* display: inline-block;
        margin: 0 10px 20px 0; */
    }
  }
</style>

# CustomSelect 选择框

---

### 基础用法

<div class="demo-block">
    <div>
        <custom-select customWidth="240" customHeight="30" v-model="selectValue" placeholder="请选择" multiple clearable>
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </custom-select>
    </div>
</div>

::: demo

```html
<div>
    <custom-select customWidth="240" customHeight="30" v-model="selectValue" placeholder="请选择">
        <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
        </el-option>
    </custom-select>

    <script>
        export default {
            data() {
                return {
                    options: [{
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
                    }],
                    selectValue: ''
                }
            }
        }
    </script>
</div>

```
:::

<script>
    export default {
        data() {
            return {
                options: [{
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
                }],
                selectValue: ''
            };
        }   
    }
</script>