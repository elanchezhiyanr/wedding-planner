<script setup>
import { ref } from 'vue'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'

// Placeholder data - replace with actual data from store/API
const tasks = ref([
  {
    id: 1,
    title: 'Book Venue',
    dueDate: '2024-01-15',
    status: 'overdue'
  },
  {
    id: 2,
    title: 'Send Invitations',
    dueDate: '2024-02-01',
    status: 'upcoming'
  }
])

const getOverdueTasks = () => {
  return tasks.value
    .filter(task => task.status === 'overdue')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
}

const getUpcomingTasks = () => {
  return tasks.value
    .filter(task => task.status === 'upcoming')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
}
</script>

<template>
  <Card>
    <CardHeader>
      <CardTitle>Tasks</CardTitle>
    </CardHeader>
    <CardContent>
      <ScrollArea class="h-[300px] pr-4">
        <!-- Overdue Tasks -->
        <div class="mb-6">
          <h3 class="text-lg font-semibold text-red-600 mb-2">Overdue</h3>
          <div class="space-y-2">
            <div
              v-for="task in getOverdueTasks()"
              :key="task.id"
              class="p-3 bg-red-50 rounded-lg border border-red-200"
            >
              <div class="flex justify-between items-center">
                <span>{{ task.title }}</span>
                <span class="text-sm text-red-600">Due: {{ task.dueDate }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Upcoming Tasks -->
        <div>
          <h3 class="text-lg font-semibold text-gray-900 mb-2">Upcoming</h3>
          <div class="space-y-2">
            <div
              v-for="task in getUpcomingTasks()"
              :key="task.id"
              class="p-3 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div class="flex justify-between items-center">
                <span>{{ task.title }}</span>
                <span class="text-sm text-gray-600">Due: {{ task.dueDate }}</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </CardContent>
  </Card>
</template> 