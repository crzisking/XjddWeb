<template>
  <el-main>
    <el-text :class="{ 'zoom-animation': isZooming }">洗脚大队</el-text>
  </el-main>
  <el-footer>
    <el-button round @click="GoToWash">开始洗脚之旅</el-button>
  </el-footer>
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

function GoToWash(){
  console.log('GoToWash');
}
</script>

<style scoped>
@keyframes zoomInOut {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}

.zoom-animation {
  animation: zoomInOut 0.5s ease-in-out;
}
</style>