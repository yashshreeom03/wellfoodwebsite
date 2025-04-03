<script setup>
import SectionHeader from "@/components/SectionHeader.vue";
import TestimonialsSlider from "@/components/TestimonialsSlider.vue";
import Portfolio from "@/components/Portfolio.vue";
import Services from "@/components/Services.vue";
import Counter from "@/components/Counter.vue"; 
import workingProcess from "../data/workingProcess";
import heroBg from "../public/Images/background/hero-section.png";
import aboutBg from "../public/Images/background/about-section.png";
import workprocessBg from "../public/Images/background/work-process-section.png";
import ctaBg from "../public/Images/background/cta-section.png";

import ai from '../public/Images/icons/ai.png'
import figma from '../public/Images/icons/figma.png'
import star from '../public/Images/icons/star.png'
import vue from '../public/Images/icons/vue.png'
import ps from '../public/Images/icons/ps.png'
import node from '../public/Images/icons/node.png'
import php from '../public/Images/icons/php.png'
import react from '../public/Images/icons/react.png'
// import aboutUs1 from '../public/Images/about/about-us-1.png'
const none = computed(() => "hidden");

import { defineProps } from "vue";

defineProps({
  itemsText: {
    type: Array,
    default: () => new Array(40).fill("Get In Touch"),
  },
});


</script>

<template>
  <!---------- setion1  --------->
  <section class="pt-[187px] pb-11 relative" :style="{ backgroundImage: `url(${heroBg})` }">
    <div class="container">
      <div class="max-w-[834px] text-center mx-auto relative z-10">
        <h6 class="text-base text-primarycolor mb-[38px]">Welcome to Shreeom</h6>
        <h1 class="text-[85px] leading-[102px] font-semibold max-lg:text-5xl max-sm:text-4xl">
          Turn your ideas into great products 
        </h1>
        <p class="mt-[30px] mb-[50px] max-w-[527px] mx-auto text-lg">
          Building an expert software development team for your project, we put your needs first. Let's join us now!
        </p>
        <div class="flex justify-center gap-6 flex-wrap">
          <NuxtLink to="/" class="theme-btn px-[60px] py-[14px]">Let's Talk</NuxtLink>
          <NuxtLink to="/" class="theme-btn-border px-[60px]">About Us</NuxtLink>
        </div>
      </div>
      <div class="grid counter-wrapper lg:grid-cols-4 grid-cols-2 gap-6 mt-[100px] text-center">
        <Counter value="100" label="Projects Delivered" />
        <Counter value="2" label="Years of Experience" />
        <Counter value="98" label="Clients Satisfaction" />
        <Counter value="10" label="Team Members" />
      </div>
    </div>
    <div class="w-[50%] h-[234px] hero-bg absolute top-[30%] left-1/3 z-0">
    </div>
    <div class="absolute rotate-[330deg] bg-white w-[37px] h-[35px] backdrop-blur-[41.2449836730957px] xl:top-[23.5%] xl:left-[22.5%] top-[22%] left-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="ai" alt="ai">
    </div>
    <div class="absolute rotate-12 bg-white w-[50px] h-[50px] backdrop-blur-[41.2449836730957px] xl:top-[42%] xl:left-[17%] top-[45%] left-[15%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="vue" alt="vue">
    </div>
    <div class="absolute rotate-[350deg] bg-white w-[58px] h-[58px] backdrop-blur-[41.2449836730957px] xl:top-[54%] xl:left-[24%] top-[61%] left-[20%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="figma" alt="figma">
    </div>
    <div class="absolute rotate-[40deg] bg-white w-[38px] h-[38px] backdrop-blur-[41.2449836730957px] top-[20%] right-[25%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="ps" alt="ps">
    </div>
    <div class="absolute rotate-[320deg] bg-white w-[51px] h-[51px] backdrop-blur-[41.2449836730957px] xl:top-[38%] xl:right-[20%] lg:top-[38%] top-[34%] right-[13%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="php" alt="php">
    </div>
    <div class="absolute rotate-[25deg] bg-white w-[53px] h-[53px] backdrop-blur-[41.2449836730957px] top-[46%] xl:right-[14%] right-[10%] max-md:hidden rounded-[6px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="node" alt="node">
    </div>
    <div class="absolute rotate-[25deg] bg-white w-[67px] h-[67px] backdrop-blur-[41.2449836730957px] xl:top-[57%] xl:right-[22%] top-[57%] right-[14%] max-md:hidden rounded-[10px] flex items-center justify-center shadow-[2px_5px_20px_0px_#0000000F]">
      <img :src="react" alt="react">
    </div>
  </section>

  
  <section class="pt-[50px] pb-[100px]">
      <div class="container">
        <div>
          <SectionHeader class="text-center" largeMargin = true  title="Our Services" subtitle="Our Core Services we deliver" />
          <Services />
        </div>
      </div>
    </section>


    <section class="pb-[100px] relative">
      <div class="container">
        <div class="flex flex-col gap-6 lg:flex-row items-center justify-between">
            <div class="w-full lg:w-1/2"> 
              <SectionHeader class="mb-[25px]" title="About us" subtitle="The Shreeomsoft Difference"/>
              <p class="mb-[30px] text-lg sm:leading-9">The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn 
                their idea into a digital product into reality. With a team of over 10+ professionals and 2+ years of 
                outstanding service such as branding design, web design & development, app development, maintenance, we are 
                providing dedicated support.</p>
                <NuxtLink to="/" class="inline-block theme-btn px-[60px] py-[14px]">Learn more</NuxtLink>
            </div>
            <div class="w-full lg:w-1/2">
                <img src="../public/Images/about/about-us-1.png" class="mx-auto" alt="">
            </div>
        </div>
      </div>
      <div class="absolute bottom-0 left-[45%] z-[-1]">
         <img :src="aboutBg" alt="">
      </div>
    </section>

    <section class="pb-[80px]">
      <div class="container">
        <div>
          <SectionHeader class="text-center" largeMargin = true  title="Portfolio" subtitle="Our Core Services we deliver" />
          <Portfolio :showCategories="false"/>
        </div>
      </div>
    </section>

    <section class="pb-[100px] bg-auto bg-bottom bg-no-repeat" :style="{ backgroundImage: `url(${workprocessBg})` }">
      <div class="container">
        <div>
          <SectionHeader class="text-center" :largeMargin="true" title="Our working process" subtitle="How to start ?" />
          <div class="grid grid-cols-2 working-wrapper md:grid-cols-4 gap-x-6">
            <div v-for="(step, index) in workingProcess" :key="step.id" class="md:mb-[100px] mb-12">
              <div class="w-[150px] h-[150px] rounded-full mx-auto flex items-center justify-center mb-3"
              :style="{ background: step.bgColor }">
                <img :src="step.image" :alt="step.title"/>
              </div>
              <div class="text-center">
                <p class="text-xl font-semibold">
                  {{ step.id }}. {{ step.title }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <TestimonialsSlider />

    <section class="pt-[100px] pb-[50px] bg-auto bg-center bg-no-repeat" :style="{ backgroundImage: `url(${ctaBg})` }">
        <div class="container">
          <div class="max-w-[375px] mx-auto text-center">
            <h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">Have a big idea?</h2>
            <p class="my-[33px]">Let's bring it to life together!</p>
            <NuxtLink to="/" class="theme-btn px-[60px] py-[14px] inline-block">Get started</NuxtLink>
          </div>
        </div>
    </section>

    <section class="overflow-hidden whitespace-nowrap py-[50px]">
        <div class="flex gap-16 md:gap-[170px] animate-marquee">
          <div v-for="(item, index) in itemsText" :key="index" class="flex items-center gap-4 md:gap-[25px] text-primarycolor">
            <img :src="star" class="max-md:w-[15%]" alt="Star"/>
            <h4 class="text-4xl md:text-[50px] font-semibold">{{ item }}</h4>
          </div>
        </div>
    </section>

</template>
