<script setup>
import TaskForm from './components/TaskForm.vue'
import TaskList from '../src/components/TaskList.vue'
import { useTaskStore } from './stores/TaskStore.ts'
import { ref, onBeforeMount } from 'vue'

const store = useTaskStore()
onBeforeMount(async () => {
  await store.getTasks()
})
const filter = ref('all')
</script>

<template>
  <main>
    <header>
      <img src="./assets/logo.svg" alt="logo" />
      <h1>Penia task</h1>
    </header>
    <div class="new-task-form">
      <TaskForm />
    </div>
    <!----filter-->
    <nav class="filter">
      <button @click="filter = 'all'">all tasks</button>
      <button @click="filter = 'favs'">favs tasks</button>
    </nav>
    <div class="tasks">
      <TaskList :filer="filter" />
    </div>
  </main>
</template>

<style>
.new-task-form {
  margin: 10px auto;
}
</style>
