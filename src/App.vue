<script setup lang="ts">
import {GetMenuList} from "./api/init/init.ts";
import {MenuItem,useMenuStore} from "./stores/MenuStore.ts";
import {onMounted} from "vue";
const MenuStore =useMenuStore()
onMounted(
  ()=>{
    GetMenu()
  }
)
const GetMenu = () => {
  GetMenuList().then((res) => {
    if (res.code === 200) {
      const menuItems: MenuItem[] = JSON.parse(res.data); // 显式指定解析后的结果类型
      menuItems.forEach((item) => {
        MenuStore.addMenu(item); // 假设 addMenu 接受 MenuItem 类型的参数
      });
      console.log(menuItems)
    }
  });
};
</script>

<template>
  <router-view />
</template>

<style scoped>
</style>
