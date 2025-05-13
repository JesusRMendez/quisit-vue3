import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import MemoVsOnce from '../../components/MemoVsOnce.vue'

describe('MemoVsOnce.vue', () => {
  it('v-once no cambia nunca y v-memo solo si cambia el valor usado', async () => {
    const wrapper = mount(MemoVsOnce)

    const getOnceText = () =>
      wrapper.findAll('p').find(p => p.text().includes('v-once'))?.text() || ''
    const getMemoText = () =>
      wrapper.findAll('p').find(p => p.text().includes('v-memo'))?.text() || ''

    expect(getOnceText()).toContain('0')
    expect(getMemoText()).toContain('0')

    await wrapper.get('button').trigger('click') // count = 1

    expect(getOnceText()).toContain('0') // no cambia
    expect(getMemoText()).toContain('0') // tampoco, porque 1 es impar

    await wrapper.get('button').trigger('click') // count = 2

    expect(getOnceText()).toContain('0') // sigue sin cambiar
    expect(getMemoText()).toContain('2') // ahora sí cambia
  })
})