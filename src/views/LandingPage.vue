<script setup lang="ts">
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import { onMounted, onBeforeUnmount } from "vue";
import ThreeEarth from "@/components/animations/ThreeEarth.vue";
import HeroSection from "@/components/LandingPage/HeroSection.vue";
import AboutSection from "@/components/LandingPage/AboutSection.vue";
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

  <!-- Left Side Navigation - Hidden on mobile (< md breakpoint) -->
  <SectionNavigator class="hidden md:block" />

  <!-- Back to Top Button -->
  <BackToTop />

  <!-- Main Content - 5 Sections + Footer -->
  <!-- 1. Hero Section -->
  <div class="stacked-section">
    <HeroSection />
  </div>

  <!-- 2. Info / Who We Are -->
  <div class="stacked-section">
    <AboutSection />
  </div>

  <!-- 3. Proposal / Our Offering -->
  <div class="stacked-section">
    <SuppliersSection />
  </div>

  <!-- 4. Partners -->
  <div class="stacked-section">
    <PartnersSection />
  </div>

  <!-- 5. Contact -->
  <div class="stacked-section">
    <ContactSection />
  </div>

  <!-- Footer -->
  <div>
    <SiteFooter />
  </div>
</template>
