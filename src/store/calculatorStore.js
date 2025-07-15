import { defineStore } from "pinia";

export const useCalculatorStore = defineStore("calculatorStore", {
  state: () => ({
    currentInput: "",
    result: "",
  }),
  getters: {
    display() {
      return this.result || this.currentInput || "0";
    },
  },
  actions: {
    append(char) {
      this.currentInput += char;
    },
    clear() {
      this.currentInput = "";
      this.result = "";
    },
    calculate() {
      try {
        this.result = eval(this.currentInput).toString();
        this.currentInput = "";
      } catch (e) {
        this.result = "Error";
      }
    },
  },
});
