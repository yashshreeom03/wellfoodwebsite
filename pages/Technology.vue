<script setup>  
import PageBanner from "@/components/PageBanner.vue";
import techStack from "@/data/techStack";
</script>

<template>
        <PageBanner title="Technology" breadcrumb="Technology"/>
    
        <section class="py-[100px]">
            <div class="container">
                <div v-for="category in techStack" :key="category.category" class="mb-[100px]">
                    <h2 class="text-2xl font-medium mb-9 max-sm:text-center">{{ category.category }}</h2>
                    <div class="flex flex-wrap max-sm:justify-center gap-4">
                        <div
                        v-for="tech in category.technologies"
                        :key="tech.name"
                        class="border rounded-[15px] h-[148px] w-[200px] p-4 flex flex-col justify-center items-center gap-[15px]"
                        >
                        <img :src=tech.icon alt="" />
                        <span class="text-lg font-medium">{{ tech.name }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</template>
    