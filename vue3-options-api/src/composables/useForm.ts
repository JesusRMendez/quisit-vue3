// src/composables/useForm.ts
import { ref } from 'vue'

export function useForm<T extends Record<string, any>>(initialState: T) {
  const form = ref<T>({ ...initialState })

  function reset(): void {
    form.value = { ...initialState }
  }

  return {
    form,
    reset
  }
}