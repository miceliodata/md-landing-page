<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import TierCard from "@/components/cards/TierCard.vue";

import FactoryIcon from "@/assets/factory.svg";
import { BoltIcon } from "@heroicons/vue/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/vue/24/outline";
import { UserIcon } from "@heroicons/vue/24/outline";

const tiers = [
  {
    icon: FactoryIcon,
    bullet: BoltIcon,
    color: "text-emerald-500",
    tier: "Tier 1",
    title: "Manufacturers",
    subtitle: "Large-scale operations with advanced systems",
    description: [
      "API Integration",
      "Real-time data sync",
      "ERP connectivity",
      "Automated compliance",
    ],
  },
  {
    icon: BuildingStorefrontIcon,
    bullet: BoltIcon,
    color: "text-blue-500",
    tier: "Tier 2-3",
    title: "Suppliers",
    subtitle: "Mid-scale operations with structured processes",
    description: [
      "CSV Upload",
      "Batch processing",
      "Template-based entry",
      "Quality verification",
    ],
  },
  {
    icon: UserIcon,
    bullet: BoltIcon,
    color: "text-indigo-500",
    tier: "Tier 4",
    title: "Artisans",
    subtitle: "Small-scale craftspeople and workshops",
    description: [
      "Mobile capture",
      "Photo documentation",
      "Voice notes",
      "Simple interfaces",
    ],
  },
];

// Scroll-based opacity and position controls
const introOpacity = ref(1);
const introTranslateX = ref(0);
const card1Opacity = ref(0);
const card1TranslateX = ref(0);
const card2Opacity = ref(0);
const card2TranslateX = ref(0);
const card3Opacity = ref(0);
const card3TranslateX = ref(0);

// Track scroll position within this section
const handleScroll = () => {
  const section = document.getElementById('suppliers-section');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  const viewportHeight = window.innerHeight;

  // Calculate progress through the section (0 = top, 1 = bottom)
  // We use a range from when section enters viewport to when it leaves
  const scrollStart = sectionTop - viewportHeight;
  const scrollRange = sectionHeight + viewportHeight;
  const progress = Math.max(0, Math.min(1, -scrollStart / scrollRange));

  // Intro: appears immediately, stays until 30%, then fades out by 35%
  if (progress < 0.30) {
    introOpacity.value = 1; // Fully visible
    introTranslateX.value = 0; // Centered
  } else if (progress >= 0.30 && progress < 0.35) {
    const fadeProgress = (progress - 0.30) / 0.05;
    introOpacity.value = 1 - fadeProgress; // Quick fade out
    introTranslateX.value = fadeProgress * 50; // Subtle left-to-right motion
  } else {
    introOpacity.value = 0;
    introTranslateX.value = 50;
  }

  // Card 1: fades in from 33% to 38%, stays visible until 52%, fades out by 58%
  if (progress < 0.33) {
    card1Opacity.value = 0;
    card1TranslateX.value = -30; // Start off-screen left
  } else if (progress >= 0.33 && progress < 0.38) {
    const fadeProgress = (progress - 0.33) / 0.05;
    card1Opacity.value = fadeProgress; // Fade in
    card1TranslateX.value = -30 + (fadeProgress * 30); // Slide in from left
  } else if (progress >= 0.38 && progress < 0.52) {
    card1Opacity.value = 1; // Fully visible longer
    card1TranslateX.value = 0; // Centered
  } else if (progress >= 0.52 && progress < 0.58) {
    const fadeProgress = (progress - 0.52) / 0.06;
    card1Opacity.value = 1 - fadeProgress; // Fade out
    card1TranslateX.value = fadeProgress * 50; // Slide right while fading
  } else {
    card1Opacity.value = 0;
    card1TranslateX.value = 50;
  }

  // Card 2: fades in from 56% to 61%, stays visible until 74%, fades out by 80%
  if (progress < 0.56) {
    card2Opacity.value = 0;
    card2TranslateX.value = -30;
  } else if (progress >= 0.56 && progress < 0.61) {
    const fadeProgress = (progress - 0.56) / 0.05;
    card2Opacity.value = fadeProgress;
    card2TranslateX.value = -30 + (fadeProgress * 30);
  } else if (progress >= 0.61 && progress < 0.74) {
    card2Opacity.value = 1; // Fully visible longer
    card2TranslateX.value = 0;
  } else if (progress >= 0.74 && progress < 0.80) {
    const fadeProgress = (progress - 0.74) / 0.06;
    card2Opacity.value = 1 - fadeProgress;
    card2TranslateX.value = fadeProgress * 50;
  } else {
    card2Opacity.value = 0;
    card2TranslateX.value = 50;
  }

  // Card 3: fades in from 78% to 83%, stays visible until 88%, fades out by 93%
  if (progress < 0.78) {
    card3Opacity.value = 0;
    card3TranslateX.value = -30;
  } else if (progress >= 0.78 && progress < 0.83) {
    const fadeProgress = (progress - 0.78) / 0.05;
    card3Opacity.value = fadeProgress;
    card3TranslateX.value = -30 + (fadeProgress * 30);
  } else if (progress >= 0.83 && progress < 0.88) {
    card3Opacity.value = 1; // Fully visible
    card3TranslateX.value = 0;
  } else if (progress >= 0.88 && progress < 0.93) {
    const fadeProgress = (progress - 0.88) / 0.05;
    card3Opacity.value = 1 - fadeProgress;
    card3TranslateX.value = fadeProgress * 50;
  } else {
    card3Opacity.value = 0;
    card3TranslateX.value = 50;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial calculation
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    id="suppliers-section"
    class="scroll-mt-[7rem] relative"
    style="min-height: 500vh;"
  >
    <!-- Fixed container that stays in viewport -->
    <div class="sticky top-0 h-screen flex items-center justify-start px-8 md:px-16 lg:px-20">
      <!-- Content container - left half of viewport -->
      <div class="w-full md:w-1/2 relative">
        <!-- Intro text (fades out first) -->
        <div
          class="absolute inset-0 flex flex-col justify-center items-center"
          :style="{
            opacity: introOpacity,
            transform: `translateX(${introTranslateX}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            pointerEvents: introOpacity > 0 ? 'auto' : 'none'
          }"
        >
          <div class="max-w-xl">
            <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
              Data Collection for Every Scale
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              Whether you're a large manufacturer or a small artisan, we have the
              right solution for your data collection needs. Integrate sustainability
              data with systems tailored to your operational capacity, generate
              Digital Product Passports, and ensure compliance with evolving EU
              regulations while connecting with EU brands seeking DPP compliance.
            </p>
          </div>
        </div>

        <!-- Card 1 - Tier 1 -->
        <div
          class="absolute inset-0 flex items-center"
          :style="{
            opacity: card1Opacity,
            transform: `translateX(${card1TranslateX}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            pointerEvents: card1Opacity > 0 ? 'auto' : 'none'
          }"
        >
          <div class="w-full max-w-md">
            <TierCard
              :hoverEffect="'none'"
              :product="tiers[0].tier"
              :bullet="tiers[0].bullet"
              :color="tiers[0].color"
              :icon="tiers[0].icon"
              :title="tiers[0].title"
              :subtitle="tiers[0].subtitle"
              :description="tiers[0].description"
            />
          </div>
        </div>

        <!-- Card 2 - Tier 2-3 -->
        <div
          class="absolute inset-0 flex items-center"
          :style="{
            opacity: card2Opacity,
            transform: `translateX(${card2TranslateX}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            pointerEvents: card2Opacity > 0 ? 'auto' : 'none'
          }"
        >
          <div class="w-full max-w-md">
            <TierCard
              :hoverEffect="'none'"
              :product="tiers[1].tier"
              :bullet="tiers[1].bullet"
              :color="tiers[1].color"
              :icon="tiers[1].icon"
              :title="tiers[1].title"
              :subtitle="tiers[1].subtitle"
              :description="tiers[1].description"
            />
          </div>
        </div>

        <!-- Card 3 - Tier 4 -->
        <div
          class="absolute inset-0 flex items-center"
          :style="{
            opacity: card3Opacity,
            transform: `translateX(${card3TranslateX}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out',
            pointerEvents: card3Opacity > 0 ? 'auto' : 'none'
          }"
        >
          <div class="w-full max-w-md">
            <TierCard
              :hoverEffect="'none'"
              :product="tiers[2].tier"
              :bullet="tiers[2].bullet"
              :color="tiers[2].color"
              :icon="tiers[2].icon"
              :title="tiers[2].title"
              :subtitle="tiers[2].subtitle"
              :description="tiers[2].description"
            />
          </div>
        </div>
      </div>

      <!-- Right half for Earth visualization (empty, Earth is fixed on right side) -->
      <div class="hidden md:block w-1/2"></div>
    </div>
  </section>
</template>
