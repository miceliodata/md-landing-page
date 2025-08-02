<script setup lang="ts">
import { type FunctionalComponent, computed } from 'vue';
import { getBGColorClass } from '@/utils/colorClasses'

const props = withDefaults(defineProps <{
    icon : object | FunctionalComponent
    color?: string
    title: string
    address: string 
}>(), {
  color: 'black'
})

const iconBGColor = computed(() => getBGColorClass(props.color))

</script>

<template>
      <div class="rounded-md shadow-lg p-2">
        <div class="flex justify-center pb-4">
          <div :class="`${iconBGColor} w-12 h-12 text-black flex items-center justify-center font-bold rotate-45 mb-4`">
            <span class="-rotate-45">
              <component :is="icon" :class="`w-7 h-7 text-white`" />
            </span>
          </div>
        </div>

        <div class="space-y-4">
          <h3 class="text-center text-gray-800 text-lg font-semibold">{{ title }}</h3>

          <h4 class="text-gray-700 text-md font-medium leading-tight">
            <slot name="content"></slot>
          </h4>

          <a :href="address" class="py-4 flex items-center justify-center text-black font-medium group space-x-2 hover:underline">
            <span>See More</span>

            <svg
              class="w-4 h-4 transform transition-transform group-hover:translate-y-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 15.6l-8.5-8.6 1.4-1.4L12 12.8l7.1-7.2 1.4 1.4z" />
            </svg>
          </a>
        </div>
      </div>
</template>