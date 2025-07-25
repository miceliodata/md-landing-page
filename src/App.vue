<script setup lang="ts">
  import SiteHeader from '@/components/SiteHeader.vue'
</script>

<template>
  <div class="font-sans text-gray-900 scroll-smooth">
    <SiteHeader />
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}
</style>