<template>
  <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
    <template #trigger>
      <n-button size="small" style="grid-area: 5 / 2 / 6 / 3"> Bottom </n-button>
    </template>
    <div class="large-text">啊！</div>
  </n-popover>
</template>
<script setup>
import { ref } from "vue";
import { NButton, NPopover } from "naive-ui";
const overlap = ref(false);
</script>

<style scoped></style>
