<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { ChevronsUp } from 'lucide-vue-next';

const isVisible = ref(false);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300;
};


onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>

<template>
  <button v-if="isVisible" @click="scrollToTop" class="fixed bottom-6 right-6 bg-primarycolor text-white p-3 rounded-full z-50 shadow-lg transition-opacity duration-1000" aria-label="Scroll to top">
        <ChevronsUp />
    </button>
</template>
