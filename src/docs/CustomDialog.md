<style lang="scss" scoped>
  .demo-block {
    div {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .custom-input-container {
        /* display: inline-block;
        margin: 0 10px 20px 0; */
    }
  }
</style>

# CustomInput 输入框

---

### 基础用法

<div class="demo-block">
    <div>
        <custom-button type="text" @click="openDialog">点击打开对话框</custom-button>
        <custom-dialog2 :visible="visibleShow" @close="closeDialog" width="960px" title="自定义标题"></custom-dialog2>
    </div>
</div>

::: demo

```html
<div>
    <custom-button type="text" @click="openDialog">点击打开对话框</custom-button>
    <custom-dialog :visible="visibleShow" @close="closeDialog" width="960px" title="自定义标题"></custom-dialog>

    <script>
        export default {
            data() {
                return {
                    visibleShow: false
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
                visibleShow: false
            };
        },
        methods: {
            openDialog() {
                this.visibleShow = true;
            },
            closeDialog() {
                this.visibleShow = false;
            }
        } 
    }
</script>