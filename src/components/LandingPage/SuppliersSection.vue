<script setup lang="ts">
import FactoryIcon from '@/assets/factory.svg'
import { BoltIcon } from '@heroicons/vue/24/outline'
import { BuildingStorefrontIcon } from '@heroicons/vue/24/outline'
import { UserIcon } from '@heroicons/vue/24/outline'

const tiers = [
  {
    icon:FactoryIcon,
    color:'text-emerald-500',
    tier: '1',
    title: 'Manufacturers',
    subtitle: 'Large-scale operations with advanced systems',
    description: ['API Integration','Real-time data sync','ERP connectivity','Automated compliance'],
  },
  {
    icon:BuildingStorefrontIcon,
    color:'text-blue-500',
    tier: '2-3',
    title: 'Suppliers',
    subtitle: 'Mid-scale operations with structured processes',
    description: ['CSV Upload','Batch processing','Template-based entry','Quality verification'],
  },
  {
    icon:UserIcon,
    color:'text-indigo-500',
    tier: '4',
    title: 'Artisans',
    subtitle: 'Small-scale craftspeople and workshops',
    description: ['Mobile capture','Photo documentation','Voice notes','Simple interfaces'],
  },
]

const features = [
  {
    title:'Direct EU Market Access',
    description:'Connect with European brands seeking DPP compliance',
  },
  {
    title:'Streamlined Data Collection',
    description:'Efficient systems tailored to your operational capacity',
  },
  {
    title:'Quality Certification',
    description:'Verified data increases trust and premium pricing',
  },
  {
    title:'Network Growth',
    description:'Join a growing ecosystem of verified suppliers',
  }
]
</script>

<template>
  <section id="suppliers-section" class="scroll-mt-[7rem] bg-dark h-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-5xl md:text-4xl font-bold text-gray-100 mb-4">
        Data Collection for Every Scale
      </h2>
      <p class="text-lg text-gray-300 max-w-2xl mx-auto mb-12">
        Whether you're a large manufacturer or a small artisan, we have the right solution for your data collection needs.
      </p>

      <div class="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 text-left">
        <div
          v-for="(tier, index) in tiers"
          :key="index"
          class="p-6 bg-mid rounded-md shadow-lg hover:-translate-y-1 transition"
        >
          <div class="flex justify-center mb-4">
            <component :is="tier.icon" :class="`w-12 h-12 ${tier.color}`" />
          </div>
          <h2 class="text-2xl text-center font-semibold text-gray-200">Tier {{ tier.tier }}</h2>
          <h3 class="text-lg text-center font-light text-gray-200 mb-2">{{ tier.title }}</h3>
          <h4 class="text-center text-gray-200 mt-4 mb-6">{{ tier.subtitle }}</h4>
           <div 
            v-for="(desc, index) in tier.description"
            :key="index"
            class="flex items-center">
            <component :is="BoltIcon" class="w-5 h-5 mr-2 text-sky-500"/>
            <p class="text-gray-300">{{ desc }}</p>
           </div>
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto text-center">
      <h2 class="text-4xl md:text-3xl font-bold text-gray-100 mt-24 mb-6">
        Power Your Success With Our Network
      </h2>
      <div class="grid gap-4 grid-cols-2 pt-8">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="bg-mid rounded-md shadow-lg p-6"
        >
          <h3 class="text-xl font-semibold text-gray-200 mb-4">{{ feature.title }}</h3>
          <h4 class="text-gray-300">{{ feature.description }}</h4>
        </div>
      </div>
    </div>
  </section>
</template>