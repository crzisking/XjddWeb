<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { GetMenuList } from "./api/init/init.ts";
import { MenuItem, useMenuStore } from "./stores/MenuStore.ts";

const MenuStore = useMenuStore();

// 响应式变量存储屏幕尺寸
const screenSize = ref({ width: 0, height: 0 });

const updateScreenSize = () => {
  screenSize.value = {
    width: window.innerWidth-50,
    height: window.innerHeight,
  };
};

const GetMenu = () => {
  // 判断是否已经获取过菜单
  if (MenuStore.menuList.length > 0) {
    return;
  }
  GetMenuList().then((res) => {
    if (res.code === 200) {
      const menuItems: Array<MenuItem> = res.data; // 直接解析为 MenuItem[]
      MenuStore.setMenuList(menuItems);
    }
  });
};

onMounted(() => {
  // 初始化屏幕尺寸
  updateScreenSize();
  // 监听窗口大小变化
  window.addEventListener("resize", updateScreenSize);
  // 获取菜单数据
  GetMenu();
});

onUnmounted(() => {
  // 移除事件监听器
  window.removeEventListener("resize", updateScreenSize);
});
</script>

<template>
  <!-- 主容器动态设置宽高 -->
  <div
      :style="{
      width: `${screenSize.width}px`,
      height: `${screenSize.height}px`,
      overflow: 'hidden',
      background: '#f0f2f5'
    }"
  >
    <router-view />
  </div>
</template>

<style scoped>
/* 添加必要的样式 */
</style>