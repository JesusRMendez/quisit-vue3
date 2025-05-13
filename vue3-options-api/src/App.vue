<template>
  <div>
    <h1>Phase 1 - Options API</h1>
    <Counter :start="5" @limitReached="handleLimit" />
  </div>
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  components: { Counter },
  methods: {
    handleLimit(value) {
      alert(`¡Límite alcanzado con valor: ${value}!`)
    }
  }
}
</script>