<template>
  <div class="min-h-screen flex">
    <!-- Collapsible Sidebar -->
    <aside 
      class="fixed inset-y-0 left-0 z-30 border-r bg-white transition-all duration-300 flex"
      :class="[isOpen ? 'w-64' : 'w-[72px]']"
    >
      <div class="flex-1 p-4">
        <div class="flex items-center justify-between mb-6">
          <h2 class="text-xl font-semibold overflow-hidden whitespace-nowrap transition-all duration-300"
              :class="{ 'opacity-0 w-0': !isOpen }">
            Wedding Planner
          </h2>
          <Button 
            variant="ghost" 
            size="icon"
            class="shrink-0"
            @click="isOpen = !isOpen"
          >
            <Icon :name="isOpen ? 'lucide:chevron-left' : 'lucide:chevron-right'" class="h-5 w-5" />
          </Button>
        </div>
        <nav class="space-y-2">
          <Button v-for="item in navItems" 
                  :key="item.path" 
                  variant="ghost" 
                  class="w-full justify-start text-base font-medium transition-all duration-300"
                  :class="[
                    { 'bg-gray-100': route.path === item.path },
                    isOpen ? 'px-4' : 'px-0 justify-center'
                  ]"
                  @click="navigateTo(item.path)">
            <component :is="item.icon" :class="['h-5 w-5', isOpen ? 'mr-3' : '']" />
            <span :class="{ 'hidden': !isOpen }">{{ item.label }}</span>
          </Button>
        </nav>
      </div>
    </aside>

    <!-- Main Content -->
    <main :class="['flex-1 transition-all duration-300', isOpen ? 'pl-64' : 'pl-[72px]']">
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
const isOpen = ref(true) // Set to true by default

const navItems = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/guests', label: 'Guests', icon: Users },
  { path: '/tasks', label: 'Tasks', icon: CheckSquare },
  { path: '/vendors', label: 'Vendors', icon: Store },
  { path: '/budget', label: 'Budget', icon: DollarSign },
]
</script>

<style scoped>
/* Remove the slide transition since we're not using v-if anymore */
</style> 