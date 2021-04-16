import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [],
    userInput: [],
  },
  mutations: {
    setUsers: (state, payload) => {
      state.users = payload;
    },
    setuserInput: (state, payload) => {
      state.userInput = payload;
    },
  },
  actions: {
    setUsersAction: (state, payload) => {
      state.commit('setUsers', payload);
    },
    setuserInputAction: (state, payload) => {
      state.commit('setuserInput', payload);
    }
  },
  modules: {},
  getters: {
    listOfUsers: (state) => state.users,
    inputOfForm: (state) => state.userInput,
  },
});