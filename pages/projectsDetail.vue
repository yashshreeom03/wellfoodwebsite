<script setup>    
import PageBanner from "@/components/PageBanner.vue";
import portfolioData from "@/data/projectsDetail";
</script>

<template>
      <PageBanner title="Predict future performance to plan better now" breadcrumb="Predict future performance to plan better now"/>
      <section class="py-[100px]">
        <div class="container">
            <div class="flex max-lg:flex-col gap-6 justify-between">
                <div>
                    <h2 class="text-2xl font-medium mb-12">Project Overview</h2>
                    <p class="text-lg leading-9">Wrangle is a Slack management tool designed to help business teams manage channels, messages, and tasks more efficiently 
                        within Slack. The goal was to create an intuitive and powerful interface that seamlessly integrates with Slack, 
                        allowing team members to automate repetitive tasks, organize conversations, and improve team collaboration.Wrangle is 
                        a Slack management tool designed to help business teams manage channels, messages, and tasks more efficiently within Slack. 
                        The goal was to create an intuitive and powerful interface that seamlessly integrates with Slack, allowing team members 
                        to automate repetitive tasks, organize conversations, and improve team collaboration.</p>
                </div>
                <div class="w-full">
                    <div class="lg:min-w-[426px] w-full border border-[#EDEDED] rounded-xl p-[30px]">
                    <div class="mb-5">
                        <h4 class="text-lg font-semibold">Category :
                        <span class="text-lg font-medium">Dashboard</span></h4>
                    </div>
                    <div class="mb-5">
                        <h4 class="text-lg font-semibold">Author :
                        <span class="text-lg font-medium">Shreeomsoft</span></h4>
                    </div>
                    <div class="mb-5">
                        <h4 class="text-lg font-semibold">Created date :
                        <span class="text-lg font-medium">3 April 2025</span></h4>
                    </div>
                    <div class="mb-5">
                        <h4 class="font-semibold text-lg">Technologies Used :
                        <span class="text-lg font-medium">Figma , WordPress , html, css, sass, jQuery, PHP, Next,  Node.js , Larvel</span></h4>
                    </div>
                    <div>
                        <NuxtLink to="" class="text-lg font-semibold underline text-primarycolor cursor-pointer">
                            Live Link
                        </NuxtLink>
                    </div>
                </div>
                </div>
            </div>
        </div>
      </section>
      <section class="pb-[100px]">
            <div class="container">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[29px]">
                    <div 
                        v-for="(item, index) in portfolioData"
                        :key="item.id"
                        class="p-[17px] rounded-lg bg-[#03987308]">
                        <img 
                        :src="item.image"
                        :alt="item.title" 
                        class="w-full rounded-lg transform transition duration-300 ease-in-out hover:scale-105" />
                    </div>

                </div>
            </div>
      </section>
  </template>
  
  
  