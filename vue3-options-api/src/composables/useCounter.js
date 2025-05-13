// src/composables/useCounter.js
import { ref, computed, watch } from 'vue'

export function useCounter(start = 0, onLimit) {
  const count = ref(start)
  const double = computed(() => count.value * 2)

  function increment() {
    count.value++
  }

  watch(count, (newVal) => {
    if (newVal >= 10 && typeof onLimit === 'function') {
      onLimit(newVal)
    }
  })

  return {
    count,
    double,
    increment
  }
}