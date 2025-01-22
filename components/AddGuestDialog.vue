<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
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
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  events: z.array(z.string()).optional()
})

const form = useForm({
  validationSchema: formSchema,
  initialValues: {
    name: '',
    email: '',
    phone: '',
    events: []
  }
})

const events = [
  { id: 'ceremony', label: 'Ceremony' },
  { id: 'reception', label: 'Reception' },
  { id: 'dinner', label: 'Dinner' },
  { id: 'afterParty', label: 'After Party' }
]

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
        <DialogTitle>Add New Guest</DialogTitle>
      </DialogHeader>
      <Form @submit="handleSubmit">
        <div class="grid gap-4 py-4">
          <FormField name="name" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input v-bind="componentField" placeholder="Guest name" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="email" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="email" placeholder="Email address" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="phone" v-slot="{ componentField, error }">
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input v-bind="componentField" type="tel" placeholder="Phone number" />
              </FormControl>
              <FormMessage>{{ error }}</FormMessage>
            </FormItem>
          </FormField>

          <FormField name="events" v-slot="{ value, setValue }">
            <FormItem>
              <FormLabel>Events</FormLabel>
              <div class="grid gap-3">
                <div v-for="event in events" :key="event.id" class="flex items-center space-x-2">
                  <Checkbox 
                    :id="event.id"
                    :checked="value?.includes(event.id)"
                    @update:checked="(checked) => {
                      const newEvents = checked 
                        ? [...(value || []), event.id]
                        : (value || []).filter(e => e !== event.id)
                      setValue(newEvents)
                    }"
                    class="rounded-full data-[state=checked]:bg-pink-500 data-[state=checked]:border-pink-500"
                  />
                  <Label :for="event.id" class="font-normal">{{ event.label }}</Label>
                </div>
              </div>
            </FormItem>
          </FormField>
        </div>
        <DialogFooter>
          <Button type="submit" class="bg-pink-500 hover:bg-pink-600">Add Guest</Button>
        </DialogFooter>
      </Form>
    </DialogContent>
  </Dialog>
</template> 