import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import UserFetcher from '../../components/UserFetcher.vue'
import { nextTick } from 'vue'

describe('UserFetcher.vue', () => {
  vi.useFakeTimers()

  it('cancela timeout anterior al cambiar rápidamente el ID', async () => {
    const wrapper = mount(UserFetcher)

    const input = wrapper.get('input')
    await input.setValue('2') // dispara efecto
    await input.setValue('3') // cambia antes que termine

    // Adelanta el tiempo
    vi.runAllTimers()
    await nextTick() /**
        * nextTick() es necesario para esperar a que se procesen los cambios reactivos
        * y se actualice el DOM después de que se haya ejecutado el efecto.
        * Esto asegura que el DOM refleje el estado más reciente antes de hacer las aserciones.
    */
    
    // Solo debería mostrarse Usuario 3
    expect(wrapper.text()).toContain('Usuario 3')
    expect(wrapper.text()).not.toContain('Usuario 2')
  })
})