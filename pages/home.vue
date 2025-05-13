<template>
  <div class="container mx-auto p-6">
    <div class="grid grid-cols-1 gap-6">
      <!-- Tasks and Countdown Section -->
      <div class="grid grid-cols-1 lg:grid-cols-10 gap-6">
        <!-- Tasks Section (70%) -->
        <div class="lg:col-span-7">
          <TaskCard />
        </div>

        <!-- Countdown Section (30%) -->
        <div class="lg:col-span-3">
          <CountdownCard />
        </div>
      </div>

      <!-- Guests Section (Full Width) -->
      <div class="w-full">
        <GuestCard />
      </div>
    </div>
  </div>
</template> 