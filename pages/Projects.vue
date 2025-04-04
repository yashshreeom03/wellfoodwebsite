<script setup>
import Project from "~/components/Projects.vue";
import PageBanner from "@/components/PageBanner.vue";
</script>

<template>
  <PageBanner title="Projects" breadcrumb="Projects"/>
  <section class="py-[100px]">
    <div class="container">
      <Project :showCategories="true" />
    </div>
  </section>
</template>
