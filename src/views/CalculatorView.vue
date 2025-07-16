<template>
  <div class="calculator" :style="{ fontSize: fontSize }">
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

<style scoped>
.calculator {
  max-width: 400px;
  margin: 2rem auto;
  background: var(--surface-alt, #333348);
  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 0 10px #0008;
  color: white;
  user-select: none;
}

.display {
  background: var(--surface, #2a2a3d);
  border-radius: 8px;
  padding: 1rem;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 1rem;
  min-height: 70px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  word-break: break-word;
}

.input {
  font-size: 1.4rem;
  color: #ccc;
}

.result {
  font-size: 1.8rem;
  font-weight: bold;
  color: white;
  text-align: right;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
}

.btn-row {
  display: flex;
  gap: 0.7rem;
}

button {
  flex: 1;
  background: var(--surface, #2a2a3d);
  border: none;
  border-radius: 6px;
  padding: 1.2rem 0;
  font-size: 1.2rem;
  color: white;
  cursor: pointer;
  transition: background-color 0.25s;
  user-select: none;
}

button:hover {
  background: var(--surface-alt, #44445a);
}

button.operator {
  background: #f57c00;
  color: white;
}

button.operator:hover {
  background: #fb8c00;
}

button.equal {
  background: #0d47a1;
}

button.equal:hover {
  background: #1565c0;
}

button.clear {
  background: #b71c1c;
}

button.clear:hover {
  background: #c62828;
}

button.reset {
  background: #d32f2f;
}

button.reset:hover {
  background: #e53935;
}

button.zero {
  flex: 2;
}

.empty-space {
  flex: 1;
}
</style>
