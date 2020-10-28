<template>
  <div>
    <ul>
      <li>
        <TodoItem
        v-for="todo in todos"
        v-bind:key="todo"
        v-bind:todo = "todo"
        />
      </li>
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
    props:[
        'todos'
    ]
  }
</script>