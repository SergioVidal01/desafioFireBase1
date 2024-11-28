<template>
    <form @submit.prevent="handleSubmit">
      <div>
        <label>Nombre:</label>
        <input v-model="name" type="text" required />
      </div>
      <div>
        <label>Correo:</label>
        <input v-model="email" type="email" required />
      </div>
      <button type="submit">Agregar Usuario</button>
    </form>
  </template>
  
  <script>
  import { mapActions } from "vuex";
  
  export default {
    data() {
      return {
        name: "",
        email: "",
      };
    },
    methods: {
      ...mapActions(["createUser"]),
      handleSubmit() {
        this.createUser({ name: this.name, email: this.email });
        this.name = "";
        this.email = "";
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin: 5px;
    border-radius: 5px;
  }
  </style>
  