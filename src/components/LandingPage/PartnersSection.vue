<script setup lang="ts">
import { UserGroupIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <!-- <section id="partners-section" class="py-12 px-6 bg-gray-50">
    <div class="max-w-4xl mx-auto text-center">
      <div class="flex flex-wrap justify-center gap-4">
        <span class="bg-gray-200 px-6 py-3 rounded text-sm font-medium">Partner 1</span>
        <span class="bg-gray-200 px-6 py-3 rounded text-sm font-medium">Partner 2</span>
        <span class="bg-gray-200 px-6 py-3 rounded text-sm font-medium">Partner 3</span>
      </div>
    </div>
  </section> -->

  <section
    id="partners-section"
    class="md:h-[100dvh] bg-[#393a3d] px-6 text-gray-100 flex flex-col justify-center py-6"
  >
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold mb-4">Project Partners</h2>
        <p class="text-gray-300 text-xl">
          Backed by institutions and initiatives supporting sustainable and transparent supply chains.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class=" p-6">
          <h3 class="text-xl font-semibold mb-2">Business Council Bangladesh</h3>
          <p class="text-gray-400">
            Facilitates collaboration between textile exporters and international buyers focused on traceability.
          </p>
        </div>

        <div class=" p-6">
          <h3 class="text-xl font-semibold mb-2">ITMF & EOG Initiatives</h3>
          <p class="text-gray-400">
            Provides access to aligned formats and industry-wide sustainability metrics.
          </p>
        </div>

        <div class=" p-6">
          <h3 class="text-xl font-semibold mb-2">EU Compliance Networks</h3>
          <p class="text-gray-400">
            Ensures conformity with evolving digital product passport legislation and best practices.
          </p>
        </div>
      </div>
    </div>
    <div class="absolute bottom-0 left-0">
      <UserGroupIcon class="w-[10rem] h-[10rem] opacity-0 md:opacity-[0.5]" />
    </div>
  </section>
</template>