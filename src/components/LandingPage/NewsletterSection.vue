<script setup lang="ts">
</script>

<template>
  <section id="newsletter-section" class="py-16 px-6 bg-white text-center">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Stay Informed</h2>
      <p class="text-gray-600 mb-8">
        Get notified about regulatory updates, product launches, and new supplier listings.
      </p>

      <form class="space-y-4">
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <button
          type="submit"
          class="w-full bg-primary text-white px-6 py-3 rounded hover:bg-primary-dark font-semibold shadow transition-colors"
        >
          Join the List
        </button>
      </form>

      <p class="text-xs text-gray-400 mt-4">
        We’ll never share your email. Unsubscribe anytime.
      </p>
    </div>
  </section>
</template>