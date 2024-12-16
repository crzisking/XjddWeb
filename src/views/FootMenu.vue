<script setup lang="ts">
import { ref } from "vue";
import { useMenuStore } from "../stores/MenuStore.ts";

const menuStore = useMenuStore();
// 使用菜单数据
const menuList = ref(menuStore.menuList);
</script>

<template>
  <a-layout style="height: 100%">
    <!-- 左侧固定菜单栏 -->
    <a-layout-sider theme="dark" width="200">
      <div class="logo">LOGO</div>
      <a-menu
          theme="dark"
          mode="inline"
          :items="menuList.map(item => ({
          key: item.id,
          label: item.menuName,
          path: item.path
        }))"
      />
    </a-layout-sider>

    <!-- 右侧内容区域 -->
    <a-layout style="height: 100%;width:100%">
      <a-layout-header style="background: #fff; padding: 0">
        <h2 style="margin-left: 16px">Header</h2>
      </a-layout-header>
      <a-layout-content style="margin: 16px; background: #fff; padding: 24px">
        <router-view />
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2024 Created by You
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<style scoped>
.logo {
  height: 64px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
  color: white;
  font-size: 24px;
  text-align: center;
  line-height: 64px;
}
</style>