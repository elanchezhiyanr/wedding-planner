<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  'submit': [data: any]
}>()

const formData = ref({
  event_name: '',
  event_date: '',
  event_time: '',
  location: '',
  description: ''
})

const handleSubmit = async () => {
  try {
    const { data: eventData } = await useFetch('/api/events', {
      method: 'POST',
      body: {
        ...formData.value,
        status_id: 1 // Active status
      }
    })

    emit('update:open', false)
    emit('submit', eventData.value)
  } catch (error) {
    console.error('Error adding event:', error)
  }
}
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Event</DialogTitle>
        <DialogDescription>
          Add a new event to your wedding timeline
        </DialogDescription>
      </DialogHeader>
      <form @submit.prevent="handleSubmit">
        <div class="grid gap-4 py-4">
          <div class="grid gap-2">
            <Label for="event_name">Event Name</Label>
            <Input
              id="event_name"
              v-model="formData.event_name"
              placeholder="Enter event name"
            />
          </div>

          <div class="grid gap-2">
            <Label for="event_date">Date</Label>
            <Input
              id="event_date"
              v-model="formData.event_date"
              type="date"
            />
          </div>

          <div class="grid gap-2">
            <Label for="event_time">Time</Label>
            <Input
              id="event_time"
              v-model="formData.event_time"
              type="time"
            />
          </div>

          <div class="grid gap-2">
            <Label for="location">Location</Label>
            <Input
              id="location"
              v-model="formData.location"
              placeholder="Enter location"
            />
          </div>

          <div class="grid gap-2">
            <Label for="description">Description</Label>
            <Textarea
              id="description"
              v-model="formData.description"
              placeholder="Enter event description"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Add Event</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template>