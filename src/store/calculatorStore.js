import { defineStore } from "pinia";

export const useCalculatorStore = defineStore("calculator", {
  state: () => ({
    currentInput: "",
    result: "",
    history: [],
  }),
  actions: {
    append(value) {
      this.currentInput += value;
    },
    clear() {
      this.currentInput = "";
    },
    calculate() {
      try {
        this.result = eval(this.currentInput).toString();
        this.history.unshift(`${this.currentInput} = ${this.result}`);
      } catch (err) {
        this.result = "Error";
      }
    },
    clearHistory() {
      this.history = [];
    },
  },
});
