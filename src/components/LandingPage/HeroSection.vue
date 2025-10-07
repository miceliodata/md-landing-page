<script setup lang="ts">
// Earth is now a fixed background across entire page
</script>

<template>
  <section
    id="hero-section"
    class="relative pt-48 pb-24 flex items-center justify-center overflow-hidden h-[95vh]"
  >
    <div class="text-center px-6 relative z-10">
      <h1
        class="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-100 mb-6 max-w-4xl mx-auto"
      >
        <span
          class="block text-emerald-400 animate-word-reveal"
          style="text-shadow: 0 2px 4px rgba(153, 255, 242, 0.35)"
          >Ecosystem Orchestrator</span
        >
        <span class="block animate-word-reveal">for Global Supply Chains</span>
      </h1>
      <p class="text-lg md:text-xl text-slate-200 mb-10 max-w-xl mx-auto animate-blur-in">
        Partnering with suppliers, brands, and ecosystem partners to transform
        supply chain transparency through digital product passports.
      </p>

      <div class="relative inline-block animate-scale">
        <div
          class="absolute inset-0 z-5 rounded-md bg-sky-200 blur-xl opacity-40"
        ></div>
        <a
          href="#menu-section"
          class="inline-block relative z-10 bg-gradient-to-r from-sky-700 to-emerald-500 hover:from-teal-400 hover:to-teal-400 text-white font-semibold py-3 px-6 rounded-md shadow-md transition-colors duration-300"
        >
          Learn How It Works
        </a>
      </div>
    </div>
  </section>
</template>
