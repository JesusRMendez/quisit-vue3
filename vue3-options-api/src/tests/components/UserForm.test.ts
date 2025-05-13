import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import UserForm from '../../components/UserForm.vue'

describe('UserForm.vue', () => {
  it('muestra valores y puede hacer reset', async () => {
    const wrapper = mount(UserForm)

    await wrapper.get('input[type="text"]').setValue('Juan')
    await wrapper.get('input[type="email"]').setValue('juan@mail.com')

    expect(wrapper.get('input[type="text"]').element.value).toBe('Juan')
    expect(wrapper.get('input[type="email"]').element.value).toBe('juan@mail.com')

    await wrapper.get('button[type="button"]').trigger('click')

    expect(wrapper.get('input[type="text"]').element.value).toBe('')
    expect(wrapper.get('input[type="email"]').element.value).toBe('')
  })

  it('dispara alerta al enviar', async () => {
    global.alert = vi.fn()

    const wrapper = mount(UserForm)
    await wrapper.get('input[type="text"]').setValue('Ana')
    await wrapper.get('input[type="email"]').setValue('ana@mail.com')

    await wrapper.get('form').trigger('submit.prevent')

    expect(global.alert).toHaveBeenCalledWith('Enviado: Ana - ana@mail.com')
  })
})