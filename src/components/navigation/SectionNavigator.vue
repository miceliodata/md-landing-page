<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Section {
  id: string
  label: string
  element?: HTMLElement
}

const sections = ref<Section[]>([
  { id: 'hero-section', label: 'Home' },
  { id: 'info-section', label: 'About Us' },
  { id: 'suppliers-section', label: 'Data Collection' },
  { id: 'partners-section', label: 'Partners' },
  { id: 'contact-section', label: 'Contact' },
])

const activeSection = ref('')
const isVisible = ref(false)

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })

    if (element.id === 'partners-section') {
      setTimeout(() => {
        window.scrollBy({
          top: window.innerHeight * 3.0,
          behavior: 'smooth',
        })
      }, 1000)
    }
  }
}

const updateActiveSection = () => {
  // Use top of viewport + small offset as reference point
  const scrollPosition = window.scrollY + 100 // Small offset from top
  let currentSection = sections.value[0]?.id || '' // Default to first section

  // Find which section we're currently in (from bottom to top to handle overlaps)
  for (let i = sections.value.length - 1; i >= 0; i--) {
    const section = sections.value[i]
    const element = document.getElementById(section.id)
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight

      // If we've scrolled past this section's start and haven't passed its end, it's active
      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        currentSection = section.id
        break
      }
    }
  }

  // If no section matched, default to the last one if we're past it
  if (!currentSection) {
    const lastSection = sections.value[sections.value.length - 1]
    const lastElement = document.getElementById(lastSection.id)
    if (lastElement && scrollPosition >= lastElement.offsetTop) {
      currentSection = lastSection.id
    }
  }

  activeSection.value = currentSection

  // Show navigation when reaching middle of About Us section, hide only when back in Hero
  const heroSection = document.getElementById('hero-section')
  const infoSection = document.getElementById('info-section')

  if (heroSection && infoSection) {
    const heroEnd = heroSection.offsetTop + heroSection.offsetHeight
    const infoMiddle = infoSection.offsetTop + infoSection.offsetHeight / 2

    // Show when scroll reaches middle of About Us section
    if (window.scrollY >= infoMiddle) {
      isVisible.value = true
    }
    // Hide only when scrolling back up into Hero section
    else if (window.scrollY < heroEnd) {
      isVisible.value = false
    }
    // Otherwise keep current state (stays visible when between hero end and info middle)
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
  sections.value.forEach((section) => {
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
        'opacity-0 -translate-x-4 pointer-events-none': !isVisible,
      },
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
          class="w-3 h-3 rounded-full border-2 transition-all duration-300 bg-transparent border-slate-400 hover:border-emerald-400 hover:bg-emerald-400/20 hover:scale-150 hover:shadow-lg"
          :title="section.label"
        ></button>

        <!-- Label (appears on hover) -->
        <span
          :class="[
            'ml-4 px-3 py-1.5 bg-gray-900/95 backdrop-blur-sm text-white text-sm rounded-lg whitespace-nowrap shadow-lg',
            'transition-all duration-300 transform',
            'group-hover:opacity-100 group-hover:translate-x-0',
            'opacity-0 -translate-x-2 pointer-events-none',
            'relative',
          ]"
        >
          {{ section.label }}
          <!-- Arrow pointing to dot -->
          <div
            class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1.5 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[6px] border-transparent border-r-gray-900/95"
          ></div>
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
