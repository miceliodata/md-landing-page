<script setup lang="ts">
import BulletPointCard from '@/components/cards/BulletPointCard.vue'
import { BuildingOfficeIcon } from '@heroicons/vue/24/outline'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
import { UserGroupIcon } from '@heroicons/vue/24/outline'
</script>

<template>
  <section
    id="menu-section"
    class="py-20 px-6 max-w-6xl mx-auto flex items-center"
  >
    <div class="w-full grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

      <BulletPointCard
        :icon="BuildingOfficeIcon"
        color="blue"
        title="For Suppliers"
        address="#suppliers-section"
      >
        <template #content>
          <ul class="list-disc pl-10 pr-4 space-y-1">
            <li>Digital product passport creation</li>
            <li>Supply chain transparency tools</li>
            <li>Compliance with EU regulations</li>
          </ul>
        </template>
      </BulletPointCard>

      <BulletPointCard
        :icon="ShoppingBagIcon"
        color="cyan"
        title="For Brands"
        address="#brands-section"
      >
        <template #content>
          <ul class="list-disc pl-10 pr-4 space-y-1">
            <li>End-to-end supply chain visibility</li>
            <li>Sustainability reporting automation</li>
            <li>Consumer trust through transparency</li>
          </ul>
        </template>
      </BulletPointCard>

      <BulletPointCard
        :icon="UserGroupIcon"
        color="emerald"
        title="For Partners"
        address="#partners-section"
      >
        <template #content>
          <ul class="list-disc pl-10 pr-4 space-y-1">
            <li>Technology integration opportunities</li>
            <li>Joint market development</li>
            <li>Shared innovation ecosystem</li>
          </ul>
        </template>
      </BulletPointCard>

    </div>
  </section>
</template>
