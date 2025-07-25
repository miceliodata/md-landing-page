<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScroll = window.scrollY

const handleScroll = () => {
  const currentScroll = window.scrollY
  const scrollDelta = currentScroll - lastScroll

  if (scrollDelta > 15 && currentScroll > 100) {
    if (!isHidden.value) {
      isHidden.value = true
    }
  } else if (scrollDelta < -15) {
    if (isHidden.value) {
      isHidden.value = false
    }
  }

  lastScroll = currentScroll
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <header :class="[
    'bg-white border-b border-gray-200 sticky top-0 z-50 transition-transform duration-300',
    { '-translate-y-full': isHidden }
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img class="h-10 w-auto" src="../assets/Micelio-White.png" alt="miceliogo">
        <span class="text-lg font-bold tracking-tight text-gray-900">MICELIO DATA</span>
      </div>
      <nav class="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
        <a href="#hero-section" class="hover:text-primary transition-colors">Platform</a>
        <a href="#features-section" class="hover:text-primary transition-colors">Suppliers</a>
        <a href="#use-cases-section" class="hover:text-primary transition-colors">Brands</a>
        <a href="#partners-section" class="hover:text-primary transition-colors">Partners</a>
      </nav>
      <a href="#newsletter-section" class="ml-6 hidden md:inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark text-sm font-semibold transition-colors">
        Contact us
      </a>
    </div>
  </header>
</template>