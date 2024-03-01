import { defineStore } from 'pinia'

export interface Task {
  id: number
  title: string
  isFav: boolean
}

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [] as Task[],
    isLoading: false
  }),

  getters: {
    favs: (state): Task[] => {
      return state.tasks.filter((task: Task) => task.isFav)
    },
    favCounts(state) {
      return state.tasks.reduce((p, c) => {
        return c.isFav ? ++p : p
      }, 0)
    },
    totalCount(state) {
      return state.tasks.length
    }
  },

  actions: {
    async getTasks() {
      this.isLoading = true
      const res = await fetch('http://localhost:3000/tasks')
      const data = await res.json()
      this.tasks = data
      this.isLoading = false
      console.log(data, 'data fetch')
    },

    async addTask(task: Task) {
      console.log(task, 'aff dda')
      const res = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        body: JSON.stringify(task),
        headers: { 'Content-Type': 'application/json' } // Corrected headers
      })
      if (res.error) {
        console.log(ers.error)
      } else {
        this.getTasks()
      }
    },

    async addFav(id: number) {
      const task = this.tasks.find((t) => t.id == id)
      console.log(task.isFav, 'task.isFav')

      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'PATCH',
        body: JSON.stringify({ isFav: !task.isFav }),
        headers: { 'Content-Type': 'application/json' }
      })
      if (res.error) {
        console.log(ers.error)
      } else {
        this.getTasks()
      }
    },

    async deleteTask(id: number) {
      const res = await fetch('http://localhost:3000/tasks/' + id, {
        method: 'DELETE'
      })
      console.log(res)

      if (res.error) {
        console.log(ers.error)
      } else {
        this.getTasks()
      }
    }
  }
})
