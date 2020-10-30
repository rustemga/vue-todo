<template>
  <li>
    <span v-bind:class="{done: todo.completed}"><!--включает класс .done если todo.completed = true -->
      <input type="checkbox"
             v-on:change="todo.completed = !todo.completed"
             v-bind:checked="todo.completed === true"
      ><!--изменяем значение todo.completed в зависимости от состояния чекбокса-->
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | uppercase }}
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
  },
  filters:{//Испльзуется ждя трансформации данных
    uppercase(value){//фильтр метод исполь зуется в шаблоне через знак "|"
      return value.charAt(0).toUpperCase()+value.slice(1)
    }
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