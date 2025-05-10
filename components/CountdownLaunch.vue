<template>
  <div class="text-center">
    <p class="text-xl font-semibold mb-4">Launching In</p>
    <div class="flex justify-center space-x-4">
      <div class="text-center">
        <span class="text-4xl font-bold">{{ days }}</span>
        <p class="text-sm text-gray-500">Days</p>
      </div>
      <div class="text-center">
        <span class="text-4xl font-bold">{{ hours }}</span>
        <p class="text-sm text-gray-500">Hours</p>
      </div>
      <div class="text-center">
        <span class="text-4xl font-bold">{{ minutes }}</span>
        <p class="text-sm text-gray-500">Minutes</p>
      </div>
      <div class="text-center">
        <span class="text-4xl font-bold">{{ seconds }}</span>
        <p class="text-sm text-gray-500">Seconds</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const days = ref(21)
const hours = ref(11)
const minutes = ref(20)
const seconds = ref(9)

let interval

onMounted(() => {
  interval = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value--
    } else {
      seconds.value = 59
      if (minutes.value > 0) {
        minutes.value--
      } else {
        minutes.value = 59
        if (hours.value > 0) {
          hours.value--
        } else {
          hours.value = 23
          if (days.value > 0) {
            days.value--
          }
        }
      }
    }
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>