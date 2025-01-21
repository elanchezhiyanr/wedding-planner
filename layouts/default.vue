<template>
  <div class="min-h-screen flex">
    <!-- Floating Menu Button -->
    <Button 
      variant="ghost" 
      size="icon" 
      class="fixed left-4 top-4 z-50 lg:hidden bg-white shadow-md rounded-md hover:bg-gray-100"
      @click="isOpen = true"
    >
      <Menu class="h-6 w-6" />
    </Button>

    <!-- Desktop Sidebar -->
    <aside class="fixed inset-y-0 left-0 z-30 w-64 border-r bg-white hidden lg:block">
      <div class="p-6">
        <h2 class="text-xl font-semibold mb-6">Wedding Planner</h2>
        <nav class="space-y-2">
          <Button v-for="item in navItems" 
                  :key="item.path" 
                  variant="ghost" 
                  class="w-full justify-start text-base font-medium"
                  :class="{ 'bg-gray-100': route.path === item.path }"
                  @click="navigateTo(item.path)">
            <component :is="item.icon" class="mr-3 h-5 w-5" />
            {{ item.label }}
          </Button>
        </nav>
      </div>
    </aside>

    <!-- Mobile Sidebar Sheet -->
    <Sheet :open="isOpen" @update:open="isOpen = $event">
      <SheetContent side="left" class="w-64 p-0 bg-white">
        <div class="p-6">
          <h2 class="text-xl font-semibold mb-6">Wedding Planner</h2>
          <nav class="space-y-2">
            <Button v-for="item in navItems" 
                    :key="item.path" 
                    variant="ghost" 
                    class="w-full justify-start text-base font-medium"
                    :class="{ 'bg-gray-100': route.path === item.path }"
                    @click="() => {
                      navigateTo(item.path);
                      isOpen = false;
                    }">
              <component :is="item.icon" class="mr-3 h-5 w-5" />
              {{ item.label }}
            </Button>
          </nav>
        </div>
      </SheetContent>
    </Sheet>

    <!-- Main Content -->
    <main class="flex-1 lg:pl-64">
      <div class="h-full p-6">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { 
  Home,
  Users,
  CheckSquare,
  Store,
  DollarSign,
  Calendar,
  Menu
} from 'lucide-vue-next'

const route = useRoute()
const isOpen = ref(false)

const navItems = [
  { path: '/', label: 'Overview', icon: Home },
  { path: '/guests', label: 'Guest Management', icon: Users },
  { path: '/tasks', label: 'Task Management', icon: CheckSquare },
  { path: '/vendors', label: 'Vendor Management', icon: Store },
  { path: '/budget', label: 'Budget Management', icon: DollarSign },
  { path: '/events', label: 'Event Management', icon: Calendar },
]
</script> 