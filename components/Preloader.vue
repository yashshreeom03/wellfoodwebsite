<template>
  <div v-if="isVisible" id="preloader" class="fixed inset-0 flex items-center justify-center bg-white z-[100]">
    <div class="relative flex items-center justify-center">
      <img :src="loader" class="w-24 h-24" alt="Loader" />
      <div class="absolute w-48 h-48 -left-12 -top-12 animate-spin border border-secondarycolor rounded-full border-t-white border-b-white"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import loader from "/Images/logos/loader-logo.png";

const isVisible = ref(true);

onMounted(() => {
  setTimeout(() => {
    const preloader = document.getElementById("preloader");
    if (preloader) {
      preloader.style.transition = "opacity 1s";
      preloader.style.opacity = "0";
      setTimeout(() => (isVisible.value = false), 500);
    }
  }, 500);
});
</script>
