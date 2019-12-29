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
    <custom-switch v-model="value" active-text="是" inactive-text="否" :isInnerText="true">
    </custom-switch>
</div>

::: demo

```html
<div>
    <custom-switch v-model="value">
    </custom-switch>

    <script>
        export default {
            data() {
                return {
                    value: ''
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
                value: ''
            };
        }   
    }
</script>