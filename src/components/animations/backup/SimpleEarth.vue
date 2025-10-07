<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const containerRef = ref<HTMLDivElement>()

onMounted(() => {
  // Starting from square 1 - simple placeholder
  console.log('Simple Earth component mounted')
})

onUnmounted(() => {
  console.log('Simple Earth component unmounted')
})
</script>

<template>
  <div
    ref="containerRef"
    class="absolute inset-0 pointer-events-none flex items-center justify-center"
    style="z-index: 1;"
  >
    <div class="w-64 h-64 rounded-full bg-gradient-to-br from-blue-400 to-green-500 opacity-30">
      <!-- Simple placeholder Earth sphere -->
    </div>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  height: 100%;
}
</style>