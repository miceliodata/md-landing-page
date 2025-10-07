<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { onMounted, onBeforeUnmount } from "vue";
import ThreeEarth from "@/components/animations/ThreeEarth.vue";
import HeroSection from "@/components/LandingPage/HeroSection.vue";
import AboutSection from "@/components/LandingPage/AboutSection.vue";
import BrandsSection from "@/components/LandingPage/BrandsSection.vue";
import PartnersSection from "@/components/LandingPage/PartnersSection.vue";
import ContactSection from "@/components/LandingPage/ContactSection.vue";
import SiteFooter from "@/components/LandingPage/SiteFooter.vue";
import SuppliersSection from "@/components/LandingPage/SuppliersSection.vue";
import SectionNavigator from "@/components/navigation/SectionNavigator.vue";
import BackToTop from "@/components/navigation/BackToTop.vue";
import useScrollAnimations from "@/composables/useScrollAnimations";

const { setupStackedCards, initTextAnimations } = useScrollAnimations();

gsap.registerPlugin(ScrollTrigger);
onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach((trigger: ScrollTrigger) => trigger.kill());
});

onMounted(() => {
  setupStackedCards();
  initTextAnimations();
});
</script>

<template>
  <!-- 3D Earth Background - Fixed across entire page -->
  <ThreeEarth />

  <!-- Left Side Navigation -->
  <SectionNavigator />

  <!-- Back to Top Button -->
  <BackToTop />

  <!-- Main Content -->
  <div class="stacked-section">
    <HeroSection />
  </div>
  <div class="stacked-section">
    <AboutSection />
  </div>
  <div class="stacked-section">
    <SuppliersSection />
  </div>
  <div class="stacked-section">
    <BrandsSection />
  </div>
  <div class="stacked-section">
    <PartnersSection />
  </div>
  <div class="stacked-section">
    <ContactSection />
  </div>
  <div>
    <SiteFooter />
  </div>
</template>
