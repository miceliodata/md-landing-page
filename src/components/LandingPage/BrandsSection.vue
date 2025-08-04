<script setup lang="ts">
import { ChartBarIcon } from '@heroicons/vue/24/outline'
import { ClipboardDocumentListIcon } from '@heroicons/vue/24/outline'
import { CheckCircleIcon } from '@heroicons/vue/24/outline'

const brandFeatures = [
  {
    icon: ChartBarIcon,
    color: 'text-indigo-500',
    title: 'Real-time Dashboard',
    description: 'Monitor your entire supply chain in one place'
  },
  {
    icon: ClipboardDocumentListIcon,
    color: 'text-blue-500',
    title: 'Compliance Tracking',
    description: 'Automated DPP regulation compliance monitoring'
  },
  {
    icon: CheckCircleIcon,
    color: 'text-teal-500',
    title: 'Verified Data',
    description: 'All supplier data verified through our network'
  }
]
</script>


<template>
  <section id="brands-section" class="scroll-mt-[7rem] h-auto bg-white py-20 px-6 flex flex-col justify-center items-center">

    <div>
      <div class="max-w-4xl mx-auto text-center mb-16">
        <h2 class="text-5xl font-bold text-gray-900 mb-4">Everything You Need for DPP</h2>
        <p class="text-gray-700 text-lg">
          Our platform provides complete visibility into your Asian supply chain, ensuring full compliance with EU Digital Product Passport regulations.
        </p>
      </div>

      <div class="grid gap-12 sm:grid-cols-1 md:grid-cols-3 mb-24">
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
      </div>
    </div>

    <div class="md:flex md:items-center">
      <div class="max-w-4xl mx-auto text-center mb-8">
        <h2 class="text-3xl font-bold text-gray-900 px-12 mb-4">Your Path to Compliance</h2>
        <p class="text-gray-700 text-md mb-12">
          Simple, step-by-step process to achieve DPP compliance
        </p>
      </div>
  
      <div class="relative border-l-2 border-gray-200 ml-4 pl-6 space-y-12 max-w-3xl mx-auto">
        <div class="group relative">
          <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">1. Connect Your Supply Chain</h3>
          <p class="text-gray-600 mt-2">
            Integrate with your existing Asian suppliers
          </p>
        </div>
  
        <div class="group relative">
          <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">2. Verify Data Quality</h3>
          <p class="text-gray-600 mt-2">
            Our ecosystem ensures accurate, traceable information
          </p>
        </div>
  
        <div class="group relative">
          <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">3. Generate DPP</h3>
          <p class="text-gray-600 mt-2">
            Automated Digital Product Passport creation
          </p>
        </div>
  
        <div class="group relative">
          <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
          <h3 class="text-xl font-semibold text-gray-900 pl-2">4. EU Market Ready</h3>
          <p class="text-gray-600 mt-2">
            Full compliance with 2026 regulations
          </p>
        </div>
      </div>
    </div>


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