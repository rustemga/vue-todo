<template>
  <div>
    <h2>Todo</h2>
    <router-link to="/">Home</router-link>
    <AddTodo
        @add-todo="addTodo"
    />
    <select v-model="filter">
      <option value="all">All</option>
      <option value="completed">Completed</option>
      <option value="not-completed">Not completed</option>
    </select>
    <hr>
    <Loader v-if="loading"/>
    <TodoList
        v-else-if="filteredTodos.length"
        v-bind:todos="filteredTodos"
        @remove-todo="removeTodo"
    /><!--@ заменяет v-on-->
    <p v-else>No todos :(</p>
  </div>
</template>

<script>
import TodoList from "../components/TodoList"
import AddTodo from "../components/AddTodo"
import Loader from "../components/Loader"
export default {
  name: 'App',
  data(){
    return{
      todos: [
        //вместо наших данных вставляюся данные из json
        //   {id:1, title: "Купить хлеб", completed: false},
        //   {id:2, title: "Купить молоко", completed: false},
        //   {id:3, title: "Купить масло", completed: false},
      ],
      loading: true,
      filter: 'all'
    }
  },
  components: {
    TodoList, AddTodo, Loader
  },
  mounted() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          setTimeout(() => {//установил задержку 1 секунда чтобы было видно loader
                this.todos = json
                this.loading = false
              }, 1000
          )
        })
  },
  watch:{//поле слежки
    filter(value){//следит за состоянием переменной filter
      console.log(value)
    }
  },
  computed:{// в этом поле можно заводить любые функции
    filteredTodos() {
      if(this.filter === 'all'){
        return this.todos
      }
      if(this.filter === 'completed'){
        return this.todos.filter(t => t.completed)
      }
      if(this.filter === 'not-completed'){
        return this.todos.filter(t => !t.completed)
      }
      return this.todos
    }
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
<style scoped>
select{
  width: 300px;
  margin-top: 1rem;
}
</style>
