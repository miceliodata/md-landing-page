<script setup lang="ts">
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
</script>


<template>
  <section id="brands-section" class="h-[90dvh] bg-white py-20 px-6 flex items-center">
    <div class="max-w-4xl mx-auto text-center mb-16">
      <h2 class="text-5xl font-bold text-gray-900 mb-4">For Brands</h2>
      <p class="text-gray-700 text-lg">
        Find compliant suppliers, review product passport data, and ensure your sourcing meets EU regulations.
      </p>
    </div>

    <div class="relative border-l-2 border-gray-200 ml-4 pl-6 space-y-12 max-w-3xl mx-auto">
      <div class="group relative">
        <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
        <h3 class="text-xl font-semibold text-gray-900 pl-2">1. Search Verified Suppliers</h3>
        <p class="text-gray-600 mt-2">
          Discover exporters from Turkey, Bangladesh and beyond who meet EU DPP requirements out of the box.
        </p>
      </div>

      <div class="group relative">
        <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
        <h3 class="text-xl font-semibold text-gray-900 pl-2">2. Review Passport Data</h3>
        <p class="text-gray-600 mt-2">
          Access standardized data on materials, processes, and certifications for every product.
        </p>
      </div>

      <div class="group relative">
        <div class="absolute -left-[1.1rem] top-1.5 w-5 h-5 bg-primary rounded-full border-4 border-white"></div>
        <h3 class="text-xl font-semibold text-gray-900 pl-2">3. Connect & Collaborate</h3>
        <p class="text-gray-600 mt-2">
          Request samples or initiate partnerships with traceable, future-ready manufacturers.
        </p>
      </div>
    </div>
    <div class="absolute bottom-0 right-0">
      <ShoppingBagIcon class="w-[10rem] h-[10rem] opacity-0 md:opacity-[0.5]" />
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