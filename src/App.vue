<template>
  <n-layout class="root">
    <n-config-provider :theme="theme">
      <n-global-style />
      <n-card>
        <n-space>
          <n-button @click="theme = darkTheme"> 深色 </n-button>
          <n-button @click="theme = null"> 浅色 </n-button>
        </n-space>
      </n-card>
      <n-layout-header>
        <AppHeader />
        <AppNav />
      </n-layout-header>
      <n-layout-content content-style="padding: 24px;"> <router-view /> </n-layout-content>
      <n-layout-footer><AppFooter /></n-layout-footer>
    </n-config-provider>
  </n-layout>
</template>

<script setup>
import { ref, watch } from "vue";
import AppHeader from "@/components/layout/AppHeader.vue";
import AppNav from "@/components/layout/AppNav.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

import {
  NGlobalStyle,
  NButton,
  NLayout,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NConfigProvider,
  darkTheme,
  NCard,
  NSpace,
} from "naive-ui";

const theme = ref(null);

watch(
  theme,
  (newTheme) => {
    // 使用 name 属性判断更可靠
    const isDark = newTheme !== null && newTheme.name === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  },
  { immediate: true },
);
</script>

<style>
.root {
  max-width: 1408px;
  width: 100%;
  margin: 0 auto;
}
</style>
