import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import NameTransformer from '../../components/NameTransformer.vue'

describe('NameTransformer.vue', () => {
  it('actualiza uppercase con watch y computed', async () => {
    const wrapper = mount(NameTransformer)

    const input = wrapper.get('input')
    await input.setValue('jesus')

    // Espera a que los cambios reactivos se apliquen
    await wrapper.vm.$nextTick()

    expect(wrapper.text()).toContain('❌ Mayúsculas (con watch): JESUS')
    expect(wrapper.text()).toContain('✅ Mayúsculas (con computed): JESUS')
  })
})