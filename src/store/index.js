import { createStore } from 'vuex';
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";

export default createStore({
  state() {
    return {
        users: [],
    }
  },
  mutations: {
    setUsers(state, users) {
      state.users = users;
    },
    addUser(state, user) {
      state.users.push(user);
    },
    deleteUser(state, id) {
      state.users = state.users.filter(user => user.id !== id);
    },
  },
  actions: {
    async fetchUsers({ commit }) {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      commit("setUsers", users);
    },
    async createUser({ commit }, user) {
      const docRef = await addDoc(collection(db, "users"), user);
      commit("addUser", { id: docRef.id, ...user });
    },
    async deleteUser({ commit }, id) {
      await deleteDoc(doc(db, "users", id));
      commit("deleteUser", id);
    },
  },
  getters: {
    users: state => state.users,
  },
});