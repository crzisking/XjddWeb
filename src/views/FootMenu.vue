<script setup lang="ts">
import {ref} from "vue";

const menuList=ref([
    {name:"排行榜",path:"/",index:0},
    {name:"社区",path:"",index:1},
    {name:"XJDD测评",path:"",index:2},
    {name:"收藏记录",path:"",index:3},
])
</script>

<template>
    <a-layout-footer>
        <a-menu mode="horizontal" theme="dark">
            <a-menu-item v-for="item in menuList" :key="item.index" :to="item.path">
                {{item.name}}
            </a-menu-item>
        </a-menu>
    </a-layout-footer>
</template>

<style scoped>

</style>