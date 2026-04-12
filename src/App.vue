<template>
  <n-layout class="app-layout">
    <n-layout-header class="sticky-header">
      <AppHeader />
    </n-layout-header>

    <n-layout-content>
      <router-view />
    </n-layout-content>

    <n-layout-footer>
      <AppFooter />
    </n-layout-footer>
  </n-layout>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from "naive-ui";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<style scoped>
.app-layout {
  max-width: 1408px;
  width: 100%;
  margin: 0 auto;
}
</style>
