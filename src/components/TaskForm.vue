<script setup>
import { useTaskStore } from '../stores/TaskStore.ts'
import { ref } from 'vue'
const store = useTaskStore()
const { addTask, tasks } = store

const newTask = ref('')

const handleSubmit = () => {
  if (newTask.value.length > 0) {
    const data = {
      title: newTask.value,
      isFav: false
    }
    if (data) {
      console.log(data, 'data===>')
      addTask(data)
      newTask.value = ''
    }
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to.... " v-model="newTask" />
    <button type="submit">Add Task</button>
  </form>
</template>

<style lang="scss" scoped></style>
