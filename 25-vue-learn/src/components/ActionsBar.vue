<template>
  <div>
    <div>
      {{ undoneCount }} items left
    </div>

    <ul>
      <li v-for="filter of filters" :key="filter">
        <label>
          <input
            type="radio"
            :checked="filter === activeFilter"
            @change="$emit('filterChanged', { filter })"
          />
          {{ filter }}
        </label>
      </li>
    </ul>

    <button @click="$emit('markAllAsDone')">
      Mark all as ready
    </button>
  </div>
</template>

<script>
export default {
  name: 'ActionsBar',
  props: {
    filters: Array,
    activeFilter: String,
    undoneCount: Number,
  },
}
</script>

<style scoped>

</style>
