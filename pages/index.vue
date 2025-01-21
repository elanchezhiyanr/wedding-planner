<template>
  <div class="space-y-4">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-bold">Overview</h1>
    </div>

    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <CountdownCard />
      <GuestCard />
      <TaskCard />
    </div>
  </div>
</template>

<script setup lang="ts">
// Component imports are handled by auto-imports in Nuxt 3
</script>