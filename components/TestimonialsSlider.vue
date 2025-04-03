<template>
  <div class="flex flex-col items-center max-w-3xl mx-auto relative">
    <!-- Thumbnails Wrapper (Sliding) -->
    <div class="w-full overflow-hidden mt-6 relative">
      <div
        class="flex gap-6 justify-center h-[130px] mx-auto items-center transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}px)` }"
      >
        <img
          v-for="(testimonial, index) in testimonials"
          :key="index"
          :src="testimonial.image"
          :class="[
            'rounded-full object-cover cursor-pointer transition-all duration-500',
            activeIndex === index
              ? 'w-24 h-24 ring-4 ring-green-500 scale-125 z-10'
              : 'w-14 h-14 opacity-50'
          ]"
          @click="activeIndex = index"
        />
      </div>
    </div>

    <!-- Testimonial Content (Fixed in Center) -->
    <div class="relative w-full overflow-hidden mt-6">
      <div
        class="flex transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${activeIndex * 100}%)` }"
      >
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="bg-green-100 p-8 rounded-xl text-center shadow-md w-full shrink-0"
        >
          <img :src="testimonial.logo" alt="Company Logo" class="w-16 mx-auto mb-4" />
          <p class="text-lg font-medium text-gray-700">"{{ testimonial.text }}"</p>
          <h4 class="text-lg font-bold text-gray-800 mt-4">{{ testimonial.name }}</h4>
          <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
        </div>
      </div>
    </div>

    <!-- Navigation Arrows -->
    <button
      class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-xl"
      @click="prevTestimonial"
    >
      ❮
    </button>
    <button
      class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md text-xl"
      @click="nextTestimonial"
    >
      ❯
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const testimonials = ref([
  {
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    logo: "https://placehold.co/100x50?text=Logo",
    text: "ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs.",
    name: "Rajesh Patel",
    role: "CEO of InnovateTech",
  },
  {
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    logo: "https://placehold.co/100x50?text=Logo",
    text: "The team is professional and always ready to help. Highly recommend!",
    name: "Priya Sharma",
    role: "CTO of TechWorld",
  },
  {
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    logo: "https://placehold.co/100x50?text=Logo",
    text: "Their support is unmatched, and their expertise is invaluable for any business.",
    name: "Anil Mehta",
    role: "Founder of DigitalFlow",
  },
]);

const activeIndex = ref(0);
let autoSlide;

const nextTestimonial = () => {
  activeIndex.value = (activeIndex.value + 1) % testimonials.value.length;
};

const prevTestimonial = () => {
  activeIndex.value =
    (activeIndex.value - 1 + testimonials.value.length) % testimonials.value.length;
};

// Auto-slide every 5s
onMounted(() => {
  autoSlide = setInterval(nextTestimonial, 5000);
});

// Clear interval on component unmount
onUnmounted(() => {
  clearInterval(autoSlide);
});
</script>
