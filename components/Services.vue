<script setup>
import serviceData from "../data/servicesData"; 

</script>

<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[29px]">
      <div v-for="(service, index) in serviceData" :key="index"
        class="py-[40px] px-[29px] rounded-[20px] border-2"
        :style="{backgroundColor: service.bgColor || 'white', borderColor: service.borderColor, }" >
        <img :src="`/shreeom_website/Images/icons/${service.icon}`" :alt="service.title" class="mb-[26px]" />
        <h3 class="text-xl font-semibold">{{ service.title }}</h3>
        <p class="text-[#616161] text-lg mt-4">{{ service.description }}</p>
      </div>
    </div>
  </div>
</template>