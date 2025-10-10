<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const heroOpacity = ref(1)
let ticking = false

const handleScroll = () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY = window.scrollY

      // Fade out quickly over first 200px of scroll
      const fadeDistance = 200
      const opacity = Math.max(0, 1 - (scrollY / fadeDistance))
      heroOpacity.value = opacity

      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <section
    id="hero-section"
    class="relative flex items-center overflow-hidden h-[95vh]"
  >
    <!-- Logo and Brand Name - Centered on mobile, left aligned on desktop -->
    <div
      class="px-6 md:pl-20 lg:pl-32 relative z-10 flex flex-col md:flex-row items-center justify-center md:justify-start w-full md:w-auto transition-opacity duration-300"
      :style="{ opacity: heroOpacity }"
    >
      <img
        class="h-16 sm:h-20 md:h-32 lg:h-40 xl:h-48 w-auto mb-4 md:mb-0"
        src="@/assets/micelio-newcolor-tr-bg.png"
        alt="Micelio Logo"
      />
      <span class="text-center md:text-left ml-0 md:ml-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-slate-100">
        MicelioData
      </span>
    </div>

    <!-- Scroll down indicator at bottom -->
    <div
      class="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-center transition-all duration-300 cursor-pointer group"
      :style="{ opacity: heroOpacity }"
    >
      <p class="text-sm text-slate-300 mb-2 group-hover:text-white transition-colors">Scroll down to continue</p>
      <svg
        class="w-6 h-6 mx-auto text-slate-300 transition-transform group-hover:translate-y-2 group-hover:text-white"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  </section>
</template>
