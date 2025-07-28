<script setup lang="ts">
import { onMounted, onBeforeUnmount } from "vue"
import HeroSection from '@/components/LandingPage/HeroSection.vue'
import MenuSection from '@/components/LandingPage/MenuSection.vue'
import BrandsSection from '@/components/LandingPage/BrandsSection.vue'
import PartnersSection from '@/components/LandingPage/PartnersSection.vue'
import NewsletterSection from '@/components/LandingPage/NewsletterSection.vue'
import SiteFooter from '@/components/LandingPage/SiteFooter.vue'
import SuppliersSection from '@/components/LandingPage/SuppliersSection.vue'

import useScrollAnimations from "../composables/useScrollAnimations"

const { setupStackedCards } = useScrollAnimations();

onBeforeUnmount(() => {
  ScrollTrigger.getAll().forEach(trigger => trigger.kill());
});

onMounted(() => {
  setupStackedCards();
});
</script>

<template>
  <div class="stacked-section">
    <HeroSection />
  </div>
  <div class="stacked-section">
    <MenuSection />
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
    <NewsletterSection />
  </div>
  <div>
    <SiteFooter />
  </div>
  <!-- ... -->
</template>