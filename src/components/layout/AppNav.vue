<template>
  <div class="main">
    <n-button @click="activate('left')"> 左 </n-button>
    <n-drawer v-model:show="active" :width="262" :placement="placement">
      <n-drawer-content title="导航栏">
        <router-link to="/">首页</router-link>
        <router-link to="/article">文章</router-link>
        <router-link to="/resources">资源</router-link>
        <router-link to="/about">关于</router-link>
      </n-drawer-content>
    </n-drawer>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { NButton, NDrawer, NDrawerContent } from "naive-ui";

const active = ref(false);
const placement = ref("right");
function activate(place) {
  active.value = true;
  placement.value = place;
}
</script>

<style scoped>
.main {
  height: 46px;
  padding: 6px 0;
}
</style>
