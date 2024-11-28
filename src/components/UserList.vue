<template>
  <div>
    <h2>Lista de Usuarios</h2>
    <ul>
      <li v-for="user in users" :key="user.id">
        <span>{{ user.name }} - {{ user.email }}</span>
        <button @click="removeUser(user.id)">Eliminar</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    users() {
      return this.$store.getters.users;
    }
  },
  methods: {
    removeUser(id) {
      this.$store.dispatch('deleteUser', id);
    }
  },
  created() {
    this.$store.dispatch("fetchUsers");
  },
};
</script>
