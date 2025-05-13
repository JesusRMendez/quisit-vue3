import { describe, it, expect, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import CounterPinia from '../../components/CounterPinia.vue'

describe('CounterPinia.vue', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('muestra el contador y lo incrementa', async () => {
    const wrapper = mount(CounterPinia)

    expect(wrapper.text()).toContain('Contador: 0')
    expect(wrapper.text()).toContain('Doble: 0')

    await wrapper.get('button').trigger('click')

    expect(wrapper.text()).toContain('Contador: 1')
    expect(wrapper.text()).toContain('Doble: 2')
  })
})