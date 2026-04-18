<template>
  <n-config-provider :theme="theme">
    <n-global-style />
    <n-layout class="root">
      <n-layout-header>
        <AppHeader @toggle-theme="toggleTheme" />
        <!-- <AppNav /> -->
      </n-layout-header>
      <n-layout-content> <router-view /> </n-layout-content>
      <n-layout-footer><AppFooter /></n-layout-footer>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { ref } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import {
  darkTheme,
  NConfigProvider,
  NGlobalStyle,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
} from "naive-ui";

// null 表示亮色主题
const theme = ref(null);

// 切换主题
const toggleTheme = () => {
  theme.value = theme.value === null ? darkTheme : null;
};
</script>

<style>
.root {
  max-width: 1408px;
  width: 100%;
  margin: 0 auto;
}
</style>
<style scoped></style>
