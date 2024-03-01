<script setup>
import TaskDetails from './TaskDetails.vue'
import { useTaskStore } from '../stores/TaskStore.ts'
import { storeToRefs } from 'pinia'
defineProps(['filter'])

const store = useTaskStore()

const { tasks, favs, totalCount, favCounts, isLoading } = storeToRefs(store)

</script>
<template>
  <div>
    <div v-if="isLoading">
      <div class="loading">Loading tasks....</div>
    </div>
    <!--task list-->
    <div v-else>
      <div class="task-list" v-if="filter === 'all'">
        <p v-if="tasks.length > 0">You have {{ totalCount }} task left to do</p>
        <div v-for="task in tasks" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
      <div class="task-list" v-if="filter === 'favs'">
        <p v-if="favs.length > 0">You have {{ favCounts }} Fav task left to do</p>
        <div v-for="task in favs" :key="task.id">
          <TaskDetails :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
