<style lang="scss" scoped>
  .demo-block {
    div {
      &:last-child {
        margin-bottom: 0;
      }
    }
    .custom-button-container {
        display: inline-block;
        margin: 0 10px 20px 0;
    }
  }
</style>

# Button 按钮

----
采用`element-ui`中的样式变量，简化功能，熟悉 css \(^o^)/~。

### 基础用法

- 基础的按钮用法,使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

<div class="demo-block">
  <div>
    <custom-button>默认按钮</custom-button>
    <custom-button type="primary">主要按钮</custom-button>
    <custom-button type="success">成功按钮</custom-button>
    <custom-button type="info">信息按钮</custom-button>
    <custom-button type="warning">警告按钮</custom-button>
    <custom-button type="danger">危险按钮</custom-button>
  </div>
  
  <div>
    <custom-button plain>朴素按钮</custom-button>
    <custom-button type="primary" plain>主要按钮</custom-button>
    <custom-button type="success" plain>成功按钮</custom-button>
    <custom-button type="info" plain>信息按钮</custom-button>
    <custom-button type="warning" plain>警告按钮</custom-button>
    <custom-button type="danger" plain>危险按钮</custom-button>
  </div>
  
  <div>
    <custom-button round>圆角按钮</custom-button>
    <custom-button type="primary" round>主要按钮</custom-button>
    <custom-button type="success" round>成功按钮</custom-button>
    <custom-button type="info" round>信息按钮</custom-button>
    <custom-button type="warning" round>警告按钮</custom-button>
    <custom-button type="danger" round>危险按钮</custom-button>
  </div>
  
  <div>
    <custom-button icon="h-icon-app" circle></custom-button>
    <custom-button type="primary" icon="h-icon-sql" circle></custom-button>
    <custom-button type="success" icon="h-icon-text" circle></custom-button>
    <custom-button type="info" icon="h-icon-addition" circle></custom-button>
    <custom-button type="warning" icon="h-icon-addition" circle></custom-button>
    <custom-button type="danger" icon="h-icon-addition" circle></custom-button>
  </div>
</div>

:::demo



```html
  <div>
    <custom-button>默认按钮</custom-button>
    <custom-button type="primary">主要按钮</custom-button>
    <custom-button type="success">成功按钮</custom-button>
    <custom-button type="info">信息按钮</custom-button>
    <custom-button type="warning">警告按钮</custom-button>
    <custom-button type="danger">危险按钮</custom-button>
  </div>
  
  <div>
    <custom-button plain>朴素按钮</custom-button>
    <custom-button type="primary" plain>主要按钮</custom-button>
    <custom-button type="success" plain>成功按钮</custom-button>
    <custom-button type="info" plain>信息按钮</custom-button>
    <custom-button type="warning" plain>警告按钮</custom-button>
    <custom-button type="danger" plain>危险按钮</custom-button>
  </div>
  
  <div>
    <custom-button round>圆角按钮</custom-button>
    <custom-button type="primary" round>主要按钮</custom-button>
    <custom-button type="success" round>成功按钮</custom-button>
    <custom-button type="info" round>信息按钮</custom-button>
    <custom-button type="warning" round>警告按钮</custom-button>
    <custom-button type="danger" round>危险按钮</custom-button>
  </div>
  
  <div>
    <custom-button icon="h-icon-app" circle></custom-button>
    <custom-button type="primary" icon="h-icon-sql" circle></custom-button>
    <custom-button type="success" icon="h-icon-text" circle></custom-button>
    <custom-button type="info" icon="h-icon-addition" circle></custom-button>
    <custom-button type="warning" icon="h-icon-addition" circle></custom-button>
    <custom-button type="danger" icon="h-icon-addition" circle></custom-button>
  </div>

```
:::

### 禁用状态

- 按钮不可用状态。
<div class="demo-block">
   <div>
     <custom-button disabled>默认按钮</custom-button>
     <custom-button type="primary" disabled>主要按钮</custom-button>
     <custom-button type="success" disabled>成功按钮</custom-button>
     <custom-button type="info" disabled>信息按钮</custom-button>
     <custom-button type="warning" disabled>警告按钮</custom-button>
     <custom-button type="danger" disabled>危险按钮</custom-button>
   </div>
   
   <div>
     <custom-button plain disabled>朴素按钮</custom-button>
     <custom-button type="primary" plain disabled>主要按钮</custom-button>
     <custom-button type="success" plain disabled>成功按钮</custom-button>
     <custom-button type="info" plain disabled>信息按钮</custom-button>
     <custom-button type="warning" plain disabled>警告按钮</custom-button>
     <custom-button type="danger" plain disabled>危险按钮</custom-button>
   </div>
</div>

:::demo

```html
<div>
  <custom-button disabled>默认按钮</custom-button>
  <custom-button type="primary" disabled>主要按钮</custom-button>
  <custom-button type="success" disabled>成功按钮</custom-button>
  <custom-button type="info" disabled>信息按钮</custom-button>
  <custom-button type="warning" disabled>警告按钮</custom-button>
  <custom-button type="danger" disabled>危险按钮</custom-button>
</div>

<div>
  <custom-button plain disabled>朴素按钮</custom-button>
  <custom-button type="primary" plain disabled>主要按钮</custom-button>
  <custom-button type="success" plain disabled>成功按钮</custom-button>
  <custom-button type="info" plain disabled>信息按钮</custom-button>
  <custom-button type="warning" plain disabled>警告按钮</custom-button>
  <custom-button type="danger" plain disabled>危险按钮</custom-button>
</div>
```
:::

### 文字按钮

没有边框和背景色的按钮。

<div class="demo-block">
  <custom-button type="text">文字按钮</custom-button>
  <custom-button type="text" disabled>文字按钮</custom-button>
</div>

:::demo
```html
<custom-button type="text">文字按钮</custom-button>
<custom-button type="text" disabled>文字按钮</custom-button>
```
:::

### 图标按钮

- 带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。
- 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

<div class="demo-block">
  <custom-button type="primary" icon="h-icon-addition"></custom-button>
  <custom-button type="primary" icon="h-icon-addition"></custom-button>
  <custom-button type="primary" icon="h-icon-addition"></custom-button>
  <custom-button type="primary" icon="h-icon-addition">搜索</custom-button>
  <custom-button type="primary">上传<i class="h-icon-addition"></i></custom-button>
</div>

:::demo 
```html
<custom-button type="primary" icon="h-icon-addition"></custom-button>
<custom-button type="primary" icon="h-icon-addition"></custom-button>
<custom-button type="primary" icon="h-icon-addition"></custom-button>
<custom-button type="primary" icon="h-icon-addition">搜索</custom-button>
<custom-button type="primary">上传<i class="h-icon-addition"></i></custom-button>
```
:::


### 不同尺寸

- Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

<div class="demo-block">
  <div>
    <custom-button>默认按钮</custom-button>
    <custom-button size="medium">中等按钮</custom-button>
    <custom-button size="small">小型按钮</custom-button>
    <custom-button size="mini">超小按钮</custom-button>
  </div>
  <div>
    <custom-button round>默认按钮</custom-button>
    <custom-button size="medium" round>中等按钮</custom-button>
    <custom-button size="small" round>小型按钮</custom-button>
    <custom-button size="mini" round>超小按钮</custom-button>
  </div>
</div>

:::demo 
```html
<div>
  <custom-button>默认按钮</custom-button>
  <custom-button size="medium">中等按钮</custom-button>
  <custom-button size="small">小型按钮</custom-button>
  <custom-button size="mini">超小按钮</custom-button>
</div>
<div>
  <custom-button round>默认按钮</custom-button>
  <custom-button size="medium" round>中等按钮</custom-button>
  <custom-button size="small" round>小型按钮</custom-button>
  <custom-button size="mini" round>超小按钮</custom-button>
</div>
```
:::

### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
