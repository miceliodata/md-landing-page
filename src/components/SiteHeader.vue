<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const isHidden = ref(false)
let lastScroll = window.scrollY

const handleScroll = () => {
  const currentScroll = window.scrollY
  const scrollDelta = currentScroll - lastScroll

  console.log(`Scroll position: ${currentScroll}, Delta: ${scrollDelta}`)

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
  console.log('Navbar scroll detection mounted')
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>

<template>
  <header :class="[
    'bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center sticky top-0 z-50 transition-transform duration-300',
    { '-translate-y-full': isHidden }
  ]">
    <div class="text-xl font-bold">MICELIO DATA</div>
    <nav>
      <ul class="flex space-x-6 text-sm font-medium">
        <li><a href="#hero-section" class="hover:text-blue-600">Platform</a></li>
        <li><a href="#features-section" class="hover:text-blue-600">Suppliers</a></li>
        <li><a href="#use-cases-section" class="hover:text-blue-600">Brands</a></li>
        <li><a href="#partners-section" class="hover:text-blue-600">Partners</a></li>
      </ul>
    </nav>
    <a href="#newsletter-section" class="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm font-semibold">
      Contact us
    </a>
  </header>
</template>