<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Guest Management</h1>
      <Button @click="showAddGuest = true">Add Guest</Button>
    </div>
    
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Guest List Overview</h2>
          <div class="flex gap-4">
            <div>
              <span class="text-sm text-gray-500">Total Guests</span>
              <p class="font-semibold">{{ totalGuests }}</p>
            </div>
            <div>
              <span class="text-sm text-gray-500">RSVPs Received</span>
              <p class="font-semibold">{{ rsvpCount }}</p>
            </div>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Events</TableHead>
                <TableHead>RSVP Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="guest in guests" :key="guest.guest_id || guest.group_id">
                <TableCell>{{ guest.name || guest.group_name }}</TableCell>
                <TableCell>{{ guest.email }}</TableCell>
                <TableCell>{{ guest.phone }}</TableCell>
                <TableCell>
                  <Badge :variant="guest.guest_id ? 'default' : 'secondary'">
                    {{ guest.guest_id ? 'Individual' : 'Group' }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div class="flex gap-1">
                    <Badge 
                      v-for="event in guest.events" 
                      :key="event.event_id"
                      variant="outline"
                    >
                      {{ event.event_name }}
                    </Badge>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge :variant="getRsvpVariant(guest.rsvp_status_id)">
                    {{ getRsvpStatus(guest.rsvp_status_id) }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <Icon name="lucide:more-vertical" class="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    <AddGuestDialog 
      v-model:open="showAddGuest"
      @submit="handleAddGuest"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import AddGuestDialog from '@/components/AddGuestDialog.vue'

const showAddGuest = ref(false)
const guests = ref<any[]>([])
const groups = ref<any[]>([])

const totalGuests = computed(() => {
  const individualCount = guests.value.length
  const groupCount = groups.value.reduce((acc, group) => acc + (group.size || 1), 0)
  return individualCount + groupCount
})

const rsvpCount = computed(() => {
  return guests.value.filter(guest => guest.rsvp_status_id === 2).length + 
         groups.value.filter(group => group.rsvp_status_id === 2).length
})

const getRsvpStatus = (statusId: number) => {
  switch (statusId) {
    case 1: return 'Pending'
    case 2: return 'Confirmed'
    case 3: return 'Declined'
    default: return 'Unknown'
  }
}

const getRsvpVariant = (statusId: number) => {
  switch (statusId) {
    case 1: return 'secondary'
    case 2: return 'outline'
    case 3: return 'destructive'
    default: return 'default'
  }
}

const fetchGuests = async () => {
  try {
    // Fetch individual guests
    const { data: guestsResponse } = await useFetch<{ success: boolean; data: any[] }>('/api/guests')
    if (guestsResponse.value?.success && guestsResponse.value?.data) {
      guests.value = await Promise.all(
        guestsResponse.value.data.map(async (guest: any) => {
          const { data: eventsResponse } = await useFetch<{ success: boolean; data: any[] }>(`/api/guest-events?guest_id=${guest.guest_id}`)
          return {
            ...guest,
            events: eventsResponse.value?.success && eventsResponse.value?.data ? eventsResponse.value.data : []
          }
        })
      )
    }

    // Fetch groups
    const { data: groupsResponse } = await useFetch<{ success: boolean; data: any[] }>('/api/groups')
    if (groupsResponse.value?.success && groupsResponse.value?.data) {
      groups.value = await Promise.all(
        groupsResponse.value.data.map(async (group: any) => {
          const { data: eventsResponse } = await useFetch<{ success: boolean; data: any[] }>(`/api/group-events?group_id=${group.group_id}`)
          return {
            ...group,
            events: eventsResponse.value?.success && eventsResponse.value?.data ? eventsResponse.value.data : []
          }
        })
      )
    }
  } catch (error) {
    console.error('Error fetching guests:', error)
  }
}

const handleAddGuest = async () => {
  await fetchGuests()
}

onMounted(() => {
  fetchGuests()
})
</script> 