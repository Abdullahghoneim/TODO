import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: "Todo App With Vuex",
    links: [
      "Learn Vue.js",
      "learn Vuex State Management",
      "watch forrest gump Movie"
    ]
  },
  getters: {
    linkesLength: state => {
      return state.links.length;
    }
  },
  mutations: {
    ADD_LINK: (state, link) => {
      return state.links.push(link);
    },
    REMOVE_LINK: (state, link) => {
      return state.links.splice(link, 1);
    },
    REMOVE_ALL: state => {
      return (state.links = []);
    }
  },
  actions: {
    removeLink: (context, link) => {
      context.commit("REMOVE_LINK", link);
    },
    removeAll: context => {
      context.commit("REMOVE_ALL");
    }
  }
});
