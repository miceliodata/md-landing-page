<script setup lang="ts">
import { getGradientColors } from "@/utils/colorClasses";

import MainCard from "@/components/cards/MainCard.vue";

import { GlobeAltIcon } from "@heroicons/vue/24/outline";
import { CpuChipIcon } from "@heroicons/vue/24/outline";
import { CheckBadgeIcon } from "@heroicons/vue/24/outline";
import { UsersIcon } from "@heroicons/vue/24/outline";
import { ChartBarIcon } from "@heroicons/vue/24/outline";
import { QrCodeIcon } from "@heroicons/vue/24/outline";
import { BoltIcon } from "@heroicons/vue/24/outline";

import { ShoppingCartIcon } from "@heroicons/vue/24/outline";
import { ArrowsPointingInIcon } from "@heroicons/vue/24/outline";
import { SquaresPlusIcon } from "@heroicons/vue/24/outline";

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

const collabModels = [
  {
    icon: ShoppingCartIcon,
    color: "emerald",
    title: "Service Provider",
    desc: "Offer your specialized services directly through our platform",
  },
  {
    icon: ArrowsPointingInIcon,
    color: "teal",
    title: "Integration Partner",
    desc: "Integrate your systems with our ecosystem for seamless operations",
  },
  {
    icon: SquaresPlusIcon,
    color: "sky",
    title: "Strategic Alliance",
    desc: "Long-term partnership for mutual growth and market expansion",
  },
];

const iconClass = (color: string) => {
  const { from, to } = getGradientColors(color);
  return `rounded-full bg-radial ${from} ${to} w-16 h-16 flex items-center justify-center`;
};
</script>

<template>
  <section
    id="partners-section"
    class="scroll-mt-[7rem] h-auto bg-dark px-6 text-gray-100 flex flex-col justify-center py-20"
  >
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold mb-4">Partnership Opportunities</h2>
        <p class="text-gray-300 text-xl">
          We're building a comprehensive ecosystem that requires diverse
          expertise. Find your role in the future of supply chain transparency.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div
          v-for="(feature, index) in partnerFeatures"
          :key="index"
          class="h-full"
        >
          <MainCard
            :hoverEffect="'highlight'"
            :icon="feature.icon"
            :bullet="feature.bullet"
            :color="feature.color"
            :title="feature.title"
            :description="feature.description"
          />
        </div>
      </div>

      <div
        class="max-w-4xl mx-auto text-center p-6 mt-20 rounded-md bg-mid shadow-lg shadow-blue-950/20"
      >
        <h2 class="text-4xl md:text-3xl font-bold text-gray-100 mt-4">
          Collaboration Models
        </h2>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 pt-8">
          <div v-for="(model, index) in collabModels" :key="index" class="p-6">
            <div class="flex justify-center mb-4">
              <div :class="iconClass(model.color)">
                <component :is="model.icon" class="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-200 mb-4">
              {{ model.title }}
            </h3>
            <h4 class="text-gray-300">{{ model.desc }}</h4>
          </div>
        </div>
      </div>

      <div class="w-full mx-auto text-center py-6 mt-20">
        <h2 class="text-4xl md:text-3xl font-bold text-gray-100 mb-10">
          Trusted by Global Leaders
        </h2>

        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style="background: linear-gradient(to right, #393a3d, transparent)"
          ></div>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style="background: linear-gradient(to left, #393a3d, transparent)"
          ></div>

          <div
            class="bg-dark py-10 rounded-xl shadow-inner shadow-black/10 border border-gray-300/60 relative z-0 overflow-hidden"
          >
            <div
              class="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 px-4"
            >
              <a
                href="https://www.bracu.ac.bd/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/BRACU.png"
                  alt="brac-logo"
                  class="h-20 max-h-24 w-auto opacity-80 brightness-200 grayscale invert hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:opacity-100 transition duration-300"
                />
              </a>
              <a
                href="https://cirpass2.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/CIRPASS-2.png"
                  alt="cirpass2-logo"
                  class="h-20 max-h-24 w-auto opacity-80 brightness-200 grayscale invert hover:grayscale-0 hover:invert-0 hover:brightness-100 hover:opacity-100 transition duration-300"
                />
              </a>
              <a
                href="https://gaia-x.eu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/Gaia-X.webp"
                  alt="gaiax-logo"
                  class="h-20 max-h-24 w-auto opacity-80 brightness-200 grayscale hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition duration-300"
                />
              </a>
              <a
                href="https://www.gs1.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="@/assets/GS1.png"
                  alt="gs1-logo"
                  class="h-20 max-h-24 w-auto opacity-80 brightness-200 grayscale hover:grayscale-0 hover:brightness-100 hover:opacity-100 transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
