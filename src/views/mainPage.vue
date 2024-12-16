<template>
  <a-space direction="vertical" :style="{ width: '100%' }" :size="[0, 48]">
    <a-layout style="display: flex; flex-direction: column; height: 95vh;">
      <!-- Header Section -->
      <a-layout-header
          style="
          background: #001529;
          padding: 0 20px;
          display: flex;
          align-items: center;
          height: 64px;
        "
      >
        <a-typography-text style="color: #fff; font-size: 24px; font-weight: bold;">
          CLG 洗脚大队
        </a-typography-text>
      </a-layout-header>

      <!-- 中间图片 -->
      <a-layout-content
          style="
          flex: 1;
          background: #f0f2f5;
          display: flex;
          justify-content: center;
          align-items: center;
        "
      >
        <div class="image-container">
          <img
              src="../static/image/xjdd.jpeg"
              alt="foot"
              class="center-image"
          />
        </div>
      </a-layout-content>

      <!-- 按钮部分 -->
      <a-layout-footer
          style="
          background: #fff;
          padding: 20px;
          display: flex;
          justify-content: center;
        "
      >
        <a-button type="primary" @click="goToMenu">开始洗脚</a-button>
      </a-layout-footer>
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

.image-container {
  width: 100%;
  max-width: 600px; /* 限制最大宽度 */
  padding: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 添加阴影效果 */
  border-radius: 10px; /* 圆角边框 */
  background: #fff; /* 图片背景 */
}

.center-image {
  width: 100%;
  height: auto;
  border-radius: 10px; /* 图片本身也有圆角 */
}

a-layout-footer {
  text-align: center;
  background: #f0f2f5;
}
</style>