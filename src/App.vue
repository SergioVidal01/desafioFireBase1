<template>
  <div class="container">
    <h1>CRUD con Vue.js y Firebase</h1>
    <AddUser />
    <UserList />
  </div>
</template>

<script>
import AddUser from "./components/AddUser.vue";
import UserList from "./components/UserList.vue";

export default {
  components: {
    AddUser,
    UserList,
  },
};
</script>

<style>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Ocupa toda la altura de la pantalla */
    text-align: center;
  }

  button {
    margin: 10px;
    padding: 10px 20px;
    background-color: #4CAF50; /* Verde */
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049; /* Verde oscuro */
  }

  h1 {
    color: #333; /* Gris oscuro */
    margin-bottom: 20px;
  }

  input {
    margin: 5px;
    padding: 5px;
    border: 2px solid #4CAF50;
    border-radius: 5px;
  }
</style>
