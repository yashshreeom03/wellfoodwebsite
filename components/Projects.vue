<script setup>
import featuresData from "../data/featuresData";
import { ref, computed, defineProps } from "vue";

const props = defineProps({
  showCategories: {
    type: Boolean,
    default: true,
  },
});

const selectCategory = ref("UI/UX design");

const filteredData = computed(() => {
  return props.showCategories
    ? featuresData.filter((item) => item.category === selectCategory.value)
    : featuresData;
});

const setCategory = (category) => {
  selectCategory.value = category;
};

const getButtonClass = (category) => {
  return selectCategory.value === category
    ? "bg-[#039873] text-white border-[#039873]"
    : "bg-white border-[#DDDDDD] text-black";
};
</script>

<template>
  <div>
    <div v-if="showCategories" class="flex flex-wrap gap-4 justify-center mb-[120px]">
      <button
        @click="setCategory('UI/UX design')"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="getButtonClass('UI/UX design')"
      >
        UI/UX Design
      </button>

      <button
        @click="setCategory('React.js')"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="getButtonClass('React.js')"
      >
        React.js
      </button>

      <button
        @click="setCategory('Web development')"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="getButtonClass('Web development')"
      >
        Web Development
      </button>

      <button
        @click="setCategory('PHP')"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="getButtonClass('PHP')"
      >
        PHP
      </button>

      <button
        @click="setCategory('Laravel')"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="getButtonClass('Laravel')"
      >
        Laravel
      </button>

      <button
        @click="setCategory(' node.js')"
        class="px-4 py-2 rounded-lg transition text-lg font-medium border"
        :class="getButtonClass(' node.js')"
      >
        node.js
      </button>
    </div>

    <div
      v-for="(feature, index) in filteredData"
      :key="index"
      class="sm:p-[50px] p-[30px] last:mb-0 mb-20 rounded-[20px] flex flex-col gap-6 lg:flex-row items-center justify-between"
      :style="{ background: feature.bgColor }"
    >
      <template v-if="index % 2 !== 0">
        <div class="sm:p-[30px] p-3 rounded-lg" :style="{ background: feature.bgimgColor }">
          <img :src="feature.image" alt="Feature Image" class="max-w-full rounded-lg shadow" />
        </div>
        <div class="w-full lg:w-1/2">
          <h6 class="text-base mb-[25px] font-semibold uppercase" :style="{ color: feature.textColor  }">
            Build Visually
          </h6>
          <h2 class="sm:text-[40px] text-[28px] leading-[30px] sm:leading-[50px] font-semibold">
            {{ feature.title }}
          </h2>
          <p class="sm:text-lg my-[25px]">
            {{ feature.description }}
          </p>
          <NuxtLink to="/projectsDetail" class="theme-btn Projects-btn inline-block mt-4 px-[60px] py-[14px]" :style="{ background: feature.buttonColor, '--boxShadow': feature.boxShadow }">
            {{ feature.buttonText }}
          </NuxtLink>
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
          <NuxtLink to="/projectsDetail" class="theme-btn Projects-btn inline-block mt-4 px-[60px] py-[14px]" :style="{ background: feature.buttonColor, '--boxShadow': feature.boxShadow }">
            {{ feature.buttonText }}
          </NuxtLink>
        </div>
        <div class="sm:p-[30px] p-3 rounded-lg" :style="{ background: feature.bgimgColor }">
          <img :src="feature.image" alt="Feature Image" class="max-w-full rounded-lg shadow" />
        </div>
      </template>
    </div>
  </div>
</template>
