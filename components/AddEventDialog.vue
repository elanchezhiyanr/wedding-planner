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
  eventName: z.string().min(1, 'Event name is required'),
  eventDate: z.string().min(1, 'Event date is required'),
  eventTime: z.string().min(1, 'Event time is required')
})

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    eventName: '',
    eventDate: '',
    eventTime: ''
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
        <DialogTitle>Add New Event</DialogTitle>
      </DialogHeader>
      <Form @submit="handleSubmit">
        <div class="grid gap-4 py-4">
          <FormField name="eventName" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Event Name</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="Event name" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="eventDate" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Event Date</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="date" placeholder="Event date" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="eventTime" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Event Time</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="time" placeholder="Event time" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>
        </div>
        <DialogFooter>
          <Button type="submit">Add Event</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  </Dialog>
</template>