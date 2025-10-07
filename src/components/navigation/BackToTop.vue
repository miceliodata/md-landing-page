<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ChevronUpIcon } from '@heroicons/vue/24/outline'

const isVisible = ref(false)
const isScrolling = ref(false)

const scrollToTop = () => {
  isScrolling.value = true

  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })

  // Reset scrolling state after animation
  setTimeout(() => {
    isScrolling.value = false
  }, 1000)
}

const updateVisibility = () => {
  const scrolled = window.scrollY
  const threshold = window.innerHeight * 0.5 // Show after scrolling 50% of viewport height

  isVisible.value = scrolled > threshold
}

let ticking = false
const handleScroll = () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateVisibility()
      ticking = false
    })
    ticking = true
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  updateVisibility() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    @click="scrollToTop"
    :class="[
      'fixed bottom-8 right-8 z-40',
      'w-12 h-12 rounded-full',
      'bg-emerald-500 hover:bg-emerald-600',
      'text-white shadow-lg hover:shadow-xl',
      'transition-all duration-300 ease-in-out',
      'flex items-center justify-center',
      'hover:scale-110 active:scale-95',
      {
        'opacity-100 translate-y-0': isVisible,
        'opacity-0 translate-y-4 pointer-events-none': !isVisible,
        'animate-pulse': isScrolling
      }
    ]"
    :title="'Back to top'"
    aria-label="Back to top"
  >
    <ChevronUpIcon
      :class="[
        'w-6 h-6 transition-transform duration-200',
        {
          'animate-bounce': isScrolling
        }
      ]"
    />
  </button>
</template>

<style scoped>
/* Custom pulse animation for the button */
@keyframes custom-pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.8;
  }
}

.animate-pulse {
  animation: custom-pulse 1s ease-in-out;
}
</style>