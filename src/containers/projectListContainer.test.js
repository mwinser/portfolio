import React from 'react'
import { render, screen } from '@testing-library/react'
import ProjectListContainer from './projectListContainer'

describe('ProjectListContainer', () => {
  it('renders empty state when no projects', () => {
    render(<ProjectListContainer projects={[]} />)
    expect(screen.getByText(/No projects to display\./i)).toBeInTheDocument()
  })

  it('renders project cards and links when projects provided', () => {
    const projects = [
      {
        name: 'Sample Project',
        description: 'A short description',
        image: 'image.png',
        category: 'Client Project',
        techStack: ['JavaScript', 'React'],
        link: 'https://example.com',
        git: 'https://github.com/example/repo'
      }
    ]

    render(<ProjectListContainer projects={projects} />)

    expect(screen.getByRole('heading', { name: 'Sample Project' })).toBeInTheDocument()
    expect(screen.getByText('// client project')).toBeInTheDocument()
    expect(screen.getByText('A short description')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Live/i })).toHaveAttribute('href', 'https://example.com')
    expect(screen.getByRole('link', { name: /View Code/i })).toHaveAttribute('href', 'https://github.com/example/repo')
  })
})


