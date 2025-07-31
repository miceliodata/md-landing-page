<script setup lang="ts">
import MenuCard from '@/components/MenuCard.vue'
import { BuildingOfficeIcon } from '@heroicons/vue/24/outline'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
import { UserGroupIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section
  id="menu-section"
  class="md:h-[100dvh] py-20 px-6 max-w-6xl mx-auto flex items-center"
  >
    <div class="w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      <MenuCard
        :icon="BuildingOfficeIcon"
        :color="'sky'"
        :title="'Suppliers'"
        :content="'Easily share product data and reach EU buyers—no technical setup needed.'"
        :address="'#suppliers-section'"
      />

      <MenuCard
        :icon="ShoppingBagIcon"
        :color="'cyan'"
        :title="'Brands'"
        :content="'Verify supplier data and ensure DPP compliance across global supply chains.'"
        :address="'#brands-section'"
      />

      <MenuCard
        :icon="UserGroupIcon"
        :color="'emerald'"
        :title="'Partners'"
        :content="'Support scalable product compliance as a verifier, advisor, or integrator.'"
        :address="'#partners-section'"
      />
    </div>
  </section>
</template>