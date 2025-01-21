<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Vendor Management</h1>
      <Button>Add Vendor</Button>
    </div>
    
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Vendor Categories</h2>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Venue</h3>
            <div class="space-y-2">
              <!-- Venue vendors will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Catering</h3>
            <div class="space-y-2">
              <!-- Catering vendors will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Photography</h3>
            <div class="space-y-2">
              <!-- Photography vendors will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Music & Entertainment</h3>
            <div class="space-y-2">
              <!-- Entertainment vendors will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Flowers & Decor</h3>
            <div class="space-y-2">
              <!-- Decor vendors will be dynamically populated -->
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Attire & Accessories</h3>
            <div class="space-y-2">
              <!-- Attire vendors will be dynamically populated -->
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