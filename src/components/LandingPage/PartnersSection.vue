<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import MainCard from "@/components/cards/MainCard.vue";

import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import { CpuChipIcon } from "@heroicons/vue/24/outline";
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
import { UsersIcon } from "@heroicons/vue/24/outline";
import { ChartBarIcon } from "@heroicons/vue/24/outline";
import { QrCodeIcon } from "@heroicons/vue/24/outline";
import { BoltIcon } from "@heroicons/vue/24/outline";

const partnerFeatures = [
  {
    icon: GlobeAltIcon,
    bullet: BoltIcon,
    color: "text-indigo-500",
    title: "Sourcing Companies",
    description: [
      "Supplier onboarding",
      "Supplier selection and performance management",
      "Quality assurance",
      "Market intelligence",
    ],
  },
  {
    icon: CpuChipIcon,
    bullet: BoltIcon,
    color: "text-blue-500",
    title: "Tech providers",
    description: [
      "API development",
      "Access to a verified data portal",
      "End-to-end integration",
    ],
  },
  {
    icon: CheckBadgeIcon,
    bullet: BoltIcon,
    color: "text-cyan-500",
    title: "Certification agencies",
    description: ["Live verification of data", "Compliance", "Audit"],
  },
  {
    icon: UsersIcon,
    bullet: BoltIcon,
    color: "text-teal-500",
    title: "Industry associations, NGOs, universities",
    description: [
      "Network connections",
      "Operations and sustainability research",
      "Stakeholder training",
      "Industrial development",
    ],
  },
  {
    icon: ChartBarIcon,
    bullet: BoltIcon,
    color: "text-emerald-500",
    title: "Sustainability Consulting & ESG companies",
    description: [
      "Sustainability reporting",
      "ESG consulting",
      "Carbon footprint analysis",
      "Compliance Audit",
    ],
  },
  {
    icon: QrCodeIcon,
    bullet: BoltIcon,
    color: "text-green-500",
    title: "Label, barcode providers",
    description: ["Integration with circularity data", "Digital twins"],
  },
];

// Scroll-based opacity controls for scroll animations
const titleOpacity = ref(0);
const titleTranslateY = ref(0);
const group1Card1Opacity = ref(0);
const group1Card1TranslateY = ref(0);
const group1Card2Opacity = ref(0);
const group1Card2TranslateY = ref(0);
const group1Card3Opacity = ref(0);
const group1Card3TranslateY = ref(0);
const group2Card1Opacity = ref(0);
const group2Card1TranslateY = ref(0);
const group2Card2Opacity = ref(0);
const group2Card2TranslateY = ref(0);
const group2Card3Opacity = ref(0);
const group2Card3TranslateY = ref(0);

// Track scroll position within this section
const handleScroll = () => {
  const section = document.getElementById('partners-section');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  const viewportHeight = window.innerHeight;

  const scrollStart = sectionTop - viewportHeight;
  const scrollRange = sectionHeight + viewportHeight;
  const progress = Math.max(0, Math.min(1, -scrollStart / scrollRange));

  // Check if mobile (< 768px, which is 'md' breakpoint in Tailwind)
  const isMobile = window.innerWidth < 768;

  if (isMobile) {
    // MOBILE: Sequential animation - title fades out, then first 3 cards, then second 3 cards

    // Title: fades in immediately, stays visible, then fades out at 20%
    if (progress < 0.05) {
      titleOpacity.value = 0;
      titleTranslateY.value = 0;
    } else if (progress >= 0.05 && progress < 0.08) {
      const fadeProgress = (progress - 0.05) / 0.03;
      titleOpacity.value = fadeProgress;
      titleTranslateY.value = 0;
    } else if (progress >= 0.08 && progress < 0.20) {
      titleOpacity.value = 1;
      titleTranslateY.value = 0;
    } else if (progress >= 0.20 && progress < 0.25) {
      const fadeProgress = (progress - 0.20) / 0.05;
      titleOpacity.value = 1 - fadeProgress;
      titleTranslateY.value = 0;
    } else {
      titleOpacity.value = 0;
      titleTranslateY.value = 0;
    }

    // Group 1 - All 3 cards: slide in at 23%, stay until 48%, fade out by 53%
    const group1Start = 0.23;
    const group1FadeIn = 0.28;
    const group1FadeOutStart = 0.48;
    const group1FadeOutEnd = 0.53;

    [
      [group1Card1Opacity, group1Card1TranslateY],
      [group1Card2Opacity, group1Card2TranslateY],
      [group1Card3Opacity, group1Card3TranslateY]
    ].forEach(([opacity, translateY]) => {
      if (progress < group1Start) {
        opacity.value = 0;
        translateY.value = 80;
      } else if (progress >= group1Start && progress < group1FadeIn) {
        const fadeProgress = (progress - group1Start) / 0.05;
        opacity.value = fadeProgress;
        translateY.value = 80 - (fadeProgress * 80);
      } else if (progress >= group1FadeIn && progress < group1FadeOutStart) {
        opacity.value = 1;
        translateY.value = 0;
      } else if (progress >= group1FadeOutStart && progress < group1FadeOutEnd) {
        const fadeProgress = (progress - group1FadeOutStart) / 0.06;
        opacity.value = 1 - fadeProgress;
        translateY.value = fadeProgress * 50;
      } else {
        opacity.value = 0;
        translateY.value = 50;
      }
    });

    // Group 2 - All 3 cards: slide in at 51%, stay until end
    const group2Start = 0.51;
    const group2FadeIn = 0.56;

    [
      [group2Card1Opacity, group2Card1TranslateY],
      [group2Card2Opacity, group2Card2TranslateY],
      [group2Card3Opacity, group2Card3TranslateY]
    ].forEach(([opacity, translateY]) => {
      if (progress < group2Start) {
        opacity.value = 0;
        translateY.value = 80;
      } else if (progress >= group2Start && progress < group2FadeIn) {
        const fadeProgress = (progress - group2Start) / 0.05;
        opacity.value = fadeProgress;
        translateY.value = 80 - (fadeProgress * 80);
      } else {
        opacity.value = 1;
        translateY.value = 0;
      }
    });

  } else {
    // DESKTOP: Original animation - title stays visible, all cards slide in sequentially

    // Title: fades in early and stays visible throughout
    if (progress < 0.10) {
      titleOpacity.value = 0;
      titleTranslateY.value = -20;
    } else if (progress >= 0.10 && progress < 0.15) {
      const fadeProgress = (progress - 0.10) / 0.05;
      titleOpacity.value = fadeProgress;
      titleTranslateY.value = -20 + (fadeProgress * 20);
    } else {
      titleOpacity.value = 1;
      titleTranslateY.value = 0;
    }

    // Group 1 - Card 1: slides in from bottom (like dealing cards)
    if (progress < 0.25) {
      group1Card1Opacity.value = 0;
      group1Card1TranslateY.value = 120;
    } else if (progress >= 0.25 && progress < 0.30) {
      const fadeProgress = (progress - 0.25) / 0.05;
      group1Card1Opacity.value = fadeProgress;
      group1Card1TranslateY.value = 120 - (fadeProgress * 120);
    } else {
      group1Card1Opacity.value = 1;
      group1Card1TranslateY.value = 0;
    }

    // Group 1 - Card 2: slides in from bottom, slightly later
    if (progress < 0.28) {
      group1Card2Opacity.value = 0;
      group1Card2TranslateY.value = 120;
    } else if (progress >= 0.28 && progress < 0.33) {
      const fadeProgress = (progress - 0.28) / 0.05;
      group1Card2Opacity.value = fadeProgress;
      group1Card2TranslateY.value = 120 - (fadeProgress * 120);
    } else {
      group1Card2Opacity.value = 1;
      group1Card2TranslateY.value = 0;
    }

    // Group 1 - Card 3: slides in from bottom, last of the three
    if (progress < 0.31) {
      group1Card3Opacity.value = 0;
      group1Card3TranslateY.value = 120;
    } else if (progress >= 0.31 && progress < 0.36) {
      const fadeProgress = (progress - 0.31) / 0.05;
      group1Card3Opacity.value = fadeProgress;
      group1Card3TranslateY.value = 120 - (fadeProgress * 120);
    } else {
      group1Card3Opacity.value = 1;
      group1Card3TranslateY.value = 0;
    }

    // Group 2 - Card 1: slides in from bottom (second row)
    if (progress < 0.40) {
      group2Card1Opacity.value = 0;
      group2Card1TranslateY.value = 120;
    } else if (progress >= 0.40 && progress < 0.45) {
      const fadeProgress = (progress - 0.40) / 0.05;
      group2Card1Opacity.value = fadeProgress;
      group2Card1TranslateY.value = 120 - (fadeProgress * 120);
    } else {
      group2Card1Opacity.value = 1;
      group2Card1TranslateY.value = 0;
    }

    // Group 2 - Card 2: slides in from bottom, slightly later
    if (progress < 0.43) {
      group2Card2Opacity.value = 0;
      group2Card2TranslateY.value = 120;
    } else if (progress >= 0.43 && progress < 0.48) {
      const fadeProgress = (progress - 0.43) / 0.05;
      group2Card2Opacity.value = fadeProgress;
      group2Card2TranslateY.value = 120 - (fadeProgress * 120);
    } else {
      group2Card2Opacity.value = 1;
      group2Card2TranslateY.value = 0;
    }

    // Group 2 - Card 3: slides in from bottom, last of all six cards
    if (progress < 0.46) {
      group2Card3Opacity.value = 0;
      group2Card3TranslateY.value = 120;
    } else if (progress >= 0.46 && progress < 0.51) {
      const fadeProgress = (progress - 0.46) / 0.05;
      group2Card3Opacity.value = fadeProgress;
      group2Card3TranslateY.value = 120 - (fadeProgress * 120);
    } else {
      group2Card3Opacity.value = 1;
      group2Card3TranslateY.value = 0;
    }
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <section
    id="partners-section"
    class="scroll-mt-[7rem] relative"
    style="min-height: 400vh;"
  >
    <!-- Fixed container that stays in viewport -->
    <div class="sticky top-0 h-screen flex items-center justify-center px-6 md:px-16 lg:px-20">
      <div class="w-full max-w-7xl flex flex-col md:block">

        <!-- Title and subtitle - centered on mobile, top on desktop -->
        <div
          :class="[
            'text-center',
            'md:mb-12'
          ]"
          :style="{
            opacity: titleOpacity,
            transform: `translateY(${titleTranslateY}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }"
        >
          <h2 class="text-4xl md:text-5xl font-bold text-gray-100 mb-4">
            Partnership Opportunities
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto px-4">
            We're building a comprehensive ecosystem that requires diverse
            expertise. Find your role in the future of supply chain transparency.
          </p>
        </div>

        <!-- Cards container - single column on mobile (centered), grid on desktop -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-md md:max-w-7xl mx-auto">
          <!-- Row 1 - Card 1 - Sourcing Companies -->
          <div
            :style="{
              transform: `translateY(${group1Card1TranslateY}px)`,
              transition: 'transform 0.4s ease-out',
              pointerEvents: group1Card1Opacity > 0 ? 'auto' : 'none'
            }"
          >
            <div :style="{ opacity: group1Card1Opacity, transition: 'opacity 0.4s ease-out' }">
              <MainCard
                :hoverEffect="'none'"
                :icon="partnerFeatures[0].icon"
                :bullet="partnerFeatures[0].bullet"
                :color="partnerFeatures[0].color"
                :title="partnerFeatures[0].title"
                :description="partnerFeatures[0].description"
              />
            </div>
          </div>

          <!-- Row 1 - Card 2 - Tech providers -->
          <div
            :style="{
              transform: `translateY(${group1Card2TranslateY}px)`,
              transition: 'transform 0.4s ease-out',
              pointerEvents: group1Card2Opacity > 0 ? 'auto' : 'none'
            }"
          >
            <div :style="{ opacity: group1Card2Opacity, transition: 'opacity 0.4s ease-out' }">
              <MainCard
                :hoverEffect="'none'"
                :icon="partnerFeatures[1].icon"
                :bullet="partnerFeatures[1].bullet"
                :color="partnerFeatures[1].color"
                :title="partnerFeatures[1].title"
                :description="partnerFeatures[1].description"
              />
            </div>
          </div>

          <!-- Row 1 - Card 3 - Certification agencies -->
          <div
            :style="{
              transform: `translateY(${group1Card3TranslateY}px)`,
              transition: 'transform 0.4s ease-out',
              pointerEvents: group1Card3Opacity > 0 ? 'auto' : 'none'
            }"
          >
            <div :style="{ opacity: group1Card3Opacity, transition: 'opacity 0.4s ease-out' }">
              <MainCard
                :hoverEffect="'none'"
                :icon="partnerFeatures[2].icon"
                :bullet="partnerFeatures[2].bullet"
                :color="partnerFeatures[2].color"
                :title="partnerFeatures[2].title"
                :description="partnerFeatures[2].description"
              />
            </div>
          </div>

          <!-- Row 2 - Card 1 - Industry associations -->
          <div
            :style="{
              transform: `translateY(${group2Card1TranslateY}px)`,
              transition: 'transform 0.4s ease-out',
              pointerEvents: group2Card1Opacity > 0 ? 'auto' : 'none'
            }"
          >
            <div :style="{ opacity: group2Card1Opacity, transition: 'opacity 0.4s ease-out' }">
              <MainCard
                :hoverEffect="'none'"
                :icon="partnerFeatures[3].icon"
                :bullet="partnerFeatures[3].bullet"
                :color="partnerFeatures[3].color"
                :title="partnerFeatures[3].title"
                :description="partnerFeatures[3].description"
              />
            </div>
          </div>

          <!-- Row 2 - Card 2 - Sustainability Consulting -->
          <div
            :style="{
              transform: `translateY(${group2Card2TranslateY}px)`,
              transition: 'transform 0.4s ease-out',
              pointerEvents: group2Card2Opacity > 0 ? 'auto' : 'none'
            }"
          >
            <div :style="{ opacity: group2Card2Opacity, transition: 'opacity 0.4s ease-out' }">
              <MainCard
                :hoverEffect="'none'"
                :icon="partnerFeatures[4].icon"
                :bullet="partnerFeatures[4].bullet"
                :color="partnerFeatures[4].color"
                :title="partnerFeatures[4].title"
                :description="partnerFeatures[4].description"
              />
            </div>
          </div>

          <!-- Row 2 - Card 3 - Label providers -->
          <div
            :style="{
              transform: `translateY(${group2Card3TranslateY}px)`,
              transition: 'transform 0.4s ease-out',
              pointerEvents: group2Card3Opacity > 0 ? 'auto' : 'none'
            }"
          >
            <div :style="{ opacity: group2Card3Opacity, transition: 'opacity 0.4s ease-out' }">
              <MainCard
                :hoverEffect="'none'"
                :icon="partnerFeatures[5].icon"
                :bullet="partnerFeatures[5].bullet"
                :color="partnerFeatures[5].color"
                :title="partnerFeatures[5].title"
                :description="partnerFeatures[5].description"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
