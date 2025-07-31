<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import Navicon from '@/assets/navicon-black.svg'

const isBarHidden = ref(false)
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

let lastScroll = 0
let ticking = false

const handleScroll = () => {
  const currentScroll = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (currentScroll > lastScroll && currentScroll > 100) {
        isBarHidden.value = true
      } else if (currentScroll < lastScroll - 10) {
        isBarHidden.value = false
      }
      lastScroll = currentScroll
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  lastScroll = window.scrollY
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

watch(isMobileMenuOpen, (isOpen) => {
  document.body.classList.toggle('overflow-hidden', isOpen)
})

</script>

<template>
<header
  :class="[
    'fixed top-2 left-1/2 -translate-x-1/2 z-50 px-6 py-1 w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] md:w-[80%]',
    'bg-slate-100/80 backdrop-blur-md rounded-xl shadow-md transition-opacity duration-500 ease-in-out',
    { 'opacity-0 pointer-events-none': isBarHidden, 'opacity-100': !isBarHidden }
  ]"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
    <div class="flex items-center space-x-3">
      <img class="h-14 w-auto" src="../assets/micelio-newcolor-tr-bg.png" alt="miceliogo" />
      <span class="text-lg font-bold tracking-tight text-gray-800">Micelio Data</span>
    </div>

    <nav class="hidden md:flex space-x-6 text-sm font-semibold text-gray-700">
      <a href="#hero-section" class="hover:text-sky-700 transition-colors">Home</a>
      <a href="#suppliers-section" class="hover:text-sky-700 transition-colors">Suppliers</a>
      <a href="#brands-section" class="hover:text-sky-700 transition-colors">Brands</a>
      <a href="#partners-section" class="hover:text-sky-700 transition-colors">Partners</a>
    </nav>

    <a
      href="#newsletter-section"
      class="ml-6 hidden md:inline-block bg-gradient-to-r from-sky-700 to-emerald-500 hover:from-teal-400 hover:to-teal-400 text-white px-4 py-2 rounded-md shadow-md text-sm font-semibold transition-colors"
    >
      Contact us
    </a>

    <button @click="toggleMobileMenu" class="md:hidden focus:outline-none">
      <Navicon class="h-10 w-auto" src="/src/assets/navicon-black.svg" />
    </button>
  </div>

<transition
  class="md:hidden"
  name="fade"
  enter-active-class="transition-opacity duration-500"
  enter-from-class="opacity-0"
  enter-to-class="opacity-100"
  leave-active-class="transition-opacity duration-500"
  leave-from-class="opacity-100"
  leave-to-class="opacity-0"
>
  <div
    v-if="isMobileMenuOpen"
    class="fixed top-0 left-0 w-full h-screen bg-slate-200 z-40 flex flex-col rounded-md justify-between"
  >
    <div class="px-4 pt-4">
      <div class="flex items-center space-x-3">
        <img class="h-10 w-auto" src="../assets/micelio-color.png" alt="miceliogo" />
        <span class="text-lg font-bold tracking-tight text-gray-800">MICELIO DATA</span>
      </div>
      <button
        @click="toggleMobileMenu"
        class="absolute top-6 right-6 text-gray-700 hover:text-black transition"
        aria-label="Close menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <nav>
      <ul class="text-center space-y-4 text-lg font-medium">
        <li><a @click="toggleMobileMenu" href="#hero-section">Home</a></li>
        <li><a @click="toggleMobileMenu" href="#suppliers-section">Suppliers</a></li>
        <li><a @click="toggleMobileMenu" href="#brands-section">Brands</a></li>
        <li><a @click="toggleMobileMenu" href="#partners-section">Partners</a></li>
      </ul>
    </nav>

    <div class="px-6 pb-10 space-y-4 text-sm text-gray-600 border-t border-gray-300 pt-6 text-center">
      <a href="#newsletter-section" class="block text-black font-semibold">Contact</a>
      <a href="/privacy-policy" class="block">Privacy policy</a>
      <a href="/terms-of-use" class="block">Terms of use</a>
    </div>
  </div>
</transition>
</header>
</template>