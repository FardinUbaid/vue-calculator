import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settingsStore", {
  state: () => ({
    fontSize: 16,
    themeColor: "default",
    availableThemes: ["default", "blue", "red", "green", "purple"],
  }),
  getters: {
    currentFontSize() {
      return this.fontSize + "px";
    },
    currentTheme() {
      return this.themeColor;
    },
  },
  actions: {
    increaseFont() {
      this.fontSize += 1;
    },
    decreaseFont() {
      if (this.fontSize > 10) this.fontSize -= 1;
    },
    setTheme(color) {
      if (this.availableThemes.includes(color)) {
        this.themeColor = color;
      }
    },
  },
});
