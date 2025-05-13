<!-- src/components/NameTransformer.vue -->
<template>
  <div>
    <label>
      Nombre:
      <input v-model="name" />
    </label>

    <p>❌ Mayúsculas (con watch): {{ watchedUppercase }}</p>
    <p>✅ Mayúsculas (con computed): {{ computedUppercase }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const name = ref('')
const watchedUppercase = ref('')

watch(name, (newVal) => {
  watchedUppercase.value = newVal.toUpperCase()
})

const computedUppercase = computed(() => name.value.toUpperCase())
</script>