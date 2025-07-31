<script setup lang="ts">
import { BuildingOfficeIcon } from '@heroicons/vue/24/outline' 

const features = [
  {
    title: 'No Tech Setup',
    description: 'Upload your product data manually or get support—no integration needed.',
  },
  {
    title: 'Instant Access to EU Market',
    description: 'Get discovered by brands looking for DPP-compliant manufacturers.',
  },
  {
    title: 'Compliant Product Passports',
    description: 'Generate EU-ready digital product passports with ease.',
  },
]
</script>

<template>
  <section id="suppliers-section" class="bg-dark h-[100dvh] py-20 px-4 sm:px-6 lg:px-8 flex items-center">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-5xl font-bold text-gray-100 mb-4">
        For Suppliers
      </h2>
      <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
        Join the DPP network and make your products visible to European buyers. Our platform makes it simple—no tech team needed.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class=" p-6 transition"
        >
          <h3 class="text-xl font-semibold text-gray-200 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-300">{{ feature.description }}</p>
        </div>
      </div>    
      <div class="absolute bottom-0 left-0">
        <BuildingOfficeIcon class="w-[10rem] h-[10rem] text-white opacity-0 md:opacity-[0.5]" />
      </div>  
    </div>
  </section>
</template>