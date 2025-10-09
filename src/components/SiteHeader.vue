<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from "vue";
import Navicon from "@/assets/navicon-black.svg";

const isBarHidden = ref(false);
const isMobileMenuOpen = ref(false);
const headerOpacity = ref(1);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

let lastScroll = 0;
let ticking = false;

const handleScroll = () => {
  const currentScroll = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      const fadeDistance = 300;

      // Within the initial fade zone (0-300px)
      if (currentScroll <= fadeDistance) {
        // Fade out naturally as user scrolls down
        headerOpacity.value = Math.max(0, 1 - (currentScroll / fadeDistance));
        isBarHidden.value = false;
      }
      // After fade zone
      else {
        // Scrolling down - hide navbar
        if (currentScroll > lastScroll + 5) {
          isBarHidden.value = true;
          headerOpacity.value = 0;
        }
        // Scrolling up - show navbar with full opacity
        else if (currentScroll < lastScroll - 5) {
          isBarHidden.value = false;
          headerOpacity.value = 1;
        }
      }

      lastScroll = currentScroll;
      ticking = false;
    });
    ticking = true;
  }
};

onMounted(() => {
  lastScroll = window.scrollY;
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

watch(isMobileMenuOpen, (isOpen) => {
  document.body.classList.toggle("overflow-hidden", isOpen);
});
</script>

<template>
  <header
    :class="[
      'fixed top-4 left-1/2 -translate-x-1/2 z-50',
      'bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-700/50',
      'px-6 py-3 transition-all duration-300 ease-out',
      'w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[90%] lg:w-[80%] xl:w-[70%]',
      {
        '-translate-y-20 opacity-0 pointer-events-none scale-95': isBarHidden,
        'translate-y-0 scale-100': !isBarHidden,
      },
    ]"
    :style="{
      opacity: headerOpacity,
      boxShadow: '0 0 10px rgba(12, 209, 235, 0.2), 0 0 20px rgba(12, 209, 235, 0.1)'
    }"
  >
    <div
      class="flex items-center justify-between relative w-full"
    >
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
        <a href="#info-section" class="hover:text-white transition-colors duration-150 py-2"
          >Who We Are</a>
        <a href="#suppliers-section" class="hover:text-white transition-colors duration-150 py-2"
          >Our Offering</a>
        <a href="#partners-section" class="hover:text-white transition-colors duration-150 py-2"
          >Partners</a>
      </nav>

      <a
        href="#contact-section"
        class="ml-4 hidden xl:inline-block bg-teal-600 hover:bg-teal-500 text-white px-3 py-1.5 rounded text-xs font-medium transition-colors duration-150"
      >
        Contact
      </a>

      <button @click="toggleMobileMenu" class="xl:hidden focus:outline-none p-1">
        <svg class="h-6 w-6 text-white opacity-70 hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>

    <transition
      class="xl:hidden"
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
        class="fixed top-0 left-0 w-full h-[99vh] bg-slate-100 z-40 flex flex-col rounded-md justify-between"
      >
        <div class="px-4 pt-4">
          <a
            @click="toggleMobileMenu"
            href="#hero-section"
            class="flex items-center space-x-3"
          >
            <img
              class="h-12 w-auto"
              src="../assets/micelio-newcolor-tr-bg.png"
              alt="miceliogo"
            />
            <span class="text-lg font-bold tracking-tight text-gray-800"
              >MICELIODATA</span
            >
          </a>
          <button
            @click="toggleMobileMenu"
            class="absolute top-6 right-6 text-gray-700 hover:text-black transition"
            aria-label="Close menu"
          >
            <svg
              class="w-6 h-6"
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
        </div>

        <nav>
          <ul class="text-center space-y-4 text-lg font-medium">
            <li>
              <a @click="toggleMobileMenu" href="#info-section">Who We Are</a>
            </li>
            <li>
              <a @click="toggleMobileMenu" href="#suppliers-section"
                >Our Offering</a
              >
            </li>
            <li>
              <a @click="toggleMobileMenu" href="#partners-section">Partners</a>
            </li>
            <li>
              <a @click="toggleMobileMenu" href="#contact-section">Contact</a>
            </li>
          </ul>
        </nav>

        <div
          class="px-6 pb-10 space-y-4 text-sm text-gray-600 border-t border-gray-300 pt-6 text-center"
        >
          <p>© 2025 MicelioData. All Rights Reserved.</p>
          <!-- <a href="#newsletter-section" class="block text-black font-semibold">Contact</a>
      <a href="/privacy-policy" class="block">Privacy policy</a>
      <a href="/terms-of-use" class="block">Terms of use</a> -->
        </div>
      </div>
    </transition>
  </header>
</template>
