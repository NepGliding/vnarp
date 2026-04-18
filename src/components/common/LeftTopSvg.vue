<!-- LeftTopSvg.vue -->
<template>
  <div class="left-top-svg" :class="{ 'is-article': isArticleRoute }" @click="handleClick">
    <component :is="currentSvgComponent" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useDrawerStore } from "@/stores/drawer";

import Homeicon from "@/assets/images/Homeicon.vue";
import Resourcesicon from "@/assets/images/Resourcesicon.vue";
import Articleicon from "@/assets/images/Articleicon.vue";

const route = useRoute();
const drawerStore = useDrawerStore();

// 根据路由名称动态选择要显示的 SVG 组件
const currentSvgComponent = computed(() => {
  const routeName = route.name;
  switch (routeName) {
    case "home": // 首页路由名称
      return Homeicon;
    case "resource": // 资源页路由名称
      return Resourcesicon;
    case "article": // 文章页路由名称
      return Articleicon;
    default:
      // 默认返回首页 SVG（可根据需要调整）
      return Resourcesicon;
  }
});

// 判断当前是否为文章页（用于控制点击行为和样式）
const isArticleRoute = computed(() => {
  return route.name === "article" || route.path.startsWith("/article");
});

// 点击处理：仅在文章页时打开抽屉（左侧）
const handleClick = () => {
  if (isArticleRoute.value) {
    drawerStore.open("left"); // 设置抽屉为左侧打开
  }
};
</script>

<style scoped>
.left-top-svg {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: default; /* 非文章页显示默认箭头 */
  transition: opacity 0.2s;
}

.left-top-svg.is-article {
  cursor: pointer; /* 文章页显示手型光标 */
}

.left-top-svg.is-article:hover {
  opacity: 0.8; /* 可选：文章页悬停效果 */
}
</style>
