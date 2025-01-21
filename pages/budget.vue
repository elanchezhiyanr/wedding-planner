<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Budget Management</h1>
      <Button>Add Expense</Button>
    </div>
    
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Budget Overview</h2>
          <div class="flex gap-4">
            <div>
              <span class="text-sm text-gray-500">Total Budget</span>
              <p class="font-semibold">$30,000</p>
            </div>
            <div>
              <span class="text-sm text-gray-500">Spent</span>
              <p class="font-semibold">$15,000</p>
            </div>
            <div>
              <span class="text-sm text-gray-500">Remaining</span>
              <p class="font-semibold">$15,000</p>
            </div>
          </div>
        </div>
        
        <div class="grid gap-4">
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Venue & Catering</h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span>Budget</span>
                <span>$12,000</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 45%"></div>
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Photography & Videography</h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span>Budget</span>
                <span>$5,000</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 60%"></div>
              </div>
            </div>
          </div>
          
          <div class="border rounded-lg p-4">
            <h3 class="font-semibold mb-2">Attire & Accessories</h3>
            <div class="space-y-2">
              <div class="flex justify-between items-center">
                <span>Budget</span>
                <span>$4,000</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div class="bg-blue-600 h-2.5 rounded-full" style="width: 75%"></div>
              </div>
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