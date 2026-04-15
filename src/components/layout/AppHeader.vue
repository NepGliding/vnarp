<template>
  <div class="main">
    <n-flex justify="space-between">
      <div class="search-wrapper">
        <n-icon size="36" class="logo"> <img :src="logoSrc" alt="logo" /></n-icon>
        <n-input v-if="isDesktop" v-model:value="seachervalue" type="text" placeholder="Input" />
      </div>

      <div v-if="isMobile || isTablet">
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
            <n-input v-model:value="value" type="text" placeholder="Input" />
          </n-card>
        </n-modal>

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
      <div v-else>
        <n-space>
          <n-button ghost> Default </n-button>
          <n-button type="primary" ghost> Primary </n-button>
          <n-button type="info" ghost> Info </n-button>
        </n-space>
      </div>
    </n-flex>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useBreakpoints } from "@vueuse/core";
import { NButton, NPopover, NIcon, NSwitch, NModal, NCard, NFlex, NInput, NSpace } from "naive-ui";
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
//使用VueUse useBreakpoints() 根据屏幕宽度在不同断点之间切换
const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };
const screens = useBreakpoints(breakpoints);

const isMobile = screens.smaller("tablet"); // <768px
const isTablet = screens.between("mobile", "desktop"); // 768-1023px
const isDesktop = screens.greaterOrEqual("desktop"); // ≥1024px

//搜索框文本输入默认值
const seachervalue = ref(null);
</script>

<style scoped>
.main {
  height: 68px;
  padding: 16px 0;
}
.search-wrapper {
  display: flex;
}
</style>
