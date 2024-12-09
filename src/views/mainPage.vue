<template>
<a-layout>
  <a-layout-header>
    <a-typography-text>
      clg洗脚大队
    </a-typography-text>
  </a-layout-header>
  <a-layout-content>
  </a-layout-content>
  <a-layout-footer></a-layout-footer>
</a-layout>
</template>

<script setup lang="ts">
import {onUnmounted, ref} from 'vue';
// import { useRouter } from 'vue-router';
const isZooming = ref(false);
// const router = useRouter();

const handleClick = () => {
  if (isZooming.value) return; // 防止重复触发
  isZooming.value = true;

  setTimeout(() => {
    isZooming.value = false;
    // router.push('/your-target-route');
  }, 500);
};

document.addEventListener('click', handleClick);

onUnmounted(() => {
  document.removeEventListener('click', handleClick);
});

</script>

<style scoped>
</style>
