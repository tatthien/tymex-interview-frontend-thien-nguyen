import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Button } from '../Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByText('Click me')).toBeInTheDocument()
  })

  it('applies default variant and size classes', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('root')
    expect(button).toHaveClass('primary')
    expect(button).toHaveClass('medium')
  })

  it('applies ghost variant class when specified', () => {
    render(<Button variant="ghost">Click me</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('ghost')
    expect(button).not.toHaveClass('primary')
  })

  it('applies different size classes correctly', () => {
    const { rerender } = render(<Button size="small">Small</Button>)
    let button = screen.getByRole('button')
    expect(button).toHaveClass('small')

    rerender(<Button size="icon">Icon</Button>)
    button = screen.getByRole('button')
    expect(button).toHaveClass('icon')
  })

  it('merges custom className with default classes', () => {
    render(<Button className="custom-class">Click me</Button>)
    const button = screen.getByRole('button')

    expect(button).toHaveClass('root')
    expect(button).toHaveClass('primary')
    expect(button).toHaveClass('medium')
    expect(button).toHaveClass('custom-class')
  })

  it('handles click events', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click me</Button>)

    const button = screen.getByRole('button')
    await userEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('forwards additional HTML button attributes', () => {
    render(
      <Button type="submit" disabled aria-label="Submit form">
        Submit
      </Button>
    )

    const button = screen.getByRole('button')
    expect(button).toHaveAttribute('type', 'submit')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-label', 'Submit form')
  })
})
