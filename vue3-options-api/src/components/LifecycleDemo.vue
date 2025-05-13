<template>
  <div>
    <h2>Demostración de ciclo de vida</h2>
    <p>Contador: {{ counter }}</p>
    <button @click="counter++">Incrementar</button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUpdated, onUnmounted } from 'vue'

const counter = ref(0)

onMounted(() => {
  console.log('✅ Componente montado')
})

onUpdated(() => {
  console.log('🔄 Componente actualizado')
})

onUnmounted(() => {
  console.log('❌ Componente destruido')
})
</script>