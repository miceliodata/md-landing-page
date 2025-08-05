<script setup lang="ts">
import { ref } from 'vue'

const name = ref('')
const surname = ref('')
const email = ref('')
const userMessage = ref('')
const message = ref('')
const success = ref<boolean | null>(null)
const loading = ref(false)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSfVqp-s-tflusW__pGrFBoLlF54G4N0Cwva-D_LHQ0uyIpRBw/formResponse'
const fields = {
  name: 'entry.320585220',
  surname: 'entry.818511890',
  email: 'entry.448781571',
  message: 'entry.1405688489',
}

const submitForm = async (e: Event) => {
  e.preventDefault()
  message.value = ''
  success.value = null
  loading.value = true

  if (!emailPattern.test(email.value.trim())) {
    message.value = 'Please enter a valid email address.'
    success.value = false
    loading.value = false
    return
  }

  try {
    const formData = new FormData()
    formData.append(fields.name, name.value.trim())
    formData.append(fields.surname, surname.value.trim())
    formData.append(fields.email, email.value.trim())
    formData.append(fields.message, userMessage.value.trim())

    await fetch(googleFormUrl, {
      method: 'POST',
      mode: 'no-cors',
      body: formData,
    })

    success.value = true
    message.value = 'Thanks! Your message has been sent.'
    name.value = ''
    surname.value = ''
    email.value = ''
    userMessage.value = ''
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
      <h2 class="text-3xl font-bold mb-4">Let's Connect</h2>
      <p class="text-gray-600 mb-8">
        Whether you're a supplier, partner, or just curious about what we do, we'd love to hear from you.
      </p>

      <form @submit="submitForm" class="space-y-4">
        <div class="flex">
          <input
            v-model="name"
            type="text"
            placeholder="First Name"
            required
            class="w-full border border-gray-300 rounded px-4 py-3 mr-1"
          />
  
          <input
            v-model="surname"
            type="text"
            placeholder="Last Name"
            required
            class="w-full border border-gray-300 rounded px-4 py-3 ml-1"
          />
        </div>

        <input
          v-model="email"
          type="email"
          placeholder="you@example.com"
          required
          class="w-full border border-gray-300 rounded px-4 py-3"
        />

        <textarea
          v-model="userMessage"
          placeholder="Your message..."
          rows="4"
          class="w-full border border-gray-300 rounded px-4 py-3"
        ></textarea>

        <button
          type="submit"
          :disabled="loading"
          class="w-full bg-gradient-to-r from-sky-700 to-emerald-500 text-white px-6 py-3 rounded shadow transition"
        >
          <span v-if="loading">Sending...</span>
          <span v-else>Submit</span>
        </button>
      </form>

      <p v-if="message" :class="{'text-green-600': success, 'text-red-600': success === false}" class="mt-4 text-sm">
        {{ message }}
      </p>
    </div>
  </section>
</template>