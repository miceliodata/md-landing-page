<script setup lang="ts">
import MenuCard from '@/components/MenuCard.vue';

</script>

<template>
  <section id="menu-section" class="py-20 px-6 max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
    <MenuCard
      :number="'1'"
      :title="'Suppliers'"
      :content="'Easily share product data and reach EU buyers—no technical setup needed.'"
      :address="'#suppliers-section'"
    />

    <MenuCard
      :number="'2'"
      :title="'Brands'"
      :content="'Verify supplier data and ensure DPP compliance across global supply chains.'"
      :address="'#brands-section'"
    />

    <MenuCard
      :number="'3'"
      :title="'Partners'"
      :content="'Support scalable product compliance as a verifier, advisor, or integrator.'"
      :address="'#partners-section'"
    />
  </section>
</template>