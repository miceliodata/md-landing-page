<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const message = ref('')
const success = ref<boolean | null>(null)
const loading = ref(false)

const submitForm = async (e: Event) => {
  e.preventDefault()
  message.value = ''
  success.value = null
  loading.value = true

  try {
    const res = await fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.value }),
    })

    const data = await res.json()
    success.value = res.ok
    message.value = data.message || 'Submission complete'
    if (res.ok) email.value = ''
  } catch (error) {
    success.value = false
    message.value = 'Something went wrong. Please try again later.'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <section id="newsletter-section" class="py-16 px-6 bg-white text-center">
    <div class="max-w-xl mx-auto">
      <h2 class="text-3xl font-bold mb-4">Stay Informed</h2>
      <p class="text-gray-600 mb-8">
        Get notified about regulatory updates, product launches, and new supplier listings.
      </p>

      <form @submit="submitForm" class="space-y-4">
        <input
          v-model="email"
          type="email"
          id="email"
          placeholder="you@example.com"
          class="w-full border border-gray-300 rounded px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-gradient-to-r from-sky-700 to-emerald-500 hover:from-teal-400 hover:to-teal-400 text-white px-6 py-3 rounded hover:bg-primary-dark font-semibold shadow transition-colors"
        >
          <span v-if="loading">Joining...</span>
          <span v-else>Join the List</span>
        </button>
      </form>

      <p v-if="message" :class="{'text-green-600': success, 'text-red-600': success === false}" class="mt-4 text-sm">
        {{ message }}
      </p>
    </div>
  </section>
</template>