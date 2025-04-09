<template>
  <div class="relative">
    <div
      class="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left border border-input shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 sm:text-sm"
      @click="isOpen = !isOpen"
    >
      <div class="flex flex-wrap gap-1 p-2">
        <div
          v-for="selectedValue in modelValue"
          :key="selectedValue"
          class="flex items-center gap-1 rounded bg-muted px-2 py-1 text-sm"
        >
          {{ getOptionLabel(selectedValue) }}
          <button
            type="button"
            @click.stop="removeValue(selectedValue)"
            class="text-muted-foreground hover:text-foreground"
          >
            <Icon name="lucide:x" class="h-3 w-3" />
          </button>
        </div>
        <input
          v-if="!modelValue.length"
          type="text"
          class="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          :placeholder="placeholder"
          readonly
        />
      </div>
    </div>

    <div
      v-if="isOpen"
      class="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
    >
      <div
        v-for="option in options"
        :key="getOptionValue(option)"
        class="relative cursor-pointer select-none py-2 pl-3 pr-9 hover:bg-muted"
        :class="{
          'bg-muted': modelValue.includes(getOptionValue(option))
        }"
        @click="toggleValue(getOptionValue(option))"
      >
        <span class="block truncate">{{ getOptionLabel(option) }}</span>
        <span
          v-if="modelValue.includes(getOptionValue(option))"
          class="absolute inset-y-0 right-0 flex items-center pr-4 text-primary"
        >
          <Icon name="lucide:check" class="h-4 w-4" />
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: any[]
  options: any[]
  optionLabel?: string
  optionValue?: string
  placeholder?: string
}>()

const emit = defineEmits<{
  'update:modelValue': [value: any[]]
}>()

const isOpen = ref(false)

const getOptionLabel = (option: any) => {
  if (typeof option === 'object' && props.optionLabel) {
    return option[props.optionLabel]
  }
  if (typeof option === 'object') {
    return option.label || option.name || option.title
  }
  const foundOption = props.options.find(o => getOptionValue(o) === option)
  return foundOption ? getOptionLabel(foundOption) : option
}

const getOptionValue = (option: any) => {
  if (typeof option === 'object' && props.optionValue) {
    return option[props.optionValue]
  }
  if (typeof option === 'object') {
    return option.value || option.id
  }
  return option
}

const toggleValue = (value: any) => {
  const newValue = [...props.modelValue]
  const index = newValue.indexOf(value)
  if (index === -1) {
    newValue.push(value)
  } else {
    newValue.splice(index, 1)
  }
  emit('update:modelValue', newValue)
}

const removeValue = (value: any) => {
  const newValue = props.modelValue.filter(v => v !== value)
  emit('update:modelValue', newValue)
}

watch(() => props.modelValue, () => {
  if (!props.modelValue.length) {
    isOpen.value = false
  }
})
</script> 