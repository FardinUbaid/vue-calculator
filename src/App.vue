<template>
  <div :class="['app', currentTheme]">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import { useSettingsStore } from "./store/settingsStore";

export default {
  name: "App",
  components: {
    NavBar,
  },
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
  min-height: 100vh;
  background-color: #1e1e2f;
  color: #fff;
  transition: all 0.3s ease;
}
</style>
