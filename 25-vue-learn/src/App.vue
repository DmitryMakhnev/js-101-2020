<template>
  <Add
    @add-new="addNew"
  />
  <TodoList
    :todos="visibleTodos"
    @delete-todo="removeTodo"
  />
  <ActionsBar
    :undone-count="undoneCount"
    :active-filter="activeFilter"
    :filters="filters"
    @filter-changed="changeFilter"
    @mark-all-as-done="markAllAsDone"
  />
</template>

<script>
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ActionsBar from './components/ActionsBar';

let idsCounter = 0;

const filters = {
  All: 'All',
  Undone: 'Undone',
  Done: 'Done',
};

export default {
  name: 'App',
  components: {
    Add: AddTodo,
    TodoList,
    ActionsBar
  },
  data() {
    return {
      activeFilter: filters.All,
      filters: Object.values(filters),
      todos: [],
    }
  },
  computed: {
    visibleTodos() {
      return this.todos.filter(todo => {
        switch (this.activeFilter) {
          case filters.All:
            return true;
          case filters.Undone:
            return !todo.isDone;
          case filters.Done:
            return todo.isDone;
        }
      });
    },
    undoneCount() {
      return this.todos.reduce(
        (result, todo) => result + (todo.isDone ? 0 : 1),
        0
      );
    }
  },
  methods: {
    addNew({ text }) {
      this.todos.push({
        id: `todo_${idsCounter++}`,
        text,
        isDone: false,
      });
    },
    removeTodo({ id }) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    changeFilter({ filter }) {
      this.activeFilter = filter;
    },
    markAllAsDone(){
      this.todos.forEach(todo => {
        todo.isDone = true;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
