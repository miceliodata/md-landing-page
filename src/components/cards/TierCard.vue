<script setup lang="ts">
import type { Component } from "vue";

const props = withDefaults(
  defineProps<{
    icon?: Component;
    bullet?: Component;
    product?: string;
    color?: string;
    title: string;
    subtitle?: string;
    description: string[];
    titleSize?: string;
    titleWeight?: string;
    hoverEffect: "lift" | "highlight" | "none";
  }>(),
  {
    color: "black",
    titleSize: "text-lg",
    titleWeight: "font-light",
    hoverEffect: "none",
  }
);
</script>

<template>
  <div class="p-4 pb-5 rounded-md h-full flex flex-col">
    <div class="min-h-[120px] flex flex-col justify-center">
      <div v-if="props.icon" class="flex justify-center mb-3">
        <component :is="props.icon" :class="`w-10 h-10 ${props.color}`" />
      </div>
      <h2
        v-if="props.product"
        class="text-xl text-center font-semibold text-gray-200"
      >
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
