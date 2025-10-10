<script setup lang="ts">
import MenuCard from "@/components/cards/MenuCard.vue";
import SuppliersIcon from "@/assets/suppliers-menu-icon.png";
import BrandsIcon from "@/assets/brands-menu-icon.png";
import PartnersIcon from "@/assets/partners-menu-icon.png";
</script>

<template>
  <section id="menu-section" class="min-h-screen py-20 scroll-mt-24 flex flex-col justify-center">
    <h1 class="text-4xl text-center md:text-5xl font-bold text-gray-900 mb-12 animate-word-reveal">
      What We Offer
    </h1>

    <div class="px-6 max-w-5xl mx-auto flex items-center animate-stagger-group">
      <div class="w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div class="animate-stagger">
          <MenuCard
            :src="SuppliersIcon"
            alt="suppliers-menu-icon"
            color="blue"
            title="For Suppliers"
            address="#suppliers-section"
          >
          </MenuCard>
        </div>

        <div class="animate-stagger">
          <MenuCard
            :src="BrandsIcon"
            alt="brands-menu-icon"
            color="cyan"
            title="For Brands"
            address="#brands-section"
          >
          </MenuCard>
        </div>

        <div class="animate-stagger">
          <MenuCard
            :src="PartnersIcon"
            alt="partners-menu-icon"
            color="emerald"
            title="For Partners"
            address="#partners-section"
          >
          </MenuCard>
        </div>
      </div>
    </div>
  </section>
</template>
