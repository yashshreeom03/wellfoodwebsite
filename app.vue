
<template>
  
  <div>
    
    <client-only>
      <Preloader />
    </client-only>
    <NuxtLayout>      
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
  <script setup>
  
  import "@/assets/css/Style.css"
  import "@/assets/css/Responsive.css"
  import Preloader from "@/components/Preloader.vue"


  useHead({
  title: "Turn your ideas into great products",
  meta: [
   
    { property: "og:type", content: "website" },
    { property: "og:title", content: "Turn your ideas into great products" },
    { name: "description", content: "The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality." },
    { property: "og:url", content: "https://dev1-shree.github.io/shreeom_website/" },
    { property: "og:image", content: "https://dev1-shree.github.io/shreeom_website/Images/logos/Shreeom logo.png" },

    { name: "twitter:card", content: "summary_large_image" }, 
    { name: "twitter:title", content: "Turn your ideas into great products" },
    { name: "twitter:description", content: "The shreeomsoft is a website and mobile development companies and we are helping startup businesses turn their idea into a digital product into reality." },
    { property: "twitter:url", content: "https://dev1-shree.github.io/shreeom_website/" },
    { name: "twitter:image", content: "https://dev1-shree.github.io/shreeom_website/Images/logos/Shreeom logo.png" },
    { name: "twitter:site", content: "@shreeomTwitterHandle" },
  ],
});
  
  </script>