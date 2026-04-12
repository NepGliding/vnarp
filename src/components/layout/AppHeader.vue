<template>
  <div class="main">
    <n-icon size="36">
      <img :src="logoSrc" alt="logo" />
    </n-icon>
    <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
      <template #trigger>
        <n-button size="small" style="grid-area: 5 / 2 / 6 / 3"> Bottom </n-button>
      </template>
      <div class="large-text">啊！</div>
    </n-popover>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { NButton, NPopover, NIcon } from "naive-ui";
import logoSrc from "@/assets/images/awrw36.svg";
const overlap = ref(false);
</script>

<style scoped>
.main {
  height: 68px;
  padding: 16px 0;
}
</style>
