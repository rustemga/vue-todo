<template>
  <li>
    <span v-bind:class="{done: todo.completed}"><!--включает класс .done если todo.completed = true -->
      <input type="checkbox" v-on:change="todo.completed = !todo.completed"><!--изменяем значение todo.completed в зависимости от состояния чекбокса-->
      <strong>{{ index + 1 }}</strong>
      {{ todo.title }}
    </span>
    <button class="rm"
            v-on:click="$emit('remove-todo', todo.id)"
    >&times;</button><!--вызываем функцию $emit() в которую передаем событие remove-todo и передаем значение todo.id-->
  </li>
</template>

<script>
export default {
  props: {
    //свойство с проверкой
    todo: {
      type: Object,
      required: true
    },
    index: Number
  }
}
</script>
<style scoped>
li {
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: .5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: orangered;
  color: white;
  border-radius: 50%;
  font-weight: bold;
  border: none;
}

.done {
  text-decoration: line-through;
}

input {
  margin-right: 1rem;
}
</style>