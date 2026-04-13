<template>
  <div class="main">
    <n-icon size="36">
      <img :src="logoSrc" alt="logo" />
    </n-icon>
    <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
      <template #trigger>
        <n-button quaternary circle>
          <Searchicon />
        </n-button>
      </template>

      <div class="large-text">搜索</div>
    </n-popover>
    <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
      <template #trigger>
        <n-button quaternary circle>
          <Functionicon />
        </n-button>
      </template>
      <div class="large-text">功能</div>
      <n-switch @update:value="handleToggleTheme"> </n-switch>
    </n-popover>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { NButton, NPopover, NIcon, NSwitch } from "naive-ui";
import logoSrc from "@/assets/images/awrw2_36.svg";
import Searchicon from "@/assets/images/Searchicon.vue";
import Functionicon from "@/assets/images/Functionicon.vue";

//弹窗
const overlap = ref(false);

//主题切换
const emit = defineEmits(["toggleTheme"]);
const handleToggleTheme = () => {
  emit("toggleTheme");
};
</script>

<style scoped>
.main {
  height: 68px;
  padding: 16px 0;
}
</style>
