<template>
  <div class="app" :style="{ fontSize: fontSize, backgroundColor: bgColor }">
    <NavBar />
    <router-view />
  </div>
</template>

<script>
import { computed } from "vue";
import NavBar from "./components/NavBar.vue";
import { useSettingsStore } from "./store/settingsStore";

export default {
  name: "App",
  components: {
    NavBar,
  },
  setup() {
    const settings = useSettingsStore();

    const fontSize = computed(() => settings.currentFontSize);
    const bgColor = computed(() => settings.currentColor);

    return {
      fontSize,
      bgColor,
    };
  },
};
</script>

<style>
.app {
  min-height: 100vh;
  color: #fff;
  transition: all 0.3s ease;
}
</style>
