<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Section {
  id: string
  label: string
  element?: HTMLElement
}

const sections = ref<Section[]>([
  { id: 'hero-section', label: 'Home' },
  { id: 'about-section', label: 'About Us' },
  { id: 'menu-section', label: 'How It Works' },
  { id: 'suppliers-section', label: 'Suppliers' },
  { id: 'brands-section', label: 'Brands' },
  { id: 'partners-section', label: 'Partners' },
  { id: 'newsletter-section', label: 'Contact' }
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
  const scrollPosition = window.scrollY + window.innerHeight / 3
  let currentSection = ''

  for (const section of sections.value) {
    const element = document.getElementById(section.id)
    if (element) {
      const elementTop = element.offsetTop
      const elementBottom = elementTop + element.offsetHeight

      if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
        currentSection = section.id
        break
      }
    }
  }

  activeSection.value = currentSection

  // Show/hide based on scroll position (hide on hero section)
  isVisible.value = scrollPosition > window.innerHeight * 0.3
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
            'w-3 h-3 rounded-full border-2 transition-all duration-200',
            'hover:scale-110',
            {
              'bg-emerald-500 border-emerald-500 shadow-emerald-500/50 shadow-md': activeSection === section.id,
              'bg-transparent border-gray-400 hover:border-emerald-400': activeSection !== section.id
            }
          ]"
          :title="section.label"
        />

        <!-- Label (appears on hover) -->
        <span
          :class="[
            'ml-4 px-3 py-1 bg-gray-900 text-white text-sm rounded-md whitespace-nowrap',
            'transition-all duration-200 transform',
            'group-hover:opacity-100 group-hover:translate-x-0',
            'opacity-0 -translate-x-2 pointer-events-none'
          ]"
        >
          {{ section.label }}
          <!-- Arrow pointing to dot -->
          <div class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
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