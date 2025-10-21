<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

const isBarHidden = ref(false)
const isMobileMenuOpen = ref(false)
const headerOpacity = ref(1)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

let lastScroll = 0
let ticking = false

const handleScroll = () => {
  const currentScroll = window.scrollY

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const fadeDistance = 300

      // Within the initial fade zone (0-300px)
      if (currentScroll <= fadeDistance) {
        // Fade out naturally as user scrolls down
        headerOpacity.value = Math.max(0, 1 - currentScroll / fadeDistance)
        isBarHidden.value = false
      }
      // After fade zone
      else {
        // Scrolling down - hide navbar
        if (currentScroll > lastScroll + 5) {
          isBarHidden.value = true
          headerOpacity.value = 0
        }
        // Scrolling up - show navbar with full opacity
        else if (currentScroll < lastScroll - 5) {
          isBarHidden.value = false
          headerOpacity.value = 1
        }
      }

      lastScroll = currentScroll
      ticking = false
    })
    ticking = true
  }
}

const manualScrollIntoSection = (id: string, height: number, delay: number) => {
  const el = document.getElementById(id)
  if (!el) return

  // Scroll to the element
  el.scrollIntoView({ behavior: 'smooth' })

  // Then scroll a bit further down after the animation
  setTimeout(() => {
    window.scrollBy({
      top: window.innerHeight * height,
      behavior: 'smooth',
    })
  }, delay)
}

const goToPartners = () =>
  manualScrollIntoSection('partners-section', 3.0, 1000)

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
      'fixed top-4 left-1/2 -translate-x-1/2 z-50',
      'bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-700/50',
      'px-6 py-2 transition-all duration-300 ease-out',
      'w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[90%] lg:w-[80%] xl:w-[70%]',
      {
        '-translate-y-20 opacity-0 pointer-events-none scale-95': isBarHidden,
        'translate-y-0 scale-100': !isBarHidden,
      },
    ]"
    :style="{
      opacity: headerOpacity,
      boxShadow:
        '0 0 10px rgba(12, 209, 235, 0.2), 0 0 20px rgba(12, 209, 235, 0.1)',
    }"
  >
    <div class="flex items-center justify-between relative w-full">
      <a href="#hero-section" class="flex items-center">
        <img
          class="h-8 md:h-10 w-auto"
          src="../assets/micelio-white.png"
          alt="miceliogo"
        />
        <span
          class="hidden md:inline md:text-lg font-medium tracking-tight text-white"
          >MicelioData</span
        >
      </a>

      <nav
        class="hidden xl:flex space-x-6 text-sm font-semibold text-gray-300 absolute left-1/2 transform -translate-x-1/2"
      >
        <a
          href="#info-section"
          class="hover:text-white transition-colors duration-150 py-2"
          >Company</a
        >
        <a
          href="#suppliers-section"
          class="hover:text-white transition-colors duration-150 py-2"
          >Solutions</a
        >
        <a
          href="#partners-section"
          @click.prevent="goToPartners"
          class="hover:text-white transition-colors duration-150 py-2"
          >Partners</a
        >
      </nav>

      <a
        href="#contact-section"
        class="ml-4 hidden xl:inline-block bg-teal-600 hover:bg-teal-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors duration-150"
      >
        Get In Touch
      </a>

      <button
        @click="toggleMobileMenu"
        class="xl:hidden focus:outline-none p-1"
      >
        <svg
          class="h-6 w-6 text-white opacity-70 hover:opacity-100 transition-opacity"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </header>

  <!-- Mobile Menu Overlay - Outside header for proper fullscreen -->
  <transition
    name="fade"
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="isMobileMenuOpen"
      class="xl:hidden fixed inset-0 w-screen h-screen bg-gray-900/80 backdrop-blur-md z-[100] flex flex-col"
    >
      <!-- Logo in top left -->
      <div class="absolute top-6 left-6">
        <a
          @click="toggleMobileMenu"
          href="#hero-section"
          class="flex items-center space-x-3"
        >
          <img
            class="h-10 w-auto"
            src="../assets/micelio-white.png"
            alt="miceliogo"
          />
          <span class="text-lg font-bold tracking-tight text-white"
            >MicelioData</span
          >
        </a>
      </div>

      <!-- Close button in top right -->
      <button
        @click="toggleMobileMenu"
        class="absolute top-6 right-6 text-gray-300 hover:text-white transition"
        aria-label="Close menu"
      >
        <svg
          class="w-8 h-8"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <!-- Centered Navigation -->
      <div class="flex-1 flex items-center justify-center">
        <nav>
          <ul class="text-center space-y-8">
            <li>
              <a
                @click="toggleMobileMenu"
                href="#info-section"
                class="text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"
              >
                Who We Are
              </a>
            </li>
            <li>
              <a
                @click="toggleMobileMenu"
                href="#suppliers-section"
                class="text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"
              >
                Our Offering
              </a>
            </li>
            <li>
              <a
                @click="toggleMobileMenu"
                href="#partners-section"
                class="text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"
              >
                Partners
              </a>
            </li>
            <li>
              <a
                @click="toggleMobileMenu"
                href="#contact-section"
                class="text-3xl font-semibold text-gray-100 hover:text-white transition-colors block"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <!-- Footer at bottom -->
      <div class="absolute bottom-8 w-full px-6 text-center">
        <p class="text-sm text-gray-400">
          © 2025 MicelioData. All Rights Reserved.
        </p>
      </div>
    </div>
  </transition>
</template>
