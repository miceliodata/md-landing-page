<script setup lang="ts">
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
  <section id="suppliers-section" class="bg-dark h-[90dvh] py-20 px-4 sm:px-6 lg:px-8 flex items-center">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
        For Suppliers
      </h2>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        Join the DPP network and make your products visible to European buyers. Our platform makes it simple—no tech team needed.
      </p>

      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-white rounded-lg shadow p-6 hover:shadow-md transition"
        >
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>

    </div>
  </section>
</template>