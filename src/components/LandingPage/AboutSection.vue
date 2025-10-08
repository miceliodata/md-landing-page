<script setup lang="ts">
// Remove duplicate animations - using global composable instead
</script>

<template>
  <section
    id="info-section"
    class="scroll-mt-[7rem] min-h-screen py-20 px-8 sm:px-12 lg:px-20 flex flex-col justify-center"
  >
    <h1 class="text-4xl md:text-5xl font-bold text-gray-100 mb-16 ml-12 md:ml-16 lg:ml-20 animate-slide-left">
      About Us
    </h1>

    <div class="max-w-5xl ml-12 md:ml-16 lg:ml-20 space-y-8">
      <h2 class="text-lg md:text-xl text-gray-300 animate-slide-left">
        MicelioData is a next-generation platform purpose-built to support
        compliance with the EU's Ecodesign for Sustainable Products Regulation
        (ESPR) and its Digital Product Passport (DPP) requirements.
      </h2>

      <h2 class="text-lg md:text-xl text-gray-300 animate-slide-left">
        Our solution addresses the hardest part of product transparency:
        capturing, verifying, and scaling supplier data across fragmented
        global value chains. Through a hybrid data capture framework—including
        direct API integrations, mobile apps for SMEs, and AI-powered
        digitization of paper records—we ensure no supplier is left behind.
      </h2>

      <h2 class="text-lg md:text-xl text-gray-300 animate-slide-left">
        Powered by a collaborative trust engine, semantic knowledge graphs,
        and an event-driven, cloud-native architecture, Micelio enables brands
        to transform raw data into verifiable, interoperable product
        intelligence—ready for ESPR, CSRD, and beyond.
      </h2>

      <div class="my-12 animate-slide-left">
        <blockquote
          class="text-xl md:text-2xl font-semibold text-emerald-400 italic border-l-4 border-emerald-500 pl-6"
        >
          "MicelioData is the digital mycelium for sustainability data!"
        </blockquote>
      </div>
    </div>
  </section>
</template>
