<script setup lang="ts">
import MenuCard from "@/components/cards/MenuCard.vue";
</script>

<template>
  <section id="menu-section" class="py-20">
    <h1 class="text-4xl text-center md:text-5xl font-bold text-gray-900 mb-12">
      What We Offer
    </h1>

    <div class="px-6 max-w-6xl mx-auto flex items-center">
      <div class="w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <MenuCard
          icon="suppliers-menu-icon"
          color="blue"
          title="For Suppliers"
          address="#suppliers-section"
        >
        </MenuCard>

        <MenuCard
          icon="brands-menu-icon"
          color="cyan"
          title="For Brands"
          address="#brands-section"
        >
        </MenuCard>

        <MenuCard
          icon="partners-menu-icon"
          color="emerald"
          title="For Partners"
          address="#partners-section"
        >
        </MenuCard>
      </div>
    </div>
  </section>
</template>
