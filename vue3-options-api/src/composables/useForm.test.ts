import { describe, it, expect } from 'vitest'
import { useForm } from '../../src/composables/useForm'

describe('useForm', () => {
  it('initializes with default values', () => {
    const { form } = useForm({ name: 'Jesús', email: '' })
    expect(form.value.name).toBe('Jesús')
    expect(form.value.email).toBe('')
  })

  it('can update values and reset', () => {
    const { form, reset } = useForm({ name: 'Test', age: 30 })

    form.value.name = 'Nuevo Nombre'
    form.value.age = 40

    expect(form.value.name).toBe('Nuevo Nombre')
    expect(form.value.age).toBe(40)

    reset()

    expect(form.value.name).toBe('Test')
    expect(form.value.age).toBe(30)
  })
})