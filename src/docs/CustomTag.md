<style lang="scss" scoped>
  .demo-block {
    div {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .custom-tag-container {
        /* display: inline-block;
        margin: 0 10px 20px 0; */
    }
  }
</style>

# CustomTag 输入框

---

### 基础用法

<div class="demo-block">
    <div>
        <custom-Tag>自定义标签</custom-Tag>
    </div>
</div>

::: demo

```html
<div>
    <custom-Tag></custom-Tag>

    <script>
        export default {
            data() {
                return {
                    
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
                
            };
        }   
    }
</script>