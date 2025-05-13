// src/composables/useCounter.ts
import { ref, computed, watch, type Ref } from 'vue'

export function useCounter(
  start: number = 0,
  onLimit?: (value: number) => void
): {
  count: Ref<number>
  double: Ref<number>
  increment: () => void
} {
  const count = ref<number>(start)
  const double = computed(() => count.value * 2)

  function increment(): void {
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