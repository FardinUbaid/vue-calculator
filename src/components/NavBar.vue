<template>
  <nav class="nav">
    <RouterLink to="/" :class="{ active: isActive('/') }">🧮</RouterLink>
    <RouterLink to="/history" :class="{ active: isActive('/history') }"
      >🕒</RouterLink
    >
    <RouterLink to="/settings" :class="{ active: isActive('/settings') }"
      >⚙️</RouterLink
    >
  </nav>
</template>

<script>
import { useRoute } from "vue-router";

export default {
  setup() {
    const route = useRoute();
    const isActive = (path) => route.path === path;
    return { isActive };
  },
};
</script>
