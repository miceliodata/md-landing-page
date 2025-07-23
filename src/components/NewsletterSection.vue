<script setup lang="ts">
</script>

<template>
  <section class="py-16 px-6 bg-white text-center">
    <h2 class="text-2xl font-bold mb-6">Contact Us</h2>
    <form class="max-w-md mx-auto space-y-4">
      <div class="flex flex-col items-start text-left">
        <label for="email" class="mb-1 font-medium">EMAIL</label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          class="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring focus:border-blue-400"
        />
      </div>
      <button type="submit" class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 font-semibold">
        Subscribe
      </button>
    </form>
  </section>
</template>