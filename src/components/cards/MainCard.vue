<script setup lang="ts">
import type { Component } from 'vue'

const props = withDefaults(defineProps <{
    icon? : Component
    bullet?: Component
    product?: string
    color?: string
    title: string
    subtitle?: string
    description: string[]
    titleSize?: string
    titleWeight?: string
}>(), {
    color: 'black',
    titleSize: 'text-lg',
    titleWeight: 'font-light'
})
</script>

<template>
  <div class="p-6 bg-mid rounded-md shadow-lg hover:-translate-y-1 transition h-full flex flex-col">
    
    <div>
      <div v-if="props.icon" class="flex justify-center mb-4">
        <component :is="props.icon" :class="`w-12 h-12 ${props.color}`" />
      </div>
      <h2 v-if="props.product" class="text-2xl text-center font-semibold text-gray-200">{{ props.product }}</h2>
      <h3 v-if="props.title" :class="`${props.titleSize} ${props.titleWeight} text-center text-gray-200 mb-2`">{{ props.title }}</h3>
      <h4 v-if="props.subtitle" class="text-center text-gray-200 mt-4 mb-6">{{ props.subtitle }}</h4>
    </div>

    <div class="mt-auto">
      <div 
        v-if="props.description.length > 1"
        v-for="(desc, index) in props.description"
        :key="index"
        class="flex items-start"
      >
        <div class="mr-2 mt-[2px]">
          <component
            v-if="props.bullet"
            :is="props.bullet"
            class="w-5 h-5 text-sky-500"
          />
          <span v-else class="text-gray-300">•</span>
        </div>
        <p class="text-gray-300">{{ desc }}</p>
      </div>

      <div v-else-if="props.description.length === 1">
        <p class="text-gray-300">{{ props.description[0] }}</p>
      </div>
    </div>

  </div>
</template>