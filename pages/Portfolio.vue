<script setup>
import Portfolio from "@/components/Portfolio.vue";
import PageBanner from "@/components/PageBanner.vue";
</script>

<template>
  <PageBanner title="Portfolio" breadcrumb="Portfolio"/>
  <section class="pt-[100px] pb-[50px]">
    <div class="container">
      <Portfolio :showCategories="true" />
    </div>
  </section>
</template>
