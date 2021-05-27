<template>
  <ul>
    <li v-for="todo of todos" :key="todo.id">
      <input type="checkbox" v-model="todo.isDone" />
      {{ todo.text }}
      <button @click="$emit('deleteTodo', { id: todo.id })">
        Delete
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: Array,
  }
}
</script>

<style scoped>

</style>
