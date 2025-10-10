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

// Desktop scroll-based controls
const desktopTitleOpacity = ref(1);
const desktopTitleTranslateY = ref(0);

// Desktop card animation controls
const card1Opacity = ref(0);
const card1TranslateX = ref(0);
const card2Opacity = ref(0);
const card2TranslateX = ref(0);
const card3Opacity = ref(0);
const card3TranslateX = ref(0);
const card4Opacity = ref(0);
const card4TranslateX = ref(0);
const card5Opacity = ref(0);
const card5TranslateX = ref(0);
const card6Opacity = ref(0);
const card6TranslateX = ref(0);

// Mobile scroll-based controls
const mobileTitleOpacity = ref(1);
const mobileTitleTranslateY = ref(0);

// Mobile group opacity
const group1Opacity = ref(0);
const group2Opacity = ref(0);

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

  // DESKTOP: Title stays centered and fixed, then unlocks and moves to top
  if (progress < 0.20) {
    // Title stays centered and stationary for user to read
    desktopTitleOpacity.value = 1;
    desktopTitleTranslateY.value = 0;
  } else {
    // Title stays at same position (no movement needed)
    desktopTitleOpacity.value = 1;
    desktopTitleTranslateY.value = 0;
  }

  // Cards appear one by one from left to right (card dealing effect)
  // Start cards appearing after title has moved up
  // Card 1 (top-left)
  if (progress < 0.32) {
    card1Opacity.value = 0;
    card1TranslateX.value = -50;
  } else if (progress >= 0.32 && progress < 0.37) {
    const fadeProgress = (progress - 0.32) / 0.05;
    card1Opacity.value = fadeProgress;
    card1TranslateX.value = -50 + (fadeProgress * 50);
  } else {
    card1Opacity.value = 1;
    card1TranslateX.value = 0;
  }

  // Card 2 (top-center)
  if (progress < 0.35) {
    card2Opacity.value = 0;
    card2TranslateX.value = -50;
  } else if (progress >= 0.35 && progress < 0.40) {
    const fadeProgress = (progress - 0.35) / 0.05;
    card2Opacity.value = fadeProgress;
    card2TranslateX.value = -50 + (fadeProgress * 50);
  } else {
    card2Opacity.value = 1;
    card2TranslateX.value = 0;
  }

  // Card 3 (top-right)
  if (progress < 0.38) {
    card3Opacity.value = 0;
    card3TranslateX.value = -50;
  } else if (progress >= 0.38 && progress < 0.43) {
    const fadeProgress = (progress - 0.38) / 0.05;
    card3Opacity.value = fadeProgress;
    card3TranslateX.value = -50 + (fadeProgress * 50);
  } else {
    card3Opacity.value = 1;
    card3TranslateX.value = 0;
  }

  // Card 4 (bottom-left)
  if (progress < 0.41) {
    card4Opacity.value = 0;
    card4TranslateX.value = -50;
  } else if (progress >= 0.41 && progress < 0.46) {
    const fadeProgress = (progress - 0.41) / 0.05;
    card4Opacity.value = fadeProgress;
    card4TranslateX.value = -50 + (fadeProgress * 50);
  } else {
    card4Opacity.value = 1;
    card4TranslateX.value = 0;
  }

  // Card 5 (bottom-center)
  if (progress < 0.44) {
    card5Opacity.value = 0;
    card5TranslateX.value = -50;
  } else if (progress >= 0.44 && progress < 0.49) {
    const fadeProgress = (progress - 0.44) / 0.05;
    card5Opacity.value = fadeProgress;
    card5TranslateX.value = -50 + (fadeProgress * 50);
  } else {
    card5Opacity.value = 1;
    card5TranslateX.value = 0;
  }

  // Card 6 (bottom-right)
  if (progress < 0.47) {
    card6Opacity.value = 0;
    card6TranslateX.value = -50;
  } else if (progress >= 0.47 && progress < 0.52) {
    const fadeProgress = (progress - 0.47) / 0.05;
    card6Opacity.value = fadeProgress;
    card6TranslateX.value = -50 + (fadeProgress * 50);
  } else {
    card6Opacity.value = 1;
    card6TranslateX.value = 0;
  }
};

const handleScrollMobile = () => {
  const section = document.getElementById('partners-section-mobile');
  if (!section) return;

  const rect = section.getBoundingClientRect();
  const sectionTop = rect.top;
  const sectionHeight = rect.height;
  const viewportHeight = window.innerHeight;

  const scrollStart = sectionTop - viewportHeight;
  const scrollRange = sectionHeight + viewportHeight;
  const progress = Math.max(0, Math.min(1, -scrollStart / scrollRange));

  // MOBILE: Fade out behavior - matches Data Collection section timing
  if (progress < 0.30) {
    mobileTitleOpacity.value = 1;
    mobileTitleTranslateY.value = 0;
  } else if (progress >= 0.30 && progress < 0.35) {
    const fadeProgress = (progress - 0.30) / 0.05;
    mobileTitleOpacity.value = 1 - fadeProgress;
    mobileTitleTranslateY.value = 0;
  } else {
    mobileTitleOpacity.value = 0;
    mobileTitleTranslateY.value = 0;
  }

  // First group of 3 cards: fade in at 33%, stay until 60%, fade out by 65%
  if (progress < 0.33) {
    group1Opacity.value = 0;
  } else if (progress >= 0.33 && progress < 0.38) {
    const fadeProgress = (progress - 0.33) / 0.05;
    group1Opacity.value = fadeProgress;
  } else if (progress >= 0.38 && progress < 0.60) {
    group1Opacity.value = 1;
  } else if (progress >= 0.60 && progress < 0.65) {
    const fadeProgress = (progress - 0.60) / 0.05;
    group1Opacity.value = 1 - fadeProgress;
  } else {
    group1Opacity.value = 0;
  }

  // Second group of 3 cards: fade in at 63%, stay until end
  if (progress < 0.63) {
    group2Opacity.value = 0;
  } else if (progress >= 0.63 && progress < 0.68) {
    const fadeProgress = (progress - 0.63) / 0.05;
    group2Opacity.value = fadeProgress;
  } else {
    group2Opacity.value = 1;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('scroll', handleScrollMobile, { passive: true });
  handleScroll();
  handleScrollMobile();
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('scroll', handleScrollMobile);
});
</script>

<template>
  <!-- DESKTOP SECTION -->
  <section
    id="partners-section"
    class="scroll-mt-[7rem] relative hidden md:block"
    style="min-height: 400vh;"
  >
    <!-- Fixed container that stays in viewport -->
    <div class="sticky top-0 h-screen flex items-center justify-center px-16 lg:px-20">
      <div class="w-full max-w-7xl flex flex-col items-center justify-center">
        <!-- Title and subtitle - moves to top and stays -->
        <div
          class="text-center mb-8"
          :style="{
            opacity: desktopTitleOpacity,
            transform: `translateY(${desktopTitleTranslateY}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }"
        >
          <h2 class="text-5xl font-bold text-gray-100 mb-4">
            Partnership Opportunities
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto">
            We're building a comprehensive ecosystem that requires diverse
            expertise. Find your role in the future of supply chain transparency.
          </p>
        </div>

        <!-- 3x2 grid with card-dealing animation -->
        <div class="grid grid-cols-3 gap-5 w-full max-w-6xl transform scale-95">
          <!-- Row 1 -->
          <div
            :style="{
              opacity: card1Opacity,
              transform: `translateX(${card1TranslateX}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }"
          >
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[0].icon"
              :bullet="partnerFeatures[0].bullet"
              :color="partnerFeatures[0].color"
              :title="partnerFeatures[0].title"
              :description="partnerFeatures[0].description"
            />
          </div>

          <div
            :style="{
              opacity: card2Opacity,
              transform: `translateX(${card2TranslateX}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }"
          >
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[1].icon"
              :bullet="partnerFeatures[1].bullet"
              :color="partnerFeatures[1].color"
              :title="partnerFeatures[1].title"
              :description="partnerFeatures[1].description"
            />
          </div>

          <div
            :style="{
              opacity: card3Opacity,
              transform: `translateX(${card3TranslateX}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }"
          >
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[2].icon"
              :bullet="partnerFeatures[2].bullet"
              :color="partnerFeatures[2].color"
              :title="partnerFeatures[2].title"
              :description="partnerFeatures[2].description"
            />
          </div>

          <!-- Row 2 -->
          <div
            :style="{
              opacity: card4Opacity,
              transform: `translateX(${card4TranslateX}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }"
          >
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[3].icon"
              :bullet="partnerFeatures[3].bullet"
              :color="partnerFeatures[3].color"
              :title="partnerFeatures[3].title"
              :description="partnerFeatures[3].description"
            />
          </div>

          <div
            :style="{
              opacity: card5Opacity,
              transform: `translateX(${card5TranslateX}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }"
          >
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[4].icon"
              :bullet="partnerFeatures[4].bullet"
              :color="partnerFeatures[4].color"
              :title="partnerFeatures[4].title"
              :description="partnerFeatures[4].description"
            />
          </div>

          <div
            :style="{
              opacity: card6Opacity,
              transform: `translateX(${card6TranslateX}px)`,
              transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
            }"
          >
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
  </section>

  <!-- MOBILE SECTION -->
  <section
    id="partners-section-mobile"
    class="scroll-mt-[7rem] relative md:hidden"
    style="min-height: 400vh;"
  >
    <!-- Fixed container that stays in viewport -->
    <div class="sticky top-0 h-screen flex items-center justify-center px-8 py-8">
      <div class="w-full max-w-sm">
        <!-- Title and subtitle - fades out -->
        <div
          class="text-center mb-12"
          :style="{
            opacity: mobileTitleOpacity,
            transform: `translateY(${mobileTitleTranslateY}px)`,
            transition: 'opacity 0.3s ease-out, transform 0.3s ease-out'
          }"
        >
          <h2 class="text-4xl font-bold text-gray-100 mb-4">
            Partnership Opportunities
          </h2>
          <p class="text-lg text-gray-300 leading-relaxed px-4">
            We're building a comprehensive ecosystem that requires diverse
            expertise. Find your role in the future of supply chain transparency.
          </p>
        </div>

        <!-- First group of 3 cards (vertical stack) -->
        <div
          class="flex flex-col gap-4 w-full absolute inset-0 justify-center px-8 py-8"
          :style="{
            opacity: group1Opacity,
            transition: 'opacity 0.3s ease-out',
            pointerEvents: group1Opacity > 0 ? 'auto' : 'none'
          }"
        >
          <div class="transform scale-90">
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[0].icon"
              :bullet="partnerFeatures[0].bullet"
              :color="partnerFeatures[0].color"
              :title="partnerFeatures[0].title"
              :description="partnerFeatures[0].description"
            />
          </div>
          <div class="transform scale-90">
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[1].icon"
              :bullet="partnerFeatures[1].bullet"
              :color="partnerFeatures[1].color"
              :title="partnerFeatures[1].title"
              :description="partnerFeatures[1].description"
            />
          </div>
          <div class="transform scale-90">
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

        <!-- Second group of 3 cards (vertical stack) -->
        <div
          class="flex flex-col gap-4 w-full absolute inset-0 justify-center px-8 py-8"
          :style="{
            opacity: group2Opacity,
            transition: 'opacity 0.3s ease-out',
            pointerEvents: group2Opacity > 0 ? 'auto' : 'none'
          }"
        >
          <div class="transform scale-90">
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[3].icon"
              :bullet="partnerFeatures[3].bullet"
              :color="partnerFeatures[3].color"
              :title="partnerFeatures[3].title"
              :description="partnerFeatures[3].description"
            />
          </div>
          <div class="transform scale-90">
            <MainCard
              :hoverEffect="'none'"
              :icon="partnerFeatures[4].icon"
              :bullet="partnerFeatures[4].bullet"
              :color="partnerFeatures[4].color"
              :title="partnerFeatures[4].title"
              :description="partnerFeatures[4].description"
            />
          </div>
          <div class="transform scale-90">
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
  </section>
</template>
