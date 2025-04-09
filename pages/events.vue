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
          <div v-for="event in events" :key="event.event_id" class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">{{ event.event_name }}</h3>
            <div class="space-y-2">
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <span class="text-sm text-gray-500">Date</span>
                  <p class="font-semibold">{{ formatDate(event.event_date) }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Time</span>
                  <p class="font-semibold">{{ formatTime(event.event_time) }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Location</span>
                  <p class="font-semibold">{{ event.location }}</p>
                </div>
                <div>
                  <span class="text-sm text-gray-500">Description</span>
                  <p class="font-semibold">{{ event.description }}</p>
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
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import AddEventDialog from '@/components/AddEventDialog.vue'

const showAddEvent = ref(false)
const events = ref<any[]>([])

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const formatTime = (time: string) => {
  return new Date(`2000-01-01T${time}`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: 'numeric'
  })
}

const fetchEvents = async () => {
  try {
    const { data } = await useFetch('/api/events')
    if (data.value) {
      events.value = data.value
    }
  } catch (error) {
    console.error('Error fetching events:', error)
  }
}

const handleAddEvent = async (eventData: any) => {
  await fetchEvents()
}

onMounted(() => {
  fetchEvents()
})
</script> 