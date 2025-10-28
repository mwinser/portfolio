import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Mock analytics to avoid side effects during render
jest.mock('react-ga4', () => ({
  __esModule: true,
  default: { send: jest.fn() }
}))

import Projects from './projects'

describe('Projects filtering', () => {
  it('shows all projects by default and filters by category', async () => {
    render(<Projects />)

    // Default list should include a known Client Project
    expect(await screen.findByRole('heading', { name: /14Four Agency Site/i })).toBeInTheDocument()

    // Open category dropdown (combobox with label)
    const categoryCombobox = screen.getByRole('combobox', { name: /Project Type Filter/i })
    userEvent.click(categoryCombobox)

    // Choose Personal
    const personalOption = await screen.findByRole('option', { name: 'Personal' })
    userEvent.click(personalOption)

    // Personal project visible, client project hidden
    expect(screen.getByRole('heading', { name: /Tumblr Clone/i })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { name: /14Four Agency Site/i })).not.toBeInTheDocument()
  })

  it('filters by tech stack', async () => {
    render(<Projects />)

    // Open tech dropdown
    const techCombobox = screen.getByRole('combobox', { name: /Tech Stack Filter/i })
    userEvent.click(techCombobox)

    // Select Javascript (note casing comes from first occurrence in data)
    const jsOption = await screen.findByRole('option', { name: 'Javascript' })
    userEvent.click(jsOption)

    // A project without JavaScript should be filtered out (Albert)
    expect(screen.queryByRole('heading', { name: /Albert, the Scoping Agent/i })).not.toBeInTheDocument()

    // A project with JavaScript remains visible
    expect(await screen.findByRole('heading', { name: /Better with Pepsi/i })).toBeInTheDocument()
  })
})


