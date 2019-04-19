<template>
    <div id="app">
        <todo-input></todo-input>
        <router-view></router-view>
        <todo-menu></todo-menu>
    </div>
</template>

<script>
import TodoInput from './components/TodoInput'
import TodoMenu from './components/TodoMenu'
export default {
  components: {
    'todo-input': TodoInput,
    'todo-menu': TodoMenu
  }
}
</script>

<style>
  [v-cloak]{
      display: none;
  }
  body{
      background-color: #f5f5f5;
  }
  h1{
      width: 100%;
      font-size: 100px;
      font-weight: 100;
      text-align: center;
      color: rgba(175, 47, 47, 0.15);
  }
  .select{
      /* content: "❯"; */
      display: block;
      transform: rotate(90deg);
  }
  .todo-inputgroup{
      width: 40%;
      margin: auto;
  }
  .new-span{
      color: #99999f;
      background-color: #fff;
  }
  .selectall{
      color: #000;
  }
  ul,li{
      margin: 0;
      padding: 0;
      list-style: none;
  }
  ul,footer{
      width: 40%;
      margin: auto
  }
  footer{
      background-color: #fff;
      padding: 10px;
      color: #777;
  }
  ul{
      background-color: #fff;
      font-size: 24px;
  }
  li{
      border-bottom: 1px solid #ccc;
      padding: 10px 20px;
  }
  .btn-group{
      margin: 0 65px;
  }
  .btn-group .btn,a.clear{
      
      color: #777;
      cursor: pointer;
  }
  footer.tshow{
      display: block;
  }
  a.tshow{
      display: inline;
  }
  .remove{
      color: #af5b5e;
      float: right;
      cursor: pointer;
      background-color: #fff;
      border: 0;
  }
  .todo-title{
      padding: 0 20px;
  }
  .todo-uncomtitle{
      padding: 0 20px;
      color: #ccc;
  }
  .selected{
      color: #000;
  }
  .titlespan{
      width: 70%;
      display: inline-block;
  }
  .edit{
      margin: 0 20px;
      display: none;
      /* display: inline-block; */
      width: 70%;
      height: 34px;
  }
  .dbedit{
      display: inline-block;
  }
  .thide{
      display: none;
  }
</style>
