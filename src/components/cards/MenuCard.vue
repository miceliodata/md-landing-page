<script setup lang="ts">
//import { type FunctionalComponent } from "vue";
import { computed } from "vue";
import { getBGColorClass } from "@/utils/colorClasses";

const props = withDefaults(
  defineProps<{
    //icon: object | FunctionalComponent;
    src: string;
    alt?: string;
    color?: string;
    title: string;
    address: string;
  }>(),
  {
    color: "black",
  }
);

const iconBGColor = computed(() => getBGColorClass(props.color));
</script>

<template>
  <div class="flex flex-col h-full rounded-md shadow-lg px-2 py-6 bg-gray-50">
    <div class="flex justify-center pb-3 pt-4">
      <a
        :href="`${address}`"
        :class="`${iconBGColor} w-20 h-20 text-black flex items-center justify-center font-bold rotate-45 mb-3 hover:transform hover:-translate-y-2 transition-all duration-300`"
      >
        <span class="-rotate-45">
          <!-- <component :is="icon" :class="`w-7 h-7 text-white`" /> -->
          <img class="w-14 h-14 invert" :src="src" :alt="alt" />
        </span>
      </a>
    </div>

    <div class="flex-1 space-y-3">
      <h3 class="text-center text-gray-800 text-xl font-semibold">
        {{ title }}
      </h3>

      <!-- <h4 class="text-gray-700 text-md font-light">
        <slot name="content"></slot>
      </h4> -->
    </div>

    <!-- <a
      :href="address"
      class="pt-12 pb-4 flex items-center justify-center text-black font-medium group space-x-2"
    >
      <div
        :class="`${iconBGColor} flex items-center py-2 px-4 rounded-3xl shadow-lg`"
      >
        <span class="text-white">See More</span>
        <svg
          class="w-4 h-4 ml-2 transform transition-transform group-hover:rotate-90 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8.4 4.5l1.4-1.4L17.2 12l-7.4 8.9-1.4-1.4L14.4 12z" />
        </svg>
      </div>
    </a> -->
  </div>
</template>
