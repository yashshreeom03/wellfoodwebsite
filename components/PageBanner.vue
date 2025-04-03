<template>
  <div class="relative">
    <!-- Background Image -->
    <div 
      class="absolute inset-0 bg-bottom bg-no-repeat" 
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>

    <!-- Content -->
    <div class="relative z-10 flex flex-col items-center justify-center pt-[190px] pb-[100px]">
      <h1 class="text-[32px] font-bold">{{ title }}</h1>
      <p class="mt-4 text-lg flex items-center">
        <span>
          <NuxtLink to="/services">Home</NuxtLink>
        </span>
        <span class="mx-2">
          >
        </span>
        <span class="text-[#01624A]">{{ breadcrumb }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import backgroundImage from "../public/Images/background/page-benner.png";

// Define Props
defineProps({
  title: String,
  breadcrumb: String
});
</script>
