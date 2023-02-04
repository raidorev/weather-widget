import { mount } from '@vue/test-utils'
import { expect, it } from 'vitest'

export const testIconComponent = (
  // TODO: fix type
  // component: Parameters<typeof mount>[0],
  component: any,
  title: string,
) => {
  it('should render SVG element', () => {
    const wrapper = mount(component)
    expect(wrapper.find('svg').exists()).toBeTruthy()
  })

  it('should have valid title', () => {
    const wrapper = mount(component)
    expect(wrapper.find('svg').find('title').text()).toBe(title)
  })
}
