<template>
  <div class="main">
    <n-flex justify="space-between">
      <div class="search-wrapper">
        <LeftTopSvg />
        <n-input v-if="isDesktop" v-model:value="seacherValue" type="text" placeholder="Input" />
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
            <n-input v-model:value="seacherValue" type="text" placeholder="Input" />
          </n-card>
        </n-modal>

        <n-popover :overlap="overlap" :show-arrow="false" placement="bottom" trigger="click">
          <template #trigger>
            <n-button quaternary circle>
              <Functionicon />
            </n-button>
          </template>
          <n-menu :options="menuOptions" :value="activeKey" />
          <n-switch @update:value="handleToggleTheme"> </n-switch>
        </n-popover>
      </div>
      <div v-else>
        <n-space>
          <n-menu mode="horizontal" :options="menuOptions" />
          <n-switch @update:value="handleToggleTheme"> </n-switch>
        </n-space>
      </div>
    </n-flex>
  </div>
</template>
<script setup>
import { ref, computed, h } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { useBreakpoints } from "@vueuse/core";
import { NButton, NPopover, NSwitch, NModal, NCard, NFlex, NInput, NSpace, NMenu } from "naive-ui";
import Searchicon from "@/assets/images/Searchicon.vue";
import Functionicon from "@/assets/images/Functionicon.vue";
import LeftTopSvg from "@/components/common/LeftTopSvg.vue";

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
const seacherValue = ref(null);
// 获取当前路由
const route = useRoute();

// 根据路径计算当前激活的菜单 key
const activeKey = computed(() => {
  const path = route.path;
  if (path === "/article") return "go-article";
  if (path === "/") return "go-resources";
  if (path === "/home") return "go-home";
  return "go-home"; // 默认首页
});

//路由菜单
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/article",
          },
        },
        { default: () => "文章" },
      ),
    key: "go-article",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/",
          },
        },
        { default: () => "资源" },
      ),
    key: "go-resources",
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/home",
          },
        },
        { default: () => "首页" },
      ),
    key: "go-home",
  },
];
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
