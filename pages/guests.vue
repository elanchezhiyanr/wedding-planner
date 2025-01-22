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
              <p class="font-semibold">{{ guests.length }}</p>
            </div>
            <div>
              <span class="text-sm text-gray-500">RSVPs Received</span>
              <p class="font-semibold">0</p>
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
                <TableHead>Events</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="guest in guests" :key="guest.email">
                <TableCell>{{ guest.name }}</TableCell>
                <TableCell>{{ guest.email }}</TableCell>
                <TableCell>{{ guest.phone }}</TableCell>
                <TableCell>
                  <div class="flex gap-1">
                    <Badge 
                      v-for="event in guest.events" 
                      :key="event"
                      variant="secondary"
                      class="capitalize"
                    >
                      {{ event }}
                    </Badge>
                  </div>
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
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'

const showAddGuest = ref(false)
const guests = ref<any[]>([])

const handleAddGuest = (guestData: any) => {
  guests.value.push(guestData)
}
</script> 