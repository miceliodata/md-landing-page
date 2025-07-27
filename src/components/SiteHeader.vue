<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isBarHidden = ref(false)
const isMobileMenuOpen = ref(false)
let lastScroll = window.scrollY

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const handleScroll = () => {
  const currentScroll = window.scrollY
  const scrollDelta = currentScroll - lastScroll

  if (scrollDelta > 15 && currentScroll > 100) {
    if (!isBarHidden.value) {
      isBarHidden.value = true
    }
  } else if (scrollDelta < -15) {
    if (isBarHidden.value) {
      isBarHidden.value = false
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
    'bg-dark border-b border-gray-800 sticky top-0 z-50 transition-transform duration-300',
    { '-translate-y-full': isBarHidden }
  ]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
      <div class="flex items-center space-x-3">
        <img class="h-10 w-auto" src="../assets/micelio-color.png" alt="miceliogo">
        <span class="text-lg font-bold tracking-tight text-white">MICELIO DATA</span>
      </div>
      <nav class="hidden md:flex space-x-6 text-sm font-medium text-gray-300">
        <a href="#hero-section" class="hover:text-white transition-colors">Platform</a>
        <a href="#suppliers-section" class="hover:text-white transition-colors">Suppliers</a>
        <a href="#brands-section" class="hover:text-white transition-colors">Brands</a>
        <a href="#partners-section" class="hover:text-white transition-colors">Partners</a>
      </nav>
      <a href="#newsletter-section" class="ml-6 hidden md:inline-block bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark text-sm font-semibold transition-colors">
        Contact us
      </a>
      <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
        <img class="h-10 w-auto invert" src="/src/assets/navicon-black.svg" alt="navicon">
      </button>
    </div>

     <div v-if="isMobileMenuOpen" class="md:hidden bg-dark border-t border-gray-700 px-4 pb-4 pt-6">
      <nav class="flex flex-col space-y-3 text-sm font-medium text-gray-300">
        <a href="#hero-section" class="hover:text-white transition-colors">Platform</a>
        <a href="#suppliers-section" class="hover:text-white transition-colors">Suppliers</a>
        <a href="#brands-section" class="hover:text-white transition-colors">Brands</a>
        <a href="#partners-section" class="hover:text-white transition-colors">Partners</a>
        <a href="#newsletter-section" class="mt-2 bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark text-center">
          Contact us
        </a>
      </nav>
    </div>
  </header>
</template>