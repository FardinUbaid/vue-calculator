<template>
  <div class="history-view">
    <h2>Calculation History</h2>

    <div v-if="calculator.history && calculator.history.length > 0">
      <ul>
        <li v-for="(item, index) in calculator.history" :key="index">
          {{ item }}
        </li>
      </ul>
      <button @click="clearHistory">Clear History</button>
    </div>

    <p v-else>No history yet.</p>
  </div>
</template>

<script>
import { useCalculatorStore } from "../store/calculatorStore";

export default {
  name: "HistoryView",
  setup() {
    const calculator = useCalculatorStore();

    function clearHistory() {
      calculator.clearHistory();
    }

    return {
      calculator,
      clearHistory,
    };
  },
};
</script>
