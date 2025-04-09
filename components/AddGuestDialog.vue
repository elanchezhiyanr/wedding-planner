<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  'update:open': [value: boolean]
  'submit': [data: any]
}>()

const guestType = ref('individual')
const groupSize = ref(2)
const events = ref<any[]>([])
const selectedEvents = ref<number>()

const formData = ref({
  name: '',
  email: '',
  phone: '',
  address: '',
  dietary_preferences: '',
  notes: '',
})

onMounted(async () => {
  // Fetch events
  const response = await useFetch('/api/events')
  if (response.data.value) {
    events.value = response.data.value
  }
})

const handleSubmit = async () => {
  try {
    if (guestType.value === 'individual') {
      // Create individual guest
      const { data: guestData } = await useFetch('/api/guests', {
        method: 'POST',
        body: {
          ...formData.value,
          rsvp_status_id: 1 // Pending status
        }
      })

      // Create guest-event relationships
      if (guestData.value?.data?.[0]?.guest_id) {
        for (const eventId of selectedEvents.value) {
          await useFetch('/api/guest-events', {
            method: 'POST',
            body: {
              guest_id: guestData.value.data[0].guest_id,
              event_id: eventId,
              invitation_status_id: 1 // Pending status
            }
          })
        }
      }
    } else {
      // Create group
      const { data: groupData } = await useFetch('/api/groups', {
        method: 'POST',
        body: {
          group_name: formData.value.name,
        }
      })

      // Create group-event relationships
      if (groupData.value?.data?.[0]?.group_id) {
        for (const eventId of selectedEvents.value) {
          await useFetch('/api/group-events', {
            method: 'POST',
            body: {
              group_id: groupData.value.data[0].group_id,
              event_id: eventId,
              invitation_status_id: 1 // Pending status
            }
          })
        }
      }
    }

    emit('update:open', false)
    emit('submit', {
      type: guestType.value,
      ...formData.value,
      events: selectedEvents.value
    })
  } catch (error) {
    console.error('Error adding guest/group:', error)
  }
}
</script>

<template>
  <Dialog :open="open" @update:open="$emit('update:open', $event)">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add Guest</DialogTitle>
        <DialogDescription>
          Add a new guest or family group to your wedding
        </DialogDescription>
      </DialogHeader>
      <form @submit.prevent="handleSubmit">
        <div class="grid gap-4 py-4">
          <div class="grid gap-2">
            <Label for="type">Guest Type</Label>
            <Select v-model="guestType">
              <SelectTrigger>
                <SelectValue placeholder="Select type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="individual">Individual</SelectItem>
                <SelectItem value="group">Group / Family</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div v-if="guestType === 'group'" class="grid gap-2">
            <Label for="groupSize">Number of People</Label>
            <Input
              id="groupSize"
              v-model="groupSize"
              type="number"
              min="2"
              placeholder="Enter group size"
            />
          </div>

          <div class="grid gap-2">
            <Label for="name">Name</Label>
            <Input
              id="name"
              v-model="formData.name"
              placeholder="Enter name"
            />
          </div>

          <div class="grid gap-2">
            <Label for="email">Email</Label>
            <Input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Enter email"
            />
          </div>

          <div class="grid gap-2">
            <Label for="phone">Phone</Label>
            <Input
              id="phone"
              v-model="formData.phone"
              placeholder="Enter phone"
            />
          </div>

          <div class="grid gap-2">
            <Label for="address">Address</Label>
            <Textarea
              id="address"
              v-model="formData.address"
              placeholder="Enter address"
            />
          </div>

          <div class="grid gap-2">
            <Label for="events">Events Invited To</Label>
            <Select
              v-model="selectedEvents"
              :options="events"
              option-label="event_name"
              option-value="event_id"
              placeholder="Select events"
            />
          </div>

          <div class="grid gap-2">
            <Label for="dietary">Dietary Preferences</Label>
            <Input
              id="dietary"
              v-model="formData.dietary_preferences"
              placeholder="Enter dietary preferences"
            />
          </div>

          <div class="grid gap-2">
            <Label for="notes">Notes</Label>
            <Textarea
              id="notes"
              v-model="formData.notes"
              placeholder="Enter any additional notes"
            />
          </div>
        </div>

        <DialogFooter>
          <Button type="submit">Add {{ guestType === 'individual' ? 'Guest' : 'Group' }}</Button>
        </DialogFooter>
      </form>
    </DialogContent>
  </Dialog>
</template> 