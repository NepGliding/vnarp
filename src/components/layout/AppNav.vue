<template>
  <div class="main">
    <div v-if="isMobile || isTablet">
      <n-button @click="activate('left')"><Menuicon /></n-button>
      <n-drawer v-model:show="active" :width="256" :placement="placement">
        <n-menu :options="menuOptions" :value="activeKey" />
      </n-drawer>
    </div>
    <div v-else>
      <n-menu mode="horizontal" :options="menuOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, h, computed, watch, nextTick } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { NButton, NDrawer, NMenu } from "naive-ui";
import Menuicon from "@/assets/images/Menuicon.vue";
import { useBreakpoints } from "@vueuse/core";

// 获取当前路由
const route = useRoute();

// 根据路径计算当前激活的菜单 key
const activeKey = computed(() => {
  const path = route.path;
  if (path === "/") return "go-home";
  if (path === "/article") return "go-article";
  if (path === "/resources") return "go-resources";
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
            path: "/",
          },
        },
        { default: () => "首页" },
      ),
    key: "go-home",
  },
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
            path: "/resources",
          },
        },
        { default: () => "资源" },
      ),
    key: "go-resources",
  },
];

//移动端Menu的n-button控制抽屉n-drawer
const active = ref(false);
const placement = ref("right");
function activate(place) {
  active.value = true;
  placement.value = place;
}

// 移动端监听路由变化，抽屉时点击菜单自动关闭抽屉
watch(
  () => route.path,
  () => {
    if (isMobile.value || isTablet.value) {
      active.value = false;
    }
  },
);
// 修复抽屉打开时自动聚焦第一个可互动元素（抽屉打开，移除自动聚焦的焦点）
watch(active, (newVal) => {
  if (newVal) {
    nextTick(() => {
      if (document.activeElement && document.activeElement.blur) {
        document.activeElement.blur();
      }
    });
  }
});

//使用VueUse useBreakpoints() 根据屏幕宽度在不同断点之间切换
const breakpoints = { mobile: 0, tablet: 768, desktop: 1024 };
const screens = useBreakpoints(breakpoints);

const isMobile = screens.smaller("tablet"); // <768px
const isTablet = screens.between("mobile", "desktop"); // 768-1023px
const isDesktop = screens.greaterOrEqual("desktop"); // ≥1024px
</script>

<style scoped>
.main {
  height: 46px;
  padding: 6px 0;
}
</style>
