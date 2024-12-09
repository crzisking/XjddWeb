<template>
</template>

<script setup lang="ts">
import {onUnmounted, ref} from 'vue';
// import { useRouter } from 'vue-router';
//test
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
</style>
