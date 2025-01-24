<template>
  <div class="p-6">
    <div class="flex justify-between items-center mb-6">
      <h1 class="text-2xl font-bold">Task Management</h1>
      <Button @click="showAddTask = true">Add Task</Button>
    </div>
    
    <div class="grid gap-4">
      <div class="bg-white p-4 rounded-lg shadow">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-lg font-semibold">Task List Overview</h2>
          <div class="flex gap-4">
            <div>
              <span class="text-sm text-gray-500">Total Tasks</span>
              <p class="font-semibold">{{ tasks.length }}</p>
            </div>
            <div>
              <span class="text-sm text-gray-500">Completed</span>
              <p class="font-semibold">{{ completedTasks }}</p>
            </div>
          </div>
        </div>
        
        <div class="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Event</TableHead>
                <TableHead>Assignee</TableHead>
                <TableHead>Due Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow v-for="task in tasks" :key="task.title">
                <TableCell>{{ task.title }}</TableCell>
                <TableCell>
                  <Badge variant="secondary" class="capitalize">
                    {{ task.event }}
                  </Badge>
                </TableCell>
                <TableCell>{{ task.assignee }}</TableCell>
                <TableCell>{{ task.dueDate }}</TableCell>
                <TableCell>
                  <Badge :variant="task.completed ? 'default' : 'outline'">
                    {{ task.completed ? 'Completed' : 'Pending' }}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div class="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      @click="toggleTaskStatus(task)"
                    >
                      <Icon 
                        :name="task.completed ? 'lucide:x' : 'lucide:check'" 
                        class="h-4 w-4"
                      />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Icon name="lucide:more-vertical" class="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>

    <AddTaskDialog 
      v-model:open="showAddTask"
      @submit="handleAddTask"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'
import { Table, TableHeader, TableBody, TableRow, TableCell, TableHead } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import AddTaskDialog from '@/components/AddTaskDialog'

interface Task {
  title: string
  event: string
  assignee: string
  dueDate: string
  completed: boolean
}

const showAddTask = ref(false)
const tasks = ref<Task[]>([])

const completedTasks = computed(() => {
  return tasks.value.filter(task => task.completed).length
})

const handleAddTask = (taskData: any) => {
  tasks.value.push({
    ...taskData,
    completed: false
  })
}

const toggleTaskStatus = (task: Task) => {
  task.completed = !task.completed
}
</script> 