<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>Doble: {{ double }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import { useCounter } from '../composables/useCounter'

const props = defineProps<{
  start: number
}>()

const emit = defineEmits<{
  (event: 'limitReached', value: number): void
}>()

const { count, double, increment } = useCounter(props.start, (val) => {
  emit('limitReached', val)
})
</script>