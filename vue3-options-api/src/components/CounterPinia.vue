<template>
  <div>
    <p>Contador: {{ counter.count }}</p>
    <p>Doble: {{ counter.double }}</p>
    <button @click="counter.increment()">Incrementar</button>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../store/counter'

const counter = useCounterStore()
</script>