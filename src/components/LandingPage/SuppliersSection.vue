<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import MainCard from "@/components/cards/MainCard.vue";

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

// Scroll-based opacity controls
const introOpacity = ref(1);
const card1Opacity = ref(0);
const card2Opacity = ref(0);
const card3Opacity = ref(0);

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

  // Intro fades out in first 12% of section scroll
  if (progress < 0.12) {
    introOpacity.value = 1 - (progress / 0.12);
  } else {
    introOpacity.value = 0;
  }

  // Card 1: fades in from 18% to 25%, stays visible until 32%, fades out by 38%
  if (progress < 0.18) {
    card1Opacity.value = 0;
  } else if (progress >= 0.18 && progress < 0.25) {
    card1Opacity.value = (progress - 0.18) / 0.07; // Fade in
  } else if (progress >= 0.25 && progress < 0.32) {
    card1Opacity.value = 1; // Fully visible
  } else if (progress >= 0.32 && progress < 0.38) {
    card1Opacity.value = 1 - ((progress - 0.32) / 0.06); // Fade out
  } else {
    card1Opacity.value = 0;
  }

  // Card 2: fades in from 44% to 51%, stays visible until 58%, fades out by 64%
  if (progress < 0.44) {
    card2Opacity.value = 0;
  } else if (progress >= 0.44 && progress < 0.51) {
    card2Opacity.value = (progress - 0.44) / 0.07; // Fade in
  } else if (progress >= 0.51 && progress < 0.58) {
    card2Opacity.value = 1; // Fully visible
  } else if (progress >= 0.58 && progress < 0.64) {
    card2Opacity.value = 1 - ((progress - 0.58) / 0.06); // Fade out
  } else {
    card2Opacity.value = 0;
  }

  // Card 3: fades in from 70% to 77%, stays visible until 84%, fades out by 90%
  if (progress < 0.70) {
    card3Opacity.value = 0;
  } else if (progress >= 0.70 && progress < 0.77) {
    card3Opacity.value = (progress - 0.70) / 0.07; // Fade in
  } else if (progress >= 0.77 && progress < 0.84) {
    card3Opacity.value = 1; // Fully visible
  } else if (progress >= 0.84 && progress < 0.90) {
    card3Opacity.value = 1 - ((progress - 0.84) / 0.06); // Fade out
  } else {
    card3Opacity.value = 0;
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
    style="min-height: 400vh;"
  >
    <!-- Fixed container that stays in viewport -->
    <div class="sticky top-0 h-screen flex items-center justify-start px-8 md:px-16 lg:px-20">
      <!-- Content container - left half of viewport -->
      <div class="w-full md:w-1/2 relative">
        <!-- Intro text (fades out first) -->
        <div
          class="absolute inset-0 flex flex-col justify-center transition-opacity duration-500"
          :style="{ opacity: introOpacity, pointerEvents: introOpacity > 0 ? 'auto' : 'none' }"
        >
          <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-6">
            Data Collection for Every Scale
          </h2>
          <p class="text-lg text-gray-300 max-w-xl leading-relaxed">
            Whether you're a large manufacturer or a small artisan, we have the
            right solution for your data collection needs. Integrate sustainability
            data with systems tailored to your operational capacity, generate
            Digital Product Passports, and ensure compliance with evolving EU
            regulations while connecting with EU brands seeking DPP compliance.
          </p>
        </div>

        <!-- Card 1 - Tier 1 -->
        <div
          class="absolute inset-0 flex items-center transition-opacity duration-500"
          :style="{ opacity: card1Opacity, pointerEvents: card1Opacity > 0 ? 'auto' : 'none' }"
        >
          <div class="w-full max-w-md">
            <MainCard
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
          class="absolute inset-0 flex items-center transition-opacity duration-500"
          :style="{ opacity: card2Opacity, pointerEvents: card2Opacity > 0 ? 'auto' : 'none' }"
        >
          <div class="w-full max-w-md">
            <MainCard
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
          class="absolute inset-0 flex items-center transition-opacity duration-500"
          :style="{ opacity: card3Opacity, pointerEvents: card3Opacity > 0 ? 'auto' : 'none' }"
        >
          <div class="w-full max-w-md">
            <MainCard
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
