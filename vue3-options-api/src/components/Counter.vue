<template>
  <div>
    <p>Contador: {{ count }}</p>
    <p>Doble: {{ double }}</p>
    <button @click="increment">Incrementar</button>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  start: {
    type: Number,
    default: 0
  }
})

const emit = defineEmits(['limitReached'])

const count = ref(props.start)

const double = computed(() => count.value * 2)

function increment() {
  count.value++
}

watch(count, (newVal) => {
  if (newVal >= 10) {
    emit('limitReached', newVal)
  }
})
</script>