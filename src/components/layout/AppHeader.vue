<template>
  <n-grid :x-gap="12" :y-gap="2" :cols="2">
    <n-grid-item>
      <span>1</span>
    </n-grid-item>
    <n-grid-item>
      <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
        <template #trigger>
          <n-button size="small" style="grid-area: 5 / 2 / 6 / 3"> Bottom </n-button>
        </template>
        <div class="large-text">啊！</div>
      </n-popover>
    </n-grid-item>
    <n-grid-item>
      <n-button @click="activate('left')"> 左 </n-button>
      <n-drawer v-model:show="active" :width="325" :placement="placement">
        <n-drawer-content title="斯通纳">
          <router-link to="/">首页</router-link>
          <router-link to="/about">关于</router-link>
        </n-drawer-content>
      </n-drawer>
    </n-grid-item>
    <n-grid-item>
      <span>4</span>
    </n-grid-item>
  </n-grid>
</template>

<script setup>
import { NButton, NPopover, NDrawer, NDrawerContent, NGrid, NGridItem } from "naive-ui";

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
