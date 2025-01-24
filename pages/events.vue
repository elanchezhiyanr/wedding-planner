<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Event Management</h1>
      <Button @click="showAddEvent = true">Add Event</Button>
    </div>
    
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Timeline</h2>
        </div>
        
        <div class="grid gap-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Ceremony</h3>
            <div class="space-y-2">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="text-sm text-gray-500">Date</span>
                  <p class="font-semibold">June 15, 2024</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Time</span>
                  <p class="font-semibold">2:00 PM</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Location</span>
                  <p class="font-semibold">St. Mary's Church</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Duration</span>
                  <p class="font-semibold">1 hour</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Reception</h3>
            <div class="space-y-2">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="text-sm text-gray-500">Date</span>
                  <p class="font-semibold">June 15, 2024</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Time</span>
                  <p class="font-semibold">4:00 PM</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Location</span>
                  <p class="font-semibold">Grand Hotel Ballroom</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Duration</span>
                  <p class="font-semibold">6 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">After Party</h3>
            <div class="space-y-2">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="text-sm text-gray-500">Date</span>
                  <p class="font-semibold">June 15, 2024</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Time</span>
                  <p class="font-semibold">10:00 PM</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Location</span>
                  <p class="font-semibold">Skybar Lounge</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Duration</span>
                  <p class="font-semibold">3 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <AddEventDialog 
      v-model:open="showAddEvent"
      @submit="handleAddEvent"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import AddEventDialog from '@/components/AddEventDialog'

const showAddEvent = ref(false)

const handleAddEvent = (eventData: any) => {
  // Handle the event data submission logic here
}
</script> 