# vue-insert-directive
A directive to insert element for vue.js(2.x).
一款支持在任意标签上插入<input />或 <textarea />元素的 Vue 指令.

### Demo:

  [🔗https://monsteranan.github.io/vue-insert-directive](https://monsteranan.github.io/vue-insert-directive)

### Import
```js
import InsertDirective from 'vue-insert-derective' // Es6 module

```
###  Use/使用:

```javascript

<template>
  <span v-input="{value: () => value, input:=>value = v }" tabindex="0" >{{value}}</span>
</template>


<script>
import InsertDirective from "../src/vue-insert-directive";

export default {
    name:'...',
    directives: {
      input: InsertDirective,
    },
}
</script>
<style>
@import url("../src/vue-insert-directive.css");

</style>

```


## Install
```
yarn
or
npm install
```

### Dev
```
yarn dev
or
npm run dev
```



