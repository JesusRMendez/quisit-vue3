<template>
  <div>
    <label>
      User ID:
      <input type="number" v-model="userId" />
    </label>
    <p v-if="loading">Cargando usuario...</p>
    <p v-if="user">Nombre: {{ user.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'

const userId = ref(1)
const user = ref<{ name: string } | null>(null)
const loading = ref(false)

watchEffect((onInvalidate) => {
  let cancelled = false
  loading.value = true
  user.value = null

  const timeout = setTimeout(() => {
    if (!cancelled) {
      user.value = { name: `Usuario ${userId.value}` }
      loading.value = false
    }
  }, 1000)

  // 🔄 Limpiar si cambia el userId antes de que termine el fetch
  onInvalidate(() => {
    cancelled = true
    clearTimeout(timeout)
  })
})
</script>