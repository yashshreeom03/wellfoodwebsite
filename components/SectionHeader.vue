<template>
  <div :class="shouldApplyMargin ? 'mb-[80px]' : '?'">
    <h6 class="text-base text-primarycolor mb-[30px]">
      {{ title }}
    </h6>
    <h2 class="text-black md:text-[45px] md:leading-[50px] text-3xl font-semibold">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subtitle: String,
    largeMargin: Boolean, // Control margin with a prop
  },
  computed: {
    shouldApplyMargin() {
      return this.largeMargin; 
    },
  },
};
</script>
