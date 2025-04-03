<script setup>
import Header from "~/components/Header.vue";
import Loader from "@/components/Preloader.vue";
import Footer from "~/components/Footer.vue";
import ScrollToTopButton from "~/components/ScrollToTopButton.vue";
</script>

<template>
  <!-- Header Section -->
  <Header />
  <Loader />
  <!-- Page Content -->
  <main>
    <slot />
  </main>

  <!-- Footer Section -->
  <Footer />

  <!-- scroll to top buttton  -->
  <ScrollToTopButton />
</template>
