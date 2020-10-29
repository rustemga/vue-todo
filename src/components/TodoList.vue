<template>
  <div>
    <ul>
      <TodoItem
          v-for="(todo, i) in todos"
          v-bind:key="todo"
          v-bind:index="i"
          v-bind:todo="todo"
          v-on:remove-todo="removeTodo"
      /><!-- включаем прослушку события remove-todo и назначаем выполнение метода removeTodo-->
    </ul>
  </div>
</template>
<script>
import TodoItem from "@/components/TodoItem";

export default {
  components: {TodoItem},
  comments: {
    TodoItem
  },
  props: [
    'todos'
  ],
  methods: {
    removeTodo(id) {
      this.$emit('remove-todo', id)
    }
  }
}
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>