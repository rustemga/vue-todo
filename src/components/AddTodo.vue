<template>
  <form @submit.prevent="onSubmit"><!--prevent делается для того чтобы страничка не перезагружалась при отправке формы-->
    <input type="text" v-model="title"><!--v-model записывает значение в поле data в объект title-->
    <button>Create</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      title:''
    }
  },
  methods: {
    onSubmit(){
      console.log(this.title)
      if(this.title.trim()){
        const newTodo = {
          id: Date.now(),
          title: this.title,
          completed: false
        }
        this.$emit('add-todo', newTodo)
      }
      this.title = ''
    }
  }
}
</script>

<style scoped>
form{
  display: flex;
  justify-content: center;
}
input{
  width: 400px;
}
</style>