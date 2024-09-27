import { render, screen } from '@testing-library/react'

import { App } from '../src/app'

test('Renders the main page', () => {
  const testMessage = 'Rsbuild w/ React'
  render(<App />)
  expect(screen.getByText(testMessage)).toBeInTheDocument()
})
