import React from 'react'
import {render} from '@testing-library/react'
import Home from 'pages/index'

describe('Index page', () => {
  it('should be defined', () => {
    const {container} = render(<Home />)
    expect(container).toMatchSnapshot()
  })
})
