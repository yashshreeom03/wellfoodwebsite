<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { useRoute } from "vue-router";

const logo = '/shreeom_website/Images/logos/logo.png'; 
const menuOpen = ref(false);
const isSticky = ref(false);
const route = useRoute();

// Toggle mobile menu
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

// Close mobile menu
const closeMenu = () => {
  menuOpen.value = false;
};
// Handle scroll to add sticky class
const handleScroll = () => {
  isSticky.value = window.scrollY > 200;
};

// Add & remove event listener
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
    <header class="bg-transparent py-7 absolute top-0 left-0 w-full z-50 transition-all duration-1000" :class="{ 'sticky top-0 bg-white/30 backdrop-blur-[50px] w-full shadow-lg py-4 animate-fadeInDown': isSticky }" >
        <div class="container">
            <div class="flex items-center justify-between gap-4">
                <!-- Logo -->
                <div class="flex items-center gap-4">
                    <NuxtLink to="/" class="block">
                        <img :src="logo" alt="main logo" class="h-auto w-auto max-sm:w-4/5" />
                    </NuxtLink>
                </div>

                <!-- Desktop Navigation -->
                <nav class="hidden lg:flex gap-10">
                    <NuxtLink to="/services" class="text-lg font-medium text-black hover:text-primarycolor transition">Services</NuxtLink>
                    <NuxtLink to="/technology" class="text-lg font-medium text-black hover:text-primarycolor transition">Technology</NuxtLink>
                    <NuxtLink to="/projects" class="text-lg font-medium text-black hover:text-primarycolor transition">Projects</NuxtLink>
                    <NuxtLink to="/" class="text-lg font-medium text-black hover:text-primarycolor transition">Company</NuxtLink>
                    <NuxtLink to="/career" class="text-lg font-medium text-black hover:text-primarycolor transition">Career</NuxtLink>
                    <NuxtLink to="/contact" class="lg:hidden">Contact Us</NuxtLink>
                </nav>

                <!-- Mobile Menu Overlay -->
                <div class="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-50 z-40 transition-opacity duration-300 lg:hidden" :class="{ 'opacity-100 visible': menuOpen, 'opacity-0 invisible': !menuOpen }"
                @click="closeMenu"></div>

                <!-- Mobile Navigation -->
                <nav class="fixed top-0 left-0 w-[320px] bg-white shadow-lg h-screen z-50 transition-transform duration-300 lg:hidden" :class="{ 'translate-x-0': menuOpen, '-translate-x-full': !menuOpen }" >
                    <div class="px-4 py-8 border-b border-gray-100 flex justify-between items-center">
                        <NuxtLink to="/" class="block">
                        <img :src="logo" alt="main logo" class="h-auto w-[60%]" />
                        </NuxtLink>
                        <button class="lg:hidden" @click="closeMenu" aria-label="Close menu">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black">
                            <path d="M13.5857 2.39091C14.1323 1.84429 14.1323 0.956583 13.5857 0.409964C13.039 -0.136655 12.1513 -0.136655 11.6047 0.409964L7 5.01905L2.39091 0.414337C1.84429 -0.132282 0.956583 -0.132282 0.409964 0.414337C-0.136655 0.960956 -0.136655 1.84866 0.409964 2.39528L5.01905 7L0.414337 11.6091C-0.132282 12.1557 -0.132282 13.0434 0.414337 13.59C0.960956 14.1367 1.84866 14.1367 2.39528 13.59L7 8.98095L11.6091 13.5857C12.1557 14.1323 13.0434 14.1323 13.59 13.5857C14.1367 13.039 14.1367 12.1513 13.59 11.6047L8.98095 7L13.5857 2.39091Z"
                            fill="black" />
                        </svg>
                        </button>
                    </div>

                    <!-- Mobile Menu Items -->
                    <ul class="flex flex-col">
                        <li v-for="(item, index) in ['Services', 'Technology', 'Projects', 'Company', 'Career', 'Contact']" :key="index" class="py-3 border-b border-gray-100 px-4">
                        <NuxtLink :to="'/' + item.toLowerCase()" @click="closeMenu" class="text-lg font-medium hover:text-primarycolor transition">
                            {{ item }}
                        </NuxtLink>
                        </li>
                    </ul>
                </nav>

                <!-- Mobile Menu Button -->
                <button class="block lg:hidden p-2" @click="toggleMenu" aria-label="Open menu">
                    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black">
                        <path d="M17 13H1M17 7H1M17 1H1" stroke="black" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <!-- Contact Button -->
                <NuxtLink to="/contact" class="lg:flex hidden theme-btn" aria-label="Contact Us">
                        Contact Us
                </NuxtLink>
            </div>
        </div>
    </header>
</template>
