<template>
  <div class="main">
    <div v-if="isMobile || isTablet">
      <n-button @click="activate('left')"><Menuicon /></n-button>
      <n-drawer v-model:show="active" :width="257" :placement="placement">
        <n-menu :options="menuOptions" :value="activeKey" />
      </n-drawer>
    </div>
    <div v-else>
      <n-menu mode="horizontal" :options="menuOptions" />
    </div>
  </div>
</template>

<script setup>
import { ref, h, computed } from "vue";
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
  if (path === "/about") return "go-about";
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
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/about",
          },
        },
        { default: () => "关于" },
      ),
    key: "go-about",
  },
];

//移动端Menu的n-button控制弹窗n-drawer
const active = ref(false);
const placement = ref("right");
function activate(place) {
  active.value = true;
  placement.value = place;
}

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
