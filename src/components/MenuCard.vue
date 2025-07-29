<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps <{
    number : String
    title: String
    content: String
    address: string 
}>()

</script>

<template>
    <div>
      <div>
        <div class="w-8 h-8 bg-white text-black flex items-center justify-center font-bold rotate-45 mb-4 border border-black">
          <span class="-rotate-45">{{ props.number }}</span>
        </div>

        <div class="space-y-4">
          <h3 class="text-black text-lg font-semibold">{{ title }}</h3>

          <h4 class="text-black text-2xl font-bold leading-tight">
            {{ content }}
          </h4>

          <a :href="address" class="flex items-center text-black font-medium group space-x-2 hover:underline">
            <span>See More</span>

            <!-- Down Chevron -->
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
    </div>
</template>