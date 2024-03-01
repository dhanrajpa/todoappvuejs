<script setup>
import { useTaskStore } from '../stores/TaskStore.ts'

defineProps(['task'])

const store = useTaskStore()
const { addFav, deleteTask } = store

const handleAddFav = (id) => {
  addFav(id)
}
const handleDelete = (id) => {
  id && deleteTask(id)
}
</script>

<template>
  <div class="task">
    <h3>
      {{ task?.title }}
    </h3>
    <div class="icons">
      <i class="material-icons" @click="handleDelete(task.id)">delete</i>
      <i class="material-icons" @click="handleAddFav(task.id)" :class="{ fav: task?.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>
