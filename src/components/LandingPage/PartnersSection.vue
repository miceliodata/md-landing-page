<script setup lang="ts">
import MainCard from '@/components/cards/MainCard.vue'

import { DocumentTextIcon } from '@heroicons/vue/24/outline'
import { ChartBarSquareIcon } from '@heroicons/vue/24/outline'
import { GlobeAltIcon } from '@heroicons/vue/24/outline'
import { TruckIcon } from '@heroicons/vue/24/outline'
import { ShieldCheckIcon } from '@heroicons/vue/24/outline'
import { PuzzlePieceIcon } from '@heroicons/vue/24/outline'
import { BoltIcon } from '@heroicons/vue/24/outline'

import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { ArrowsPointingInIcon } from '@heroicons/vue/24/outline'
import { SquaresPlusIcon } from '@heroicons/vue/24/outline'

const partnerFeatures = [
  {
    icon:DocumentTextIcon,
    bullet:BoltIcon,
    color:'text-indigo-500',
    title:'Label Makers',
    subtitle:'QR code integration and physical-digital linking',
    description:['QR code printing','NFC integration','Product labeling','Digital twins']
  },
  {
    icon:ChartBarSquareIcon,
    bullet:BoltIcon,
    color:'text-blue-500',
    title:'ESG Specialists',
    subtitle:'Sustainability metrics and compliance consulting',
    description:['Carbon footprint analysis','Sustainability reporting','Compliance auditing','ESG consulting']
  },
  {
    icon:GlobeAltIcon,
    bullet:BoltIcon,
    color:'text-cyan-500',
    title:'Textile Sourcers',
    subtitle:'Supply chain mapping and supplier relationships',
    description:['Supplier onboarding','Quality assurance','Relationship management','Market intelligence']
  },
  {
    icon:TruckIcon,
    bullet:BoltIcon,
    color:'text-teal-500',
    title:'Customs Agents',
    subtitle:'Trade compliance and documentation verification',
    description: ['Documentation verification', 'Customs clearance', 'Trade compliance', 'Logistics integration']
  },
  {
    icon:ShieldCheckIcon,
    bullet:BoltIcon,
    color:'text-emerald-500',
    title:'Tech Integrators',
    subtitle:'System connections and API development',
    description: ['API development', 'System integration', 'Data migration', 'Technical support']
  },
  {
    icon:PuzzlePieceIcon,
    bullet:BoltIcon,
    color:'text-green-500                                                                                                        -500',
    title:'Industry Associations and NGOs',
    subtitle:'Local knowledge and networks for ground-relevant solutions',
    description: ['Local expertise', 'Network connections', 'Field experience', 'Regional insights']
  }
]

const collabModels = [
  {
    icon: ShoppingCartIcon,
    color: 'bg-emerald-500/40',
    title: 'Service Provider',
    desc: 'Offer your specialized services directly through our platform'  
  },
  {
    icon: ArrowsPointingInIcon,
    color: 'bg-teal-500/40',
    title: 'Integration Partner',
    desc: 'Integrate your systems with our ecosystem for seamless operations'  
  },
  {
    icon: SquaresPlusIcon,
    color: 'bg-sky-500/40',
    title: 'Strategic Alliance',
    desc: 'Long-term partnership for mutual growth and market expansion'
  }
]
</script>

<template>
  <section
    id="partners-section"
    class="scroll-mt-[7rem] h-auto bg-dark px-6 text-gray-100 flex flex-col justify-center py-20"
  >
    <div class="max-w-6xl mx-auto w-full">
      <div class="text-center mb-12">
        <h2 class="text-5xl font-bold mb-4">Partnership Opportunities</h2>
        <p class="text-gray-300 text-xl">
          We're building a comprehensive ecosystem that requires diverse expertise. Find your role in the future of supply chain transparency.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div 
        v-for="(feature, index) in partnerFeatures"
        :key="index"
        class="h-full"
        >
          <MainCard :product="feature.title" :icon="feature.icon" :bullet="feature.bullet" :color="feature.color" :title="''" :subtitle="feature.subtitle" :description="feature.description" />
        </div>
      </div>

      <div class="max-w-4xl mx-auto text-center p-6 mt-20 rounded-md bg-mid shadow-lg shadow-blue-950/20">
        <h2 class="text-4xl md:text-3xl font-bold text-gray-100 mt-4">
          Collaboration Models
        </h2>
        <div class="grid gap-4 grid-cols-1 sm:grid-cols-3 pt-8">
          <div
            v-for="(model, index) in collabModels"
            :key="index"
            class="p-6"
          >
            <div class="flex justify-center mb-4">
              <div :class="`${model.color} rounded-full w-16 h-16 flex items-center justify-center`">
                <component :is="model.icon" class="w-8 h-8 text-white" />
              </div>
            </div>
            <h3 class="text-xl font-semibold text-gray-200 mb-4">{{ model.title }}</h3>
            <h4 class="text-gray-300">{{ model.desc }}</h4>
          </div>
        </div>
      </div>

      <div class="w-full mx-auto text-center py-6 mt-20">
        <h2 class="text-4xl md:text-3xl font-bold text-gray-100 mb-10">
          Our Partners
        </h2>

        <div class="relative">
          <div
            class="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style="background: linear-gradient(to right, #393a3d, transparent);"
          ></div>
          <div
            class="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style="background: linear-gradient(to left, #393a3d, transparent);"
          ></div>

          <div class="bg-light py-8 rounded-md relative z-0 overflow-hidden">
            <div class="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-8 px-4">
              <img src="@/assets/BRACU.png" alt="brac-logo" class="h-20 w-auto opacity-80 hover:opacity-100 transition" />
              <img src="@/assets/CIRPASS-2.png" alt="cirpass2-logo" class="h-20 w-auto opacity-80 hover:opacity-100 transition" />
              <img src="@/assets/Gaia-X.webp" alt="gaiax-logo" class="h-20 w-auto opacity-80 hover:opacity-100 transition" />
              <img src="@/assets/GS1.png" alt="gs1-logo" class="h-20 w-auto opacity-80 hover:opacity-100 transition" />
            </div>
          </div>
        </div>
      </div>


    </div>
  </section>
</template>