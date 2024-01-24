<template>
  <AppHeader />
  <slot></slot>
  <AppFooter />
</template>

<style scoped>
html {
  font-family: Urbanist, sans-serif;
  scroll-behavior: smooth;
}

body {
  margin: 0;
}
</style>

<script setup>
import AppHeader from "../AppHeader.vue";
import AppFooter from "../AppFooter.vue";
</script>
