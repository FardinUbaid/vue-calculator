import { defineStore } from "pinia";

export const useSettingsStore = defineStore("settings", {
  state: () => ({
    fontSizeLevel: 2,
    colors: ["#1e293b", "#f59e0b", "#ec4899", "#10b981", "#6366f1"],
    selectedColorIndex: 0,
  }),
  getters: {
    currentFontSize(state) {
      return (
        [
          "12px",
          "13px",
          "14px",
          "15px",
          "16px",
          "17px",
          "18px",
          "19px",
          "20px",
          "21px",
        ][state.fontSizeLevel - 1] || "16px"
      );
    },
    currentColor(state) {
      return state.colors[state.selectedColorIndex];
    },
  },
  actions: {
    increaseFontSize() {
      if (this.fontSizeLevel < 10) this.fontSizeLevel++;
    },
    decreaseFontSize() {
      if (this.fontSizeLevel > 1) this.fontSizeLevel--;
    },
    setThemeColor(index) {
      if (index >= 0 && index < this.colors.length) {
        this.selectedColorIndex = index;
      }
    },
  },
});
