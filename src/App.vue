<script setup lang="ts">
import { GetMenuList } from "./api/init/init.ts";
import { MenuItem, useMenuStore } from "./stores/MenuStore.ts";
import { onMounted } from "vue";

const MenuStore = useMenuStore();

const GetMenu = () => {
  //判断是否已经获取过菜单
  if (MenuStore.menuList.length > 0) {
    return;
  }
  GetMenuList().then((res) => {
    if (res.code === 200) {
      const menuItems : Array<MenuItem> = res.data; // 直接解析为 MenuItem[]
      MenuStore.setMenuList(menuItems);
    }
  });
};

onMounted(() => {
  GetMenu();
});
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>