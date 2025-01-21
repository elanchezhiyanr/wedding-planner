<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Task Management</h1>
      <Button>Add Task</Button>
    </div>
    
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Task Overview</h2>
          <div class="flex gap-4">
            <div>
              <span class="text-sm text-gray-500">Total Tasks</span>
              <p class="font-semibold">50</p>
            </div>
            <div>
              <span class="text-sm text-gray-500">Completed</span>
              <p class="font-semibold">20</p>
            </div>
          </div>
        </div>
        
        <div class="grid gap-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Planning & Timeline</h3>
            <div class="space-y-2">
              <!-- Task items will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Vendor Coordination</h3>
            <div class="space-y-2">
              <!-- Task items will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Guest Management</h3>
            <div class="space-y-2">
              <!-- Task items will be dynamically populated -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script> 