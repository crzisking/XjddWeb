<script setup lang="ts">
import {ref} from "vue";
import {useMenuStore} from "../stores/MenuStore.ts";
const menuStore= useMenuStore()
// 定义菜单类型
interface menuType{
  id:number,
  menuName:string,
  path:string
}

const menuList=ref<menuType[]>(menuStore.menuList)


</script>

<template>
    <a-layout-footer>
        <a-menu mode="horizontal" theme="dark">
            <a-menu-item v-for="item in menuList" :key="item.id" :to="item.path">
                {{item.menuName}}
            </a-menu-item>
        </a-menu>
    </a-layout-footer>
</template>

<style scoped>

</style>