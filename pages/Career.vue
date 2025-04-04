<script setup>  
import PageBanner from "@/components/PageBanner.vue";
import jobs from "@/data/jobs";
</script>

<template>
        <PageBanner title="Career" breadcrumb="Career"/>
    
        <section class="py-[100px]">
            <div class="container">
                <h2 class="text-black md:text-[45px] md:leading-[50px] mb-[30px] text-3xl font-medium">Engineering</h2>
                    
                <div v-for="(job, index) in jobs" 
                :key="job.title" 
                class="border-b py-9 flex justify-between flex-wrap items-center gap-5 last:border-0">
                    <div>
                        <h3 class="text-3xl font-normal mb-4">{{ job.title }}</h3>
                        <p class="text-black font-medium text-lg">
                        {{ job.location }} . 
                        <span>{{ job.salary }}</span>
                        </p>
                    </div>
                    <NuxtLink to="/CareerDetail" class="text-primarycolor font-semibold text-lg hover:underline">
                        More details
                    </NuxtLink>

                </div>
            </div>
        </section>
</template>
    