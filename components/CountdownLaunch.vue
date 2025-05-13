<template>
  <div class="text-center">
    <h3 class="text-xl font-semibold mb-6">Launching In</h3>
    <div class="flex justify-center gap-8">
      <div class="text-center">
        <div class="text-4xl font-bold text-rose-500">{{ days }}</div>
        <div class="text-sm text-gray-500">Days</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-rose-500">{{ hours }}</div>
        <div class="text-sm text-gray-500">Hours</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-rose-500">{{ minutes }}</div>
        <div class="text-sm text-gray-500">Minutes</div>
      </div>
      <div class="text-center">
        <div class="text-4xl font-bold text-rose-500">{{ seconds }}</div>
        <div class="text-sm text-gray-500">Seconds</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Set your target launch date here (Year, Month (0-11), Day, Hour, Minute)
const targetDate = new Date(2025, 5, 1, 12, 0) // March 1, 2024 at 12:00 PM

const days = ref(0)
const hours = ref(0)
const minutes = ref(0)
const seconds = ref(0)

const calculateTimeLeft = () => {
  const now = new Date()
  const difference = targetDate - now

  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    minutes.value = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
    seconds.value = Math.floor((difference % (1000 * 60)) / 1000)
  } else {
    // Reset timer when target date is reached
    days.value = 0
    hours.value = 0
    minutes.value = 0
    seconds.value = 0
  }
}

let interval

onMounted(() => {
  calculateTimeLeft() // Initial calculation
  interval = setInterval(calculateTimeLeft, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>