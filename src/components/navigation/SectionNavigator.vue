<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Section {
  id: string
  label: string
  element?: HTMLElement
}

const sections = ref<Section[]>([
  { id: 'hero-section', label: 'Top' },
  { id: 'info-section', label: 'About Us' },
  { id: 'menu-section', label: 'What We Offer' },
  { id: 'suppliers-section', label: 'Data Collection' },
  { id: 'brands-section', label: 'For Brands' },
  { id: 'partners-section', label: 'Partners' },
  { id: 'contact-section', label: 'Contact' }
])

const activeSection = ref('')
const isVisible = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

const updateActiveSection = () => {
  // Use middle of viewport as reference point for more accurate detection
  const scrollPosition = window.scrollY + window.innerHeight / 2
  let currentSection = ''
  let closestSection = ''
  let closestDistance = Infinity

  // Find which section the middle of viewport is currently in
  for (const section of sections.value) {
    const element = document.getElementById(section.id)
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight
      const elementMiddle = elementTop + element.offsetHeight / 2

      // Check if scroll position is within this section
      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        currentSection = section.id
        break
      }

      // Track closest section in case we're between sections
      const distance = Math.abs(scrollPosition - elementMiddle)
      if (distance < closestDistance) {
        closestDistance = distance
        closestSection = section.id
      }
    }
  }

  // Use closest section if we didn't find an exact match
  activeSection.value = currentSection || closestSection

  // Show navigation only when fully past hero section (at About Us or below)
  const heroSection = document.getElementById('hero-section')
  const infoSection = document.getElementById('info-section')
  if (heroSection && infoSection) {
    const heroEnd = heroSection.offsetTop + heroSection.offsetHeight
    // Show only when we've reached the About Us section
    isVisible.value = window.scrollY >= heroEnd
  }
}

let ticking = false
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateActiveSection()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  // Get references to section elements
  sections.value.forEach(section => {
    section.element = document.getElementById(section.id) || undefined
  })

  window.addEventListener('scroll', handleScroll, { passive: true })
  updateActiveSection() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <nav
    :class="[
      'fixed left-6 top-1/2 -translate-y-1/2 z-40',
      'transition-all duration-300 ease-in-out',
      {
        'opacity-100 translate-x-0': isVisible,
        'opacity-0 -translate-x-4 pointer-events-none': !isVisible
      }
    ]"
  >
    <ul class="space-y-4">
      <li
        v-for="section in sections"
        :key="section.id"
        class="group flex items-center"
      >
        <!-- Indicator dot -->
        <button
          @click="scrollToSection(section.id)"
          :class="[
            'w-3 h-3 rounded-full border-2 transition-all duration-300',
            'hover:scale-150 hover:shadow-lg',
            'relative',
            {
              'bg-emerald-500 border-emerald-500 shadow-emerald-500/50 shadow-md scale-125 animate-pulse': activeSection === section.id,
              'bg-transparent border-slate-400 hover:border-emerald-400 hover:bg-emerald-400/20': activeSection !== section.id
            }
          ]"
          :title="section.label"
        >
          <!-- Ripple effect for active dot -->
          <span
            v-if="activeSection === section.id"
            class="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-75"
          ></span>
        </button>

        <!-- Label (appears on hover) -->
        <span
          :class="[
            'ml-4 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap shadow-lg',
            'transition-all duration-300 transform',
            'group-hover:opacity-100 group-hover:translate-x-0',
            'opacity-0 -translate-x-2 pointer-events-none',
            'relative'
          ]"
        >
          {{ section.label }}
          <!-- Arrow pointing to dot -->
          <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-gray-900/95"></div>
        </span>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Smooth hover animations */
button {
  transition: transform 0.2s ease;
}

button:hover {
  transform: scale(1.1);
}
</style>