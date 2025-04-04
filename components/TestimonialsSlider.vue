<template>
  <section id="testimonials-section" class="py-24 bg-white">
      <div class="container">
        <SectionHeader class="text-center" largeMargin = true  title="Testimonials" subtitle="Success stories of our clients" />
        <div class="relative text-center">
          <!-- Navigation Thumbnails -->
          <div class="slider-nav slider-img flex max-w-[650px] mx-auto justify-center gap-4 mb-20">
            <div v-for="(img, index) in images" :key="index">
              <img
                :src="img"
                alt=""
                class="w-[90px] h-[90px] mx-auto rounded-full object-cover transition duration-300 ease-in-out cursor-pointer"
              />
            </div>
          </div>

          <!-- Custom arrows -->
          <button class="custom-prev absolute max-sm:hidden lg:left-[-20px] left-0 top-[60%] leading-[8px] w-11 h-11 rounded-full bg-white text-black text-2xl opacity-50 hover:opacity-100 transition duration-300"
          style="box-shadow: 0px 0px 27px 1px #00000014;">
          <FontAwesomeIcon :icon="faChevronLeft" class="text-sm font-semibold" />
          </button>
          <button class="custom-next absolute max-sm:hidden lg:right-[-20px] right-0 top-[60%] leading-[8px] w-11 h-11 rounded-full bg-white text-black text-2xl opacity-50 hover:opacity-100 transition duration-300"
          style="box-shadow: 0px 0px 27px 1px #00000014;">
          <FontAwesomeIcon :icon="faChevronRight" class="text-sm" />
          </button>

          <!-- Main Slider -->
          <div class="slider-for lg:p-[100px] lg:max-w-[1096px] sm:max-w-[80%] mx-auto p-4 sm:p-[30px] rounded-[40px] bg-[#F0F8EC]">
            <div v-for="(testimonial, index) in testimonials" :key="index">
              <img :src="testimonial.image" alt="Company Logo" class="mx-auto mb-4 w-[150px]" />
              <p class="sm:text-[22px] text-base font-medium text-[#3A701F] my-[50px] sm:leading-relaxed">
                {{ testimonial.text }}
              </p>
              <h6 class="text-lg text-[#3A701F] font-semibold mb-3">{{ testimonial.name }}</h6>
              <p class="text-sm text-[#3A701F]">{{ testimonial.position }}</p>
            </div>
          </div>


        </div>
      </div>
  </section>
</template>



<script setup>
import { ref, onMounted } from "vue";
import $ from "jquery";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { faChevronLeft , faChevronRight } from '@fortawesome/free-solid-svg-icons'

const activeIndex = ref(0);

const images = [
  "/Images/testmonial/reviews-1.png",
  "/Images/testmonial/reviews-2.png",
  "/Images/testmonial/reviews-3.png",
  "/Images/testmonial/reviews-4.png",
  "/Images/testmonial/reviews-5.png",
  "/Images/testmonial/reviews-3.png",
];

const testimonials = [
  {
    name: "Jessica",
    position: "CEO of InnovateTech",
    rating: 5,
    text: "ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. Highly recommend!",
    image: "Images/logos/testmonial-logo-1.png", 
  },
  {
    name: "Peter",
    position: "Stockholm, Sweden",
    rating: 4,
    text: "ShreeOm has been a game-changer for our business! Their IT solutions are innovative, reliable, and perfectly tailored to our needs",
    image: "/Images/logos/testmonial-logo-1.png",
  },
  {
    name: "Jessica",
    position: "Honolulu, HI",
    rating: 5,
    text: "Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help.",
    image: "/Images/logos/testmonial-logo-1.png",
  },
  {
    name: "Peter",
    position: "Stockholm, Sweden",
    rating: 4,
    text: "Their IT solutions are innovative, reliable, and perfectly tailored to our needs. The team is professional and always ready to help. ShreeOm has been a game-changer for our business!",
    image: "/Images/logos/testmonial-logo-1.png",
  },
  {
    name: "Jessica",
    position: "Honolulu, HI",
    rating: 5,
    text: "ShreeOm has been a game-changer for our business...",
    image: "/Images/logos/testmonial-logo-1.png",
  },
  {
    name: "Peter",
    position: "Stockholm, Sweden",
    rating: 4,
    text: "Their IT solutions are innovative and reliable...",
    image: "/Images/logos/testmonial-logo-1.png",
  },
];


onMounted(() => {
  if ($(".slider-for").length > 0) {
    $(".slider-for").slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      asNavFor: ".slider-nav",
      arrows: false,
      centerMode: true,
      centerPadding: "0px",
    });

    $(".slider-nav").slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: ".slider-for",
      dots: false,
      arrows: false,
      centerMode: true,
      centerPadding: "0px",
      focusOnSelect: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 1 } },
      ],
    });

    $(".custom-prev").click(() => $(".slider-for").slick("slickPrev"));
    $(".custom-next").click(() => $(".slider-for").slick("slickNext"));

    $(".slider-for").on("afterChange", function (event, slick, currentSlide) {
      activeIndex.value = currentSlide;
    });
  }
});

</script>

