<script setup lang="ts">
import { ref, type Component } from 'vue'
//import { ChevronDownIcon } from '@heroicons/vue/24/outline'
import { PlusIcon, MinusIcon } from '@heroicons/vue/24/outline'

const props = withDefaults(
  defineProps<{
    icon?: Component
    bullet?: Component
    product?: string
    color?: string
    title: string
    subtitle?: string
    description: string[]
    titleSize?: string
    titleWeight?: string
    hoverEffect: 'lift' | 'highlight' | 'none'
  }>(),
  {
    color: 'black',
    titleSize: 'text-lg',
    titleWeight: 'font-light',
    hoverEffect: 'none'
  }
)

const textShown = ref<boolean>(false)
function toggleText() {
  textShown.value = !textShown.value
}
</script>

<template>
  <div class="p-4 pb-5 rounded-md h-full flex flex-col">
    <div class="min-h-[120px] flex flex-col justify-center">
      <div v-if="props.icon" class="flex justify-center mb-3">
        <component :is="props.icon" :class="`w-10 h-10 ${props.color}`" />
      </div>
      <h2 v-if="props.product" class="text-xl text-center font-semibold text-gray-200">
        {{ props.product }}
      </h2>
      <h3
        v-if="props.title"
        :class="`${props.titleSize} ${props.titleWeight} text-center text-gray-200 mb-2`"
      >
        {{ props.title }}
      </h3>
      <h4 v-if="props.subtitle" class="text-center text-gray-200 mt-3 mb-4">
        {{ props.subtitle }}
      </h4>
    </div>

    <div class="mt-3 flex-grow">
      <div
        v-if="props.description.length > 1"
        v-for="(desc, index) in props.description"
        :key="index"
        class="flex items-start"
      >
        <div class="mr-2 mt-[2px]">
          <component v-if="props.bullet" :is="props.bullet" class="w-5 h-5 text-sky-500" />
          <span v-else class="text-gray-300">•</span>
        </div>
        <p class="text-gray-300">{{ desc }}</p>
      </div>

      <div v-else-if="props.description.length === 1" class="flex flex-col items-center">
        <transition name="slide-fade">
          <p v-if="textShown" class="text-gray-300 multiline mt-4 text-center">
            {{ props.description[0] }}
          </p>
        </transition>

        <div
          class="w-10 h-10 mt-4 rounded-full flex items-center justify-center bg-gradient-to-r from-sky-700 to-emerald-500 hover:from-teal-400 hover:to-teal-400 transition duration-200 cursor-pointer"
          :class="{ 'mt-9': textShown }"
          @click="toggleText"
        >
          <PlusIcon
            v-if="!textShown"
            class="w-6 h-6 text-white transition-transform duration-300"
          />
          <MinusIcon v-else class="w-6 h-6 text-white transition-transform duration-300" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Transition for the slide down/up */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
  max-height: 0;
}

.slide-fade-enter-to,
.slide-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
  max-height: 600px; /* adjust as needed */
}

/* Preserve line breaks */
.multiline {
  white-space: pre-line;
}
</style>
