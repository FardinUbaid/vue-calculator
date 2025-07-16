<template>
  <div class="calculator">
    <div class="display">
      <div class="input">{{ calculator.currentInput || "0" }}</div>
      <div class="result">{{ calculator.result }}</div>
    </div>

    <div class="buttons">
      <!-- Row 1 -->
      <div class="btn-row">
        <button @click="reset" class="reset">AC</button>
        <button @click="clear" class="clear">C</button>
        <div class="empty-space"></div>
        <button @click="appendOperator('/')" class="operator">÷</button>
      </div>

      <!-- Row 2 -->
      <div class="btn-row">
        <button @click="appendDigit('7')">7</button>
        <button @click="appendDigit('8')">8</button>
        <button @click="appendDigit('9')">9</button>
        <button @click="appendOperator('*')" class="operator">×</button>
      </div>

      <!-- Row 3 -->
      <div class="btn-row">
        <button @click="appendDigit('4')">4</button>
        <button @click="appendDigit('5')">5</button>
        <button @click="appendDigit('6')">6</button>
        <button @click="appendOperator('-')" class="operator">−</button>
      </div>

      <!-- Row 4 -->
      <div class="btn-row">
        <button @click="appendDigit('1')">1</button>
        <button @click="appendDigit('2')">2</button>
        <button @click="appendDigit('3')">3</button>
        <button @click="appendOperator('+')" class="operator">+</button>
      </div>

      <!-- Row 5 -->
      <div class="btn-row">
        <button @click="appendDigit('0')" class="zero">0</button>
        <button @click="appendDigit('.')">.</button>
        <button @click="calculate" class="equal">=</button>
      </div>
    </div>
  </div>
</template>

<script>
import { useCalculatorStore } from "../store/calculatorStore";
import { useSettingsStore } from "../store/settingsStore";

export default {
  name: "CalculatorView",
  computed: {
    fontSize() {
      const settings = useSettingsStore();
      return settings.currentFontSize;
    },
  },
  setup() {
    const calculator = useCalculatorStore();

    function appendDigit(digit) {
      calculator.append(digit);
    }

    function appendOperator(op) {
      const lastChar = calculator.currentInput.slice(-1);
      if ("+-*/".includes(lastChar)) {
        calculator.currentInput = calculator.currentInput.slice(0, -1) + op;
      } else {
        calculator.append(op);
      }
    }

    function clear() {
      calculator.clear();
    }

    function reset() {
      calculator.clear();
      calculator.result = "";
    }

    function calculate() {
      calculator.calculate();
    }

    return {
      calculator,
      appendDigit,
      appendOperator,
      clear,
      reset,
      calculate,
    };
  },
};
</script>
