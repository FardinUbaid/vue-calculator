import { defineStore } from "pinia";

export const useCalculatorStore = defineStore("calculator", {
  state: () => ({
    currentInput: "",
    result: "",
    history: [],
  }),
  actions: {
    append(value) {
      if (this.currentInput === "" && this.result !== "") {
        if ("+-*/".includes(value)) {
          this.currentInput = this.result + value;
          this.result = "";
        } else {
          this.currentInput = value;
        }
      } else {
        this.currentInput += value;
      }
    },
    clear() {
      this.currentInput = "";
    },
    calculate() {
      try {
        this.result = eval(this.currentInput).toString();
        this.history.unshift(`${this.currentInput} = ${this.result}`);
      } catch (e) {
        this.result = "Error";
      }
    },
    clearHistory() {
      this.history = [];
    },
  },
});
