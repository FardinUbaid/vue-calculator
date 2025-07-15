import { defineStore } from "pinia";

export const useHistoryStore = defineStore("historyStore", {
  state: () => ({
    history: [],
  }),
  getters: {
    allHistory() {
      return this.history;
    },
  },
  actions: {
    addToHistory(expression, result) {
      this.history.unshift({ expression, result, timestamp: new Date() });
    },
    resetHistory() {
      this.history = [];
    },
  },
});
