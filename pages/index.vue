<template>
  <header>
    <title>Adhoc Tasks Wiki</title>
  </header>
  <div class="main-content">
    <h1 class="text-3xl font-bold">Adhoc Tasks Wiki</h1>
    <hr class="my-4">
    <div class="flex justify-between items-center">
      <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add New Task</button>
      <button @click="openLoginModal" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Login</button>
    </div>
    <br>
    <!-- Add this modal -->
    <div id="loginModal" class="modal" v-show="isLoginModalOpen">
      <div class="modal-content">
        <form @submit.prevent="login">
          <label for="email" class="block mb-1">Email:</label>
          <input type="email" v-model="email" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter your email">
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Continue</button>
        </form>
      </div>
    </div>
    <div id="taskModal" class="modal" v-show="isModalOpen">
      <div class="modal-content">
        <br>
        <form @submit.prevent="submitTask">
          <label for="taskName" class="block mb-1">Task:</label>
          <input type="text" v-model="newTask.taskName" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter task name">
          <label for="givenBy" class="block mb-1">Given by:</label>
          <input type="text" v-model="newTask.givenBy" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter name">
          <label for="givenTo" class="block mb-1">Given to:</label>
          <input type="text" v-model="newTask.givenTo" class="w-full p-2 border border-gray-300 rounded mb-4" placeholder="Enter name">
          <label for="givenDate" class="block mb-1">Date:</label>
          <input type="date" v-model="newTask.givenDate" class="w-full p-2 border border-gray-300 rounded mb-4">
          <label for="status" class="block mb-1">Status:</label>
          <select v-model="newTask.status" class="w-full p-2 border border-gray-300 rounded mb-4">
            <option value="pending">Pending</option>
            <option value="done">Done</option>
            <option value="work-in-progress">Work in Progress</option>
            <option value="on-hold">On Hold</option>
          </select>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Submit</button>  &nbsp;
          <button @click="closeModal" class="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Close</button>
        </form>
      </div>
    </div>
    <hr class="my-4">
    <h3 class="text-lg font-semibold">Adhoc Tasks Given by the Product Team During the Sprint:</h3>
    <table class="w-full border-collapse border border-gray-400 mt-4">
      <thead>
        <tr class="bg-gray-200">
          <th class="border border-gray-400 px-4 py-2">Task</th>
          <th class="border border-gray-400 px-4 py-2">Given by</th>
          <th class="border border-gray-400 px-4 py-2">Given to</th>
          <th class="border border-gray-400 px-4 py-2">Given date</th>
          <th class="border border-gray-400 px-4 py-2">Status</th>
          <th class="border border-gray-400 px-4 py-2">Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(task, index) in tasks" :key="index">
          <td class="border border-gray-400 px-4 py-2">{{ task.taskName }}</td>
          <td class="border border-gray-400 px-4 py-2">{{ task.givenBy }}</td>
          <td class="border border-gray-400 px-4 py-2">{{ task.givenTo }}</td>
          <td class="border border-gray-400 px-4 py-2">{{ task.givenDate }}</td>
          <td class="border border-gray-400 px-4 py-2" style="padding-top: 20px;">
          <select v-model="task.status" class="w-full p-2 border border-gray-300 rounded mb-4">
            <option value="pending">Pending</option>
            <option value="done">Done</option>
            <option value="work-in-progress">Work in Progress</option>
            <option value="on-hold">On Hold</option>
          </select>
        </td>
          <td class="border border-gray-400 px-4 py-2">
            <button @click="removeTask(index)" class="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600" >Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <br>
    <hr class="my-4">
    <h3 class="text-lg font-semibold">How to use:</h3>
    <ol class="list-decimal list-inside ml-6">
      <li>Click on the "Add new task" button to add a new task.</li>
      <li>Fill in the details of the task in the form.</li>
      <li>Click on the "Submit" button to add the task to the table.</li>
    </ol>
    <hr class="my-4">
    <span class="text-blue-500">Created by: Noel P.</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isModalOpen: false,
      isLoginModalOpen: false,
      email: '',
      newTask: {
        taskName: '',
        givenBy: '',
        givenTo: '',
        givenDate: new Date().toISOString().substr(0, 10),
        status: 'pending'
      },
      tasks: []
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },

    closeModal() {
      this.isModalOpen = false;
    },

    // Add these methods
    openLoginModal() {
      this.isLoginModalOpen = true;
    },

    login() {
      // Validate the email here if necessary
      this.isLoginModalOpen = false;
    },

    submitTask() {
      this.tasks.push({...this.newTask});
      this.newTask = {
        taskName: '',
        givenBy: '',
        givenTo: '',
        givenDate: new Date().toISOString().substr(0, 10),
        status: 'pending'
      };
      this.isModalOpen = false;
    },

    removeTask(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style lang="scss"> 
  .main-content{
    padding: 20px;
  }
</style>