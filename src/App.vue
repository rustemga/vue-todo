<template>
  <div id="app">
    <h1>Todo</h1>
    <AddTodo
    @add-todo="addTodo"/>
    <hr>
    <TodoList
      v-bind:todos="todos"
      @remove-todo="removeTodo"
    /><!--@ заменяет v-on-->
  </div>
</template>

<script>
import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"
export default {
  name: 'App',
  data(){
    return{
      todos: [
        {id:1, title: "Купить хлеб", completed: false},
        {id:2, title: "Купить молоко", completed: false},
        {id:3, title: "Купить масло", completed: false},
      ]
    }
  },
  components: {
    TodoList, AddTodo
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json))
  },
  methods: {
    removeTodo(id){
      this.todos = this.todos.filter(t => t.id !== id)
    },
    addTodo(newTodo){
      this.todos.push(newTodo)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
