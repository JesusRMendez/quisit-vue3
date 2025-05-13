import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import LifecycleDemo from '../../components/LifecycleDemo.vue'

describe('LifecycleDemo.vue', () => {
  it('registra los hooks de ciclo de vida', async () => {
    const logSpy = vi.spyOn(console, 'log')
    const wrapper = mount(LifecycleDemo)

    expect(logSpy).toHaveBeenCalledWith('✅ Componente montado')

    await wrapper.get('button').trigger('click')
    expect(logSpy).toHaveBeenCalledWith('🔄 Componente actualizado')

    wrapper.unmount()
    expect(logSpy).toHaveBeenCalledWith('❌ Componente destruido')
  })
})