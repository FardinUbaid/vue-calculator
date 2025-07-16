<template>
  <div class="settings-view">
    <h2>Settings</h2>

    <section>
      <h3>Font Size</h3>
      <button @click="decreaseFontSize">A-</button>
      <button @click="increaseFontSize">A+</button>
    </section>

    <section>
      <h3>Theme Color</h3>
      <div class="color-options">
        <div
          v-for="(color, index) in settings.colors"
          :key="index"
          :style="{ backgroundColor: color }"
          class="color-box"
          @click="setThemeColor(index)"
        ></div>
      </div>
    </section>
  </div>
</template>

<script>
import { useSettingsStore } from "../store/settingsStore";

export default {
  setup() {
    const settings = useSettingsStore();

    return {
      settings,
      increaseFontSize: settings.increaseFontSize,
      decreaseFontSize: settings.decreaseFontSize,
      setThemeColor: settings.setThemeColor,
    };
  },
};
</script>

<style scoped>
.settings-view {
  max-width: 500px;
  margin: 2rem auto;
  background: var(--surface-alt, #333348);
  color: white;
  padding: 1rem;
  border-radius: 10px;
}

section {
  margin-bottom: 1.5rem;
}

button {
  margin-right: 0.5rem;
  padding: 0.6rem 1rem;
  border: none;
  background: #444;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: #555;
}

.color-options {
  display: flex;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.color-box {
  width: 30px;
  height: 30px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid white;
}
</style>
