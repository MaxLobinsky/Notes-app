import { createStore } from "vuex";

export const store = createStore({
  state: {
    notes: [
      {
        title: "Здесь может быть Ваша заметка",
        tags: ["работа"],
      },
    ],
    tags: ["дом", "работа", "путешествия"],
  },
  mutations: {
    getLocalNotes: (state) => {
      const localNotes = localStorage.getItem("notes");
      if (localNotes) state.notes = JSON.parse(localNotes);
    },
    addNote: (state, note) => {
      state.notes.push(note);
    },
    removeNote: (state, index) => {
      state.notes.splice(index, 1);
    },
  },
  actions: {
    setLocalNotes () {
      
    },
    getLocalNotes ({ commit }) {
      commit("getLocalNotes")
    },
    addNote({ commit }, note) {
      commit("addNote", note);
    },
    removeNote({ commit }, index) {
      commit("removeNote", index);
    },
  },
  getters: {
    getNotes(state) {
      return state.notes
    },
    getTags(state) {
      return state.tags;
    },
  },
});
