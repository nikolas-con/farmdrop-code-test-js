import enzyme from 'enzyme'
import React from 'react'
import App from './App'

describe('renders <App />', () => {
  it('check 2 children', () => {
    let wrapper = enzyme.mount(<App />)
    expect(wrapper.childAt(0).children().length).toBe(2)
  })
})