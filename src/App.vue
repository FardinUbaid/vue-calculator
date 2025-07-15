<template>
  <div :class="['app', currentTheme]">
    <router-view />
  </div>
</template>

<script>
import { useSettingsStore } from "./store/settingsStore";

export default {
  name: "App",
  setup() {
    const settings = useSettingsStore();
    return {
      currentTheme: settings.currentTheme,
    };
  },
};
</script>

<style>
.app {
  padding: 20px;
  transition: background 0.3s;
}
</style>
