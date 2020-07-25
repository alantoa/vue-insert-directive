<template>
  <div>
    <h2>Example:</h2>
    <h4>1. Support for arbitrary tags (default:span)/ 支持任意标签元素(默认元素为span)</h4>

    <div class="item">
      <span class="label">{{data.label.fieldName}}:</span>
      <label
        class="value"
        v-input="{value: () => data.label.fieldValue, input: v => data.label.fieldValue = v,elType:'textarea',nodeName:'LABEL' }"
        tabindex="0"
      >{{data.label.fieldValue}}</label>
    </div>

    <div class="item">
      <span class="label">{{data.span.fieldName}}:</span>
      <span
        class="value"
        v-input="{value: () => data.span.fieldValue, input: v => data.span.fieldValue = v,elType:'textarea' }"
        tabindex="0"
      >{{data.span.fieldValue}}</span>
    </div>
    <div class="item">
      <span class="label">{{data.div.fieldName}}:</span>
      <div
        class="value"
        v-input="{value: () => data.div.fieldValue, input: v => data.div.fieldValue = v,elType:'textarea',nodeName:'DIV' }"
        tabindex="0"
      >{{data.div.fieldValue}}</div>......
    </div>
    <br />
    <h4>2. Support for textarea & input (default: input)/ 支持插入textarea 和 input (默认标签为input)</h4>
    <div class="item">
      <span class="label">{{data.textarea.fieldName}}:</span>
      <span
        class="value"
        v-input="{value: () => data.textarea.fieldValue, input: v => data.textarea.fieldValue = v,elType:'textarea' }"
        tabindex="0"
      >{{data.textarea.fieldValue}}</span>
    </div>

    <div class="item">
      <span class="label">{{data.input.fieldName}}:</span>
      <span
        class="value"
        v-input="{value: () => data.input.fieldValue, input: v => data.input.fieldValue = v }"
        tabindex="0"
      >{{data.input.fieldValue}}</span>
    </div>
    <h4>3. Support for arbitrary event (default: focus event. so dom need add tabindex attribute)/ 支持任意dom事件(默认为focus事件.所以dom元素需要添加tabindex 属性)</h4>
    <div class="item">
      <span class="label">{{data.focus.fieldName}}:</span>
      <span
        class="value"
        v-input="{value: () => data.focus.fieldValue, input: v => data.focus.fieldValue = v }"
        tabindex="0"
      >{{data.focus.fieldValue}}</span>
    </div>

    <div class="item">
      <span class="label">{{data.click.fieldName}}:</span>
      <span
        class="value"
        v-input="{value: () => data.click.fieldValue, input: v => data.click.fieldValue = v,type:'click' }"
        tabindex="0"
      >{{data.click.fieldValue}}</span>
    </div>......
  </div>
</template>

<script>
const data = {
  label: {
    fieldName: "DOM_TAG: <label>",
    fieldValue: "I'm <label> Element,insert <textarea>",
  },
  span: {
    fieldName: "DOM_TAG: <span>",
    fieldValue: "I'm <span> Element,insert <textarea>",
  },
  div: {
    fieldName: "DOM_TAG: <div>",
    fieldValue: "I'm <div> Element,insert <textarea>",
  },
  textarea: {
    fieldName: "insert element: <textarea>",
    fieldValue: "insert <textarea>",
  },
  input: {
    fieldName: "insert element: <input>",
    fieldValue: "insert <input>",
  },
  focus: {
    fieldName: "default: focus event",
    fieldValue: "trigger event focus",
  },
  click: {
    fieldName: "click event",
    fieldValue: "trigger event click",
  },
};

import InsertDirective from "../src/index";

export default {
  name: "Example",
  directives: {
    input: InsertDirective,
  },
  data: () => ({
    data: data,
  }),
};
</script>

<style>
@import url("./v-insert-directive.css");
.item {
  padding: 5px 5px;
  border: 1px solid transparent;
  border-bottom: 1px dashed #eaeaea;
  transition-duration: 0.3s;
  cursor: pointer;
}
.item:hover,
.itemfocus,
.item:active {
  background-color: #eee;
}
.item.active {
  border: 1px solid #ddfade;
  background-color: #e9fcea;
}
.item .value {
  border: 1px solid #008eff;
  background-color: #fff;
}
.label {
  margin-right: 20px;
}
.value {
  color: #5a5d61;
  border: 1px solid transparent;
  width: 100%;
  padding: 0 5px;
  margin-bottom: 2px;
}
</style>