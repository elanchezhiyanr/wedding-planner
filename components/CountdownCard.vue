<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'

const days = ref(0)
const hours = ref(0)
let timer

const calculateTimeLeft = () => {
  // TODO: Replace with actual wedding date from store/props
  const weddingDate = new Date('2024-12-31') // Example date
  const now = new Date()
  const difference = weddingDate - now

  if (difference > 0) {
    days.value = Math.floor(difference / (1000 * 60 * 60 * 24))
    hours.value = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  }
}

onMounted(() => {
  calculateTimeLeft()
  timer = setInterval(calculateTimeLeft, 1000 * 60) // Update every minute
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle class="text-xl font-semibold text-center">Time to Argument</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="flex justify-center items-center space-x-4">
        <div class="text-center">
          <div class="text-4xl font-bold">{{ days }}</div>
          <div class="text-sm text-gray-600">Days</div>
        </div>
        <div class="text-4xl font-bold">:</div>
        <div class="text-center">
          <div class="text-4xl font-bold">{{ hours }}</div>
          <div class="text-sm text-gray-600">Hours</div>
        </div>
      </div>
    </CardContent>
  </Card>
</template> 