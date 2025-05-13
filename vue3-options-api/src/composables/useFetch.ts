// src/composables/useFetch.ts
import { ref, onMounted } from 'vue'

export function useFetch<T = unknown>(url: string) {
  const data = ref<T | null>(null)
  const error = ref<Error | null>(null)
  const loading = ref(true)

  async function fetchData(): Promise<void> {
    loading.value = true
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`Error al cargar: ${res.status}`)
      data.value = await res.json()
    } catch (err: any) {
      error.value = err
    } finally {
      loading.value = false
    }
  }

  onMounted(fetchData)

  return {
    data,
    error,
    loading,
    refetch: fetchData
  }
}