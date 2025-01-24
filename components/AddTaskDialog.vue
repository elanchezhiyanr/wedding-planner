<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { useForm } from 'vee-validate'
import * as z from 'zod'

const props = defineProps<{
  open: boolean
}>()

const emits = defineEmits<{
  'update:open': [value: boolean]
  'submit': [data: any]
}>()

const formSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  dueDate: z.string().min(1, 'Due date is required'),
  assignee: z.string().min(1, 'Assignee is required'),
  event: z.string().min(1, 'Event is required')
})

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    title: '',
    dueDate: '',
    assignee: '',
    event: ''
  }
})

const handleSubmit = form.handleSubmit((values) => {
  emits('submit', values)
  form.resetForm()
  emits('update:open', false)
})
</script>

<template>
  <Dialog :open="open" @update:open="(value) => emits('update:open', value)">
    <DialogContent class="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Add New Task</DialogTitle>
      </DialogHeader>
      <Form @submit="handleSubmit">
        <div class="grid gap-4 py-4">
          <FormField name="title" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="Task title" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="dueDate" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Due Date</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="date" placeholder="Due date" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="assignee" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Assignee</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="Assignee" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="event" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Event</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="Event" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>
        </div>
        <DialogFooter>
          <Button type="submit">Add Task</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  </Dialog>
</template> 