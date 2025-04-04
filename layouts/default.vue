<script setup>
import Header from "~/components/Header.vue";
import cta from "../components/cta.vue";
import Footer from "~/components/Footer.vue";
import ScrollToTopButton from "~/components/ScrollToTopButton.vue";
</script>

<template>
  <!-- Header Section -->
  <Header />
  <!-- Page Content -->
  <main>
    <slot />
  </main>
  
  <!-- Cta Section -->
  <cta />

  <!-- Footer Section -->
  <Footer />

  <!-- scroll to top buttton  -->
  <ScrollToTopButton />
</template>
