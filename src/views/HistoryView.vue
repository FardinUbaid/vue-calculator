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

<style scoped>
.history-view {
  max-width: 500px;
  margin: 2rem auto;
  background: var(--surface-alt, #333348);
  color: white;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #0008;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 0.4rem;
  border-bottom: 1px solid #555;
}

button {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  border: none;
  background: #d32f2f;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background: #e53935;
}
</style>
