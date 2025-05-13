import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import PostList from '../../components/PostList.vue'

const mockPosts = [
  { id: 1, title: 'Post Uno' },
  { id: 2, title: 'Post Dos' }
]

global.fetch = vi.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve(mockPosts)
  })
) as any

describe('PostList.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('muestra los posts después de cargar', async () => {
    const wrapper = mount(PostList)
    await new Promise(resolve => setTimeout(resolve, 0)) // Esperar al next tick

    expect(wrapper.text()).toContain('Post Uno')
    expect(wrapper.text()).toContain('Post Dos')
  })
})