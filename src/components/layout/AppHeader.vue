<template>
  <n-grid x-gap="12" :cols="2">
    <n-gi>
      <div class="light-green" />
    </n-gi>
    <n-gi>
      <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
        <template #trigger>
          <n-button size="small" style="grid-area: 5 / 2 / 6 / 3"> Bottom </n-button>
        </template>
        <div class="large-text">啊！</div>
      </n-popover>
    </n-gi>
  </n-grid>

  <n-flex vertical>
    <n-button @click="activate('left')"> 左 </n-button>
    <n-drawer v-model:show="active" :width="368" :placement="placement">
      <n-drawer-content title="斯通纳">
        《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
      </n-drawer-content>
    </n-drawer>
  </n-flex>
</template>

<script setup>
import { NFlex, NButton, NPopover, NDrawer, NDrawerContent, NGrid, NGi } from "naive-ui";

import { ref } from "vue";

const overlap = ref(false);

const active = ref(false);
const placement = ref("right");
function activate(place) {
  active.value = true;
  placement.value = place;
}
</script>

<style scoped></style>
