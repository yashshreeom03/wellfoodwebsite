<script setup>
import ctaBg from "../public/Images/background/cta-section.png";
</script>


<template>
    <section class="pb-[100px] bg-auto bg-center bg-no-repeat" :style="{ backgroundImage: `url(${ctaBg})` }">
        <div class="container">
        <div class="max-w-[375px] mx-auto text-center">
            <h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">Have a big idea?</h2>
            <p class="my-[33px]">Let's bring it to life together!</p>
            <NuxtLink to="/" class="theme-btn px-[60px] py-[14px] inline-block">Get started</NuxtLink>
        </div>
        </div>
    </section>
</template>