<template>
  <div class="main">
    <n-icon size="36">
      <img :src="logoSrc" alt="logo" />
    </n-icon>
    <!-- <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
      <template #trigger>
        <n-button quaternary circle>
          <Searchicon />
        </n-button>
      </template>
      <div class="large-text">搜索</div>
    </n-popover> -->
    <n-button quaternary circle @click="showModal = true"><Searchicon /></n-button>
    <n-modal v-model:show="showModal">
      <n-card
        style="width: 300px; position: fixed; left: 20px; top: 90px"
        title="搜索模态框"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <template #header-extra> 噢！ </template>
        内容
        <template #footer> 尾部 </template>
      </n-card>
    </n-modal>

    <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
      <template #trigger>
        <n-button quaternary circle>
          <Functionicon />
        </n-button>
      </template>
      <div class="large-text">相关</div>
      <n-switch @update:value="handleToggleTheme"> </n-switch>
    </n-popover>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { NButton, NPopover, NIcon, NSwitch, NModal, NCard } from "naive-ui";
import logoSrc from "@/assets/images/awrw2_36.svg";
import Searchicon from "@/assets/images/Searchicon.vue";
import Functionicon from "@/assets/images/Functionicon.vue";

//弹窗
const overlap = ref(false);
//搜索弹窗模态框
const showModal = ref(false);

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
