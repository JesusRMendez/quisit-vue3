import { describe, it, expect, vi } from 'vitest'
import { ref, watch, computed, nextTick } from 'vue'

describe('Comparación de eficiencia: computed vs watch', () => {
  it('watch se ejecuta cada vez, computed solo si se accede', async () => {
    const source = ref(0)
    const watchSpy = vi.fn()
    const computedSpy = vi.fn()

    // ❌ watch se ejecuta cada vez que cambia source
    watch(source, (val) => {
      watchSpy(val)
    })

    // ✅ computed solo se ejecuta cuando se accede
    const computedValue = computed(() => {
      computedSpy()
      return source.value * 2
    })

    // Cambiar el valor 3 veces
    source.value = 1
    await nextTick()
    expect(watchSpy).toHaveBeenCalledTimes(1)
    

    source.value = 2
    await nextTick()
    expect(watchSpy).toHaveBeenCalledTimes(2)

    source.value = 3
    await nextTick()
    expect(watchSpy).toHaveBeenCalledTimes(3)
    // Solo accedemos el computed una vez
    const result = computedValue.value

    expect(result).toBe(6)

    // El computed se ejecuta solo una vez cuando lo accedemos
    expect(computedSpy).toHaveBeenCalledTimes(1)
  })
})

Mostrar cómo watchEffect se ejecuta inmediatamente y reacciona automáticamente a todo lo que se use dentro.
	•	Usar onInvalidate() para cancelar o limpiar un efecto antes de que se vuelva a ejecutar.