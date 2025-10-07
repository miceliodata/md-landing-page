<script setup lang="ts">
// Remove duplicate animations - using global composable instead
</script>

<template>
  <section
    id="about-section"
    class="scroll-mt-[7rem] h-auto py-20 px-4 sm:px-6 lg:px-8"
  >
    <h1 class="text-4xl text-center md:text-5xl font-bold text-gray-100 mb-4 animate-char-reveal">
      About Us
    </h1>

    <div
      class="flex justify-center p-10 sm:max-w-xl md:max-w-4xl mx-auto mt-16 animate-stagger-group"
    >
      <div
        class="text-lg text-gray-300 text-center sm:max-w-xl md:max-w-3xl md:mx-20"
      >
        <h2 class="mt-12 animate-stagger animate-fade-up">
          MicelioData is a next-generation platform purpose-built to support
          compliance with the EU's Ecodesign for Sustainable Products Regulation
          (ESPR) and its Digital Product Passport (DPP) requirements.
        </h2>

        <h2 class="mt-12 animate-stagger animate-fade-up">
          Our solution addresses the hardest part of product transparency:
          capturing, verifying, and scaling supplier data across fragmented
          global value chains. Through a hybrid data capture framework—including
          direct API integrations, mobile apps for SMEs, and AI-powered
          digitization of paper records—we ensure no supplier is left behind.
        </h2>

        <h2 class="mt-12 animate-stagger animate-fade-up">
          Powered by a collaborative trust engine, semantic knowledge graphs,
          and an event-driven, cloud-native architecture, Micelio enables brands
          to transform raw data into verifiable, interoperable product
          intelligence—ready for ESPR, CSRD, and beyond.
        </h2>

        <div class="my-12 animate-scale">
          <blockquote
            class="text-xl md:text-2xl font-semibold text-emerald-500 italic border-l-4 border-emerald-600 pl-6"
          >
            "MicelioData is the digital mycelium for sustainability data!"
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>
