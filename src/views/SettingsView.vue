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
