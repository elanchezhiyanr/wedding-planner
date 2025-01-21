<script setup>
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table'
import { Checkbox } from '@/components/ui/checkbox'

// Placeholder data - replace with actual data from store/API
const guests = ref([
  {
    id: 1,
    name: 'John Doe',
    rsvpStatus: 'Not Sent',
    events: {
      ceremony: false,
      reception: false,
      dinner: false
    }
  }
])

const events = ref(['Ceremony', 'Reception', 'Dinner'])

const rsvpStatuses = ['Not Sent', 'Sent', 'Accepted', 'Rejected']

const getRsvpStatusColor = (status) => {
  switch (status) {
    case 'Accepted':
      return 'text-green-600'
    case 'Rejected':
      return 'text-red-600'
    case 'Sent':
      return 'text-blue-600'
    default:
      return 'text-gray-600'
  }
}

const toggleEvent = (guestId, event) => {
  const guest = guests.value.find(g => g.id === guestId)
  if (guest) {
    guest.events[event.toLowerCase()] = !guest.events[event.toLowerCase()]
  }
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Guest List</CardTitle>
    </CardHeader>
    <CardContent>
      <div class="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Guest Name</TableHead>
              <TableHead>RSVP Status</TableHead>
              <TableHead v-for="event in events" :key="event">{{ event }}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="guest in guests" :key="guest.id">
              <TableCell>{{ guest.name }}</TableCell>
              <TableCell>
                <span :class="getRsvpStatusColor(guest.rsvpStatus)">
                  {{ guest.rsvpStatus }}
                </span>
              </TableCell>
              <TableCell v-for="event in events" :key="event" class="text-center">
                <Checkbox
                  :checked="guest.events[event.toLowerCase()]"
                  class="rounded-full data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                  @update:checked="toggleEvent(guest.id, event)"
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
</template> 