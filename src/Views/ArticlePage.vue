<template>
  <h1>文章...</h1>
  <!-- 绑定 store 的状态 -->
  <n-drawer v-model:show="drawerStore.active" :width="256" :placement="drawerStore.placement">
    <input type="text" />
  </n-drawer>
</template>

<script setup>
import { NDrawer, NMenu } from "naive-ui";
import { useDrawerStore } from "@/stores/drawer";
//移动端Menu的n-button控制抽屉n-drawer
const drawerStore = useDrawerStore();
</script>

<style scoped></style>
