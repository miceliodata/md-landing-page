<script setup lang="ts">
// import { ChartBarIcon } from "@heroicons/vue/24/outline";
// import { ClipboardDocumentListIcon } from "@heroicons/vue/24/outline";
// import { CheckCircleIcon } from "@heroicons/vue/24/outline";

// const brandFeatures = [
//   {
//     icon: ChartBarIcon,
//     color: 'text-indigo-500',
//     title: 'Real-time Dashboard',
//     description: 'Monitor your entire supply chain in one place'
//   },
//   {
//     icon: ClipboardDocumentListIcon,
//     color: 'text-blue-500',
//     title: 'Compliance Tracking',
//     description: 'Automated DPP regulation compliance monitoring'
//   },
//   {
//     icon: CheckCircleIcon,
//     color: 'text-teal-500',
//     title: 'Verified Data',
//     description: 'All supplier data verified through our network'
//   }
// ]
</script>

<template>
  <section
    id="brands-section"
    class="scroll-mt-[7rem] h-auto bg-white py-20 px-6 flex flex-col justify-center items-center"
  >
    <div>
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-5xl font-bold text-gray-900 mb-4">
          Everything You Need for DPP
        </h2>
        <p class="text-gray-700 text-lg">
          Our platform provides complete visibility into your Asian supply
          chain, ensuring full compliance with EU Digital Product Passport
          regulations.
        </p>
      </div>

      <!-- <div class="grid gap-12 sm:grid-cols-1 md:grid-cols-3 mb-24">
        <div 
          v-for="(feature, index) in brandFeatures"
          :key="index"
          class="flex"
        >
          <div class="p-6 rounded-md shadow-lg bg-gray-50 flex flex-col flex-1 h-full items-center hover:-translate-y-1 hover:transition-all hover:duration-300">
            <component :is="feature.icon" :class="`${feature.color} w-10 h-10 mb-4`" />
            <h2 class="text-xl font-semibold text-center mb-4">{{ feature.title }}</h2>
            <p class="font-light text-gray-800 text-center">{{ feature.description }}</p>
          </div>
        </div>
      </div> -->
    </div>

    <ul
      class="list-disc list-outside pl-6 text-gray-700 marker:text-emerald-700 text-lg marker:text-2xl space-y-3 max-w-3xl mx-auto mb-18"
    >
      <li>
        Ensure end-to-end supply chain visibility with single source of data
      </li>
      <li>Enhance consumer trust through greater transparency</li>
      <li>Have access to verified supplier network</li>
    </ul>

    <div class="max-w-6xl mx-auto">
      <div class="flex flex-col md:flex-row">
        <div class="flex-1 flex flex-col items-center">
          <div
            class="max-h-24 flex-1 bg-gradient-to-r from-blue-700 to-sky-500 text-white py-8 px-16 relative rounded-lg hover:bg-gradient-to-r hover:from-blue-500 hover:to-sky-300 duration-300 transition-colors clip-chevron-start"
          >
            <h3 class="text-2xl font-bold mb-2">Connect</h3>
          </div>
          <p class="font-light text-center my-3 max-w-50">
            Connect your supply chain and suppliers
          </p>
        </div>
        <div class="flex-1 flex flex-col items-center">
          <div
            class="max-h-24 flex-1 bg-gradient-to-r from-sky-500 to-cyan-600 text-white py-8 px-20 relative hover:bg-gradient-to-r hover:from-sky-300 hover:to-cyan-400 duration-300 transition-colors clip-chevron-next"
          >
            <h3 class="text-2xl font-bold mb-3">Verify</h3>
          </div>
          <p class="font-light text-center my-2 max-w-50">
            Verify data quality of suppliers via accurate, traceable information
          </p>
        </div>
        <div class="flex-1 flex flex-col items-center">
          <div
            class="max-h-24 flex-1 bg-gradient-to-r from-cyan-600 to-emerald-500 text-white py-8 px-16 relative hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-300 duration-300 transition-colors clip-chevron-next"
          >
            <h3 class="text-2xl font-bold mb-2">Generate</h3>
          </div>
          <p class="font-light text-center my-3 max-w-50">
            Generate Digital Product Passport via an automated system
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="md:flex md:items-center">
      <div class="max-w-4xl mx-auto text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 px-12 mb-4">
          Your Path to Compliance
        </h2>
        <p class="text-gray-700 text-md mb-12">
          Simple, step-by-step process to achieve DPP compliance
        </p>
      </div>

      <div
        class="relative border-l-2 border-gray-200 ml-4 pl-6 space-y-12 max-w-3xl mx-auto"
      >
        <div class="group relative">
          <div
            class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"
          ></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">
            1. Connect Your Supply Chain
          </h3>
          <p class="text-gray-600 mt-2">
            Integrate with your existing Asian suppliers
          </p>
        </div>

        <div class="group relative">
          <div
            class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"
          ></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">
            2. Verify Data Quality
          </h3>
          <p class="text-gray-600 mt-2">
            Our ecosystem ensures accurate, traceable information
          </p>
        </div>

        <div class="group relative">
          <div
            class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"
          ></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">
            3. Generate DPP
          </h3>
          <p class="text-gray-600 mt-2">
            Automated Digital Product Passport creation
          </p>
        </div>

        <div class="group relative">
          <div
            class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"
          ></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">
            4. EU Market Ready
          </h3>
          <p class="text-gray-600 mt-2">
            Full compliance with 2026 regulations
          </p>
        </div>
      </div>
    </div> -->

    <!-- <div class="mt-16 text-center">
      <a
        href="#newsletter-section"
        class="inline-block bg-primary text-white font-semibold px-6 py-3 rounded-md hover:bg-primary-dark transition"
      >
        Get Started
      </a>
    </div> -->
  </section>
</template>

<style scoped>
.clip-chevron-start {
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 50%,
    calc(100% - 20px) 100%,
    0 100%
  );
}
.clip-chevron-next {
  clip-path: polygon(
    0 0,
    calc(100% - 20px) 0,
    100% 50%,
    calc(100% - 20px) 100%,
    0 100%,
    calc(0% + 20px) 50%
  );
}
</style>
