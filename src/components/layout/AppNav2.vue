<template>
  <div class="main">
    <div v-if="isMobile || isTablet">
      <n-button @click="activate('left')"><Menuicon /></n-button>
      <n-drawer v-model:show="active" :width="257" :placement="placement">
        <n-button
          v-for="item in navItems"
          :key="item.path"
          :text="true"
          :type="isActive(item.path) ? 'primary' : 'default'"
          @click="goTo(item.path)"
        >
          {{ item.name }}
        </n-button>
      </n-drawer>
    </div>
    <div v-else>
      <n-button v-for="item in navItems" :key="item.path" :text="true" @click="goTo(item.path)">
        {{ item.name }}
      </n-button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NButton, NDrawer, NDrawerContent } from "naive-ui";
import Menuicon from "@/assets/images/Menuicon.vue";
import { useBreakpoints } from "@vueuse/core";

const router = useRouter();
const route = useRoute();

// 当前路径（响应式）
const currentPath = computed(() => route.path);

const navItems = [
  { name: "首页", path: "/" },
  { name: "文章", path: "/article" },
  { name: "资源", path: "/resources" },
  { name: "关于", path: "/about" },
];

const goTo = (path) => {
  router.push(path);
};

// 判断当前路由是否与按钮路径匹配
const isActive = (path) => {
  if (path === "/") {
    // 首页必须精确匹配
    return route.path === "/";
  }
  // 非首页：完全匹配，或者是以 path/ 开头（例如 /article/123 匹配 /article）
  return route.path === path || route.path.startsWith(path + "/");
};

//移动端n-button控制弹窗n-drawer
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
