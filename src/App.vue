<template>
  <n-flex justify="center" class="layout-wrapper">
    <n-space vertical size="large">
      <n-layout>
        <n-layout-header> <AppHeader></AppHeader> </n-layout-header>
        <n-layout-content> <router-view /> </n-layout-content>
        <n-layout-footer> <AppFooter></AppFooter> </n-layout-footer>
      </n-layout>
    </n-space>
  </n-flex>
</template>

<script setup>
import { NFlex, NSpace, NLayout, NLayoutHeader, NLayoutContent, NLayoutFooter } from "naive-ui";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<style scoped>
.layout-wrapper {
  max-width: 1408px;
  width: 100%;
  margin: 0 auto;
}
.n-layout-header,
.n-layout-footer {
  background: rgba(128, 128, 128, 0.2);
}

.n-layout-sider {
  background: rgba(128, 128, 128, 0.3);
}

.n-layout-content {
  background: rgba(128, 128, 128, 0.4);
}
</style>
