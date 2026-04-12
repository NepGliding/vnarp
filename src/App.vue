<template>
  <header><AppHeader /></header>
  <nav><AppNav /></nav>
  <aside><router-view /></aside>
  <footer><AppFooter /></footer>
</template>

<script setup>
import AppHeader from "@/components/layout/AppHeader.vue";
import AppNav from "@/components/layout/AppNav.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<style scoped></style>
