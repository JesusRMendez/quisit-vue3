<template>
  <div>
    <h2>Comparación v-once vs v-memo</h2>
    
    <p><strong>Valor actual:</strong> {{ count }}</p>
    <button @click="count++">Incrementar</button>

    <hr />

    <p v-once>🔒 v-once: Este valor no se actualizará => {{ count }}</p>

    <p v-memo="[memoCount]">⚡ v-memo: Se actualiza solo si cambia memoCount => {{ memoCount }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'

const count = ref(0)
const memoCount = ref(0)

watch(count, (val:number) => {
  // Solo actualizamos memoCount si el valor es par
  if (val % 2 === 0) memoCount.value = val
})
</script>