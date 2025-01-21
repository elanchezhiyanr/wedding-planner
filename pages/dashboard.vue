<script setup>
import { ref, onMounted } from 'vue'
import { Card } from '@/components/ui/card'

// Placeholder data
const weddingDetails = ref({
  brideImage: null,
  groomImage: null,
  brideName: '',
  groomName: '',
  location: '',
  weddingDate: null
})

const placeholderImage = '/images/couple-placeholder.png' // We'll add this image later
</script>

<template>
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-1 lg:grid-cols-5 gap-6">
      <!-- Header Section (60%) -->
      <div class="lg:col-span-3">
        <Card class="p-6">
          <div class="flex flex-col items-center">
            <!-- Image Container -->
            <div class="w-64 h-64 rounded-lg overflow-hidden bg-gray-100 mb-6">
              <img
                :src="weddingDetails.brideImage || placeholderImage"
                alt="Couple"
                class="w-full h-full object-cover"
              />
            </div>
            
            <!-- Names and Details -->
            <div class="text-center space-y-2">
              <h2 class="text-2xl font-semibold">
                {{ weddingDetails.brideName }} & {{ weddingDetails.groomName }}
              </h2>
              <p class="text-gray-600">{{ weddingDetails.location }}</p>
              <p class="text-gray-600">{{ weddingDetails.weddingDate }}</p>
            </div>
          </div>
        </Card>
      </div>

      <!-- Countdown Section (40%) -->
      <div class="lg:col-span-2">
        <CountdownCard />
      </div>

      <!-- Upcoming Tasks Card -->
      <div class="lg:col-span-3">
        <TaskCard />
      </div>

      <!-- Guest Invitation Card -->
      <div class="lg:col-span-2">
        <GuestCard />
      </div>
    </div>
  </div>
</template> 