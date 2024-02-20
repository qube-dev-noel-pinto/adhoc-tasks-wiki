<template>
  <header>
    <title>Adhoc Tasks Wiki</title>
  </header>
  <div>
    <h1>Welcome to Task Logger</h1>
    <div>
      <input type="text" v-model="newTask" placeholder="Enter a new task">
      <button @click="addTask">Add Task</button>
    </div>
    <div v-if="tasks.length > 0">
      <h2>Tasks:</h2>
      <ul>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task }}
          <button @click="removeTask(index)">Remove</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>No tasks yet. Start adding tasks!</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    addTask() {
      if (this.newTask.trim() !== '') {
        this.tasks.push(this.newTask.trim());
        this.newTask = '';
      }
    },
    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>

</style>