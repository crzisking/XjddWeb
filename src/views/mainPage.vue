<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout style="display: flex; flex-direction: column;">
      <!-- Header Section -->
      <a-layout-header style="background: #001529; padding: 0 20px; display: flex; align-items: center; height: 64px;">
        <a-typography-text style="color: #fff; font-size: 24px; font-weight: bold;">
          CLG 洗脚大队
        </a-typography-text>
      </a-layout-header>

      <!-- Content Section -->
      <a-layout-content style="flex: 1; background: #fff; padding: 20px; overflow: auto;">
        <a-button type="primary" @click="goToMenu">开始洗脚</a-button>
      </a-layout-content>
    </a-layout>
  </a-space>

</template>

<script setup lang="ts">
import router from "../router";
const goToMenu = () => {
  router.push("/menu");
};
</script>

<style scoped>
a-layout {
  height: 100vh; /* 整体布局占满屏幕 */
}

a-layout-header {
  line-height: 64px; /* 保持高度一致 */
}

a-layout-content {
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>