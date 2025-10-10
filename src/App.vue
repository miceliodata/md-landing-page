<script setup lang="ts">
  import SiteHeader from '@/components/SiteHeader.vue'
  import '@/assets/animations.css'
</script>

<template>
  <div class="font-sans text-gray-900">
    <SiteHeader />
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>