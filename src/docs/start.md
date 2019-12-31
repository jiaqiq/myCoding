# 快速开始 o(*￣︶￣*)o

----

### 全局组件使用

可以在项目的入口文件中引入所有组件或所需组件

```js
import CustomUI from 'custom-ui' // 引入组件库
import 'custom-ui/packages/theme-set/lib/index.css' // 引入样式库

Vue.use(CustomUI)
```

### 单个组件按需使用

可以局部注册所需的组件，适用于与其他框架组合使用的场景

```js
import { CustomInput } from 'custom-ui'

export default {
  components: {
    CustomInput
  }
}
```

在模板中，用 `<custom-input></custom-input>` 自定义标签的方式使用组件

```html
<template>
  <custom-input>这是一个输入框</custom-input>
</template>
```

### 自定义主题

`UI` 基于stylus,可修改 `hai-ui/packages/theme-set/common/var.css` 文件自定义主题

`UI` 亦可用sass编写样式
