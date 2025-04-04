<template>
    <div :class="`text-center ${extraClass}`">
      <h3 ref="countRef" :data-stop="parsedValue" class="text-[55px] font-bold leading-[70px] text-primarycolor">
        0
      </h3>
      <p class="font-medium text-black mt-2">{{ displayLabel }}</p>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

interface Props {
  value: number | string; 
  label?: string;
  extraClass?: string;
}

const props = defineProps<Props>();

const parsedValue = computed(() => {
  return typeof props.value === "number" ? props.value : Number(props.value);
});

const countRef = ref<HTMLElement | null>(null);

const displayLabel = computed(() => props.label || "Default Label");

const formatNumber = (num: number): string => {
  return num >= 1000 ? `${Math.floor(num / 1000)}K+` : `${num}+`;
};

onMounted(() => {
  if (!countRef.value) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const end = parsedValue.value; 
          const duration = 1000;
          const steps = 30; 
          const increment = Math.ceil(end / steps);
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current >= end) {
              current = end;
            }
            if (countRef.value) {
              countRef.value.innerText = formatNumber(current);
            }
            if (current < end) {
              setTimeout(updateCounter, duration / steps);
            }
          };

          updateCounter();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(countRef.value);

  onUnmounted(() => {
    if (countRef.value) {
      observer.unobserve(countRef.value);
    }
  });
});
</script>
