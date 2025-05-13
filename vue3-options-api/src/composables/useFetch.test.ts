import { describe, it, expect, vi, beforeEach } from 'vitest'
import { useFetch } from '../../src/composables/useFetch'

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({ message: 'Hola Mundo' })
  })
) as any

describe('useFetch', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('fetches data successfully', async () => {
    const { data, loading, error, refetch } = useFetch<{ message: string }>('https://fake.api/data')
    await refetch()

    expect(loading.value).toBe(false)
    expect(error.value).toBeNull()
    expect(data.value?.message).toBe('Hola Mundo')
  })

  it('sets error on failed fetch', async () => {
    vi.mocked(global.fetch).mockImplementationOnce(() =>
      Promise.resolve(new Response(null, { status: 500 }))
    )

    const { error, refetch } = useFetch('https://error.api/data')
    await refetch()

    expect(error.value).toBeInstanceOf(Error)
  })
})