<template>
  <form @submit="submit">
    <input type="text" v-model="newTodoText" />
    <button type="submit">Add new todo</button>
  </form>
</template>

<script>
export default {
  name: 'AddTodo',

  data() {
    return {
      newTodoText: '',
    };
  },

  methods: {
    submit(e) {
      e.preventDefault();
      const text = this.newTodoText.trim();
      if (text) {
        this.newTodoText = '';
        this.$emit('addNew', { text });
      }
    }
  }
}
</script>

<style scoped>

</style>
