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

<style scoped>
.nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1rem;
  background-color: #2a2a3d;
  border-bottom: 1px solid #444;
  font-size: 2rem;
}
a {
  color: gray;
  transition: color 0.3s;
  text-decoration: none;
}
a.active {
  color: white;
}
</style>
