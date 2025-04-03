<script setup>
import featuresData from "../data/featuresData";
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  showCategories: {
    type: Boolean,
    default: true,  
  },
});

const selectCategory = ref(featuresData[0]?.category || "");

const categories = computed(() => [
  ...new Set(featuresData.map((item) => item.category)),
]);

const filteredData = computed(() => {
  return props.showCategories
    ? featuresData.filter((item) => item.category === selectCategory.value)
    : featuresData;
});
</script>

<template>
  <div>
    <div v-if="showCategories" class="flex gap-4 justify-center mb-[120px]">
      <button
        v-for="category in categories"
        :key="category"
        @click="selectCategory = category"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="{
          'bg-primarycolor border-[#039873] text-white': selectCategory === category,
          'bg-white border-[#DDDDDD] text-black': selectCategory !== category,
        }"
      >
        {{ category }}
      </button>
    </div>

    <div
      v-for="(feature, index) in filteredData"
      :key="index"
      class="sm:p-[50px] p-[30px] mb-20 rounded-[20px] flex flex-col gap-6 lg:flex-row items-center justify-between"
      :style="{ background: feature.bgColor }"
    >
      <template v-if="index % 2 !== 0">
        <div class="sm:p-[30px] p-3 rounded-lg" :style="{ background: feature.bgimgColor }">
          <img :src="feature.image" alt="Feature Image" class="max-w-full rounded-lg shadow" />
        </div>
        <div class="w-full lg:w-1/2">
          <h6 class="text-base mb-[25px] font-semibold uppercase" :style="{ color: feature.textColor }">
            Build Visually
          </h6>
          <h2 class="sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold">
            {{ feature.title }}
          </h2>
          <p class="sm:text-lg my-[25px]">
            {{ feature.description }}
          </p>
          <button class="theme-btn mt-4 px-[60px] py-[14px]" :style="{ background: feature.buttonColor, color: feature.buttonTextColor }">
            {{ feature.buttonText }}
          </button>
        </div>
      </template>
      <template v-else>
        <div class="w-full lg:w-1/2">
          <h6 class="text-base mb-[25px] font-semibold uppercase" :style="{ color: feature.textColor }">
            Build Visually
          </h6>
          <h2 class="sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold">
            {{ feature.title }}
          </h2>
          <p class="sm:text-lg my-[25px]">
            {{ feature.description }}
          </p>
          <button class="theme-btn mt-4 px-[60px] py-[14px]" :style="{ background: feature.buttonColor, color: feature.buttonTextColor }">
            {{ feature.buttonText }}
          </button>
        </div>
        <div class="sm:p-[30px] p-3 rounded-lg" :style="{ background: feature.bgimgColor }">
          <img :src="feature.image" alt="Feature Image" class="max-w-full rounded-lg shadow" />
        </div>
      </template>
    </div>
  </div>
</template>
