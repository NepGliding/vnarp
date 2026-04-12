<template>
  <n-layout class="app-layout">
    <n-layout-header>
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
  height: 100vh; /* 占满视口高度 */
  display: flex;
  flex-direction: column;
}

/* 让 content 区域自动填充剩余空间 */
.n-layout-content {
  flex: 1;
  padding: 0 24px;
  height: 100%;
}
</style>
