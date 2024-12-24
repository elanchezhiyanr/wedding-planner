<script setup>
import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-vue-next'
</script>

<template>
  <div class="h-screen flex items-center justify-center bg-gray-50">
    <Button class="group flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-8 py-4">
      <span class="text-xl font-semibold">Plan my Wedding</span>
      <Heart class="w-6 h-6 transition-transform group-hover:scale-110" />
    </Button>
  </div>
</template>