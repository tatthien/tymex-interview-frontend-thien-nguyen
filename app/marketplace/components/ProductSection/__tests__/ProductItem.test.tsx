import { render, screen } from '@testing-library/react'

import type { Product } from '@/types/product'

import { ProductItem } from '../ProductItem'

const mockProduct: Product = {
  id: 1,
  title: 'Metal Gear Girl',
  category: 'Mythic',
  price: 30.09,
  isFavorite: false,
  createdAt: 1624533946000,
  theme: 'Halloween',
  tier: 'Premium',
  imageId: 8,
  author: {
    firstName: 'Dewie',
    lastName: 'Labeuil',
    email: 'dlabeuilv@nba.com',
    gender: 'Male',
    avatar: 'https://robohash.org/nihiltotamdolorem.png?size=100x100&set=set1',
    onlineStatus: 'idle',
  },
}

describe('ProductItem', () => {
  it('renders product information correctly', () => {
    render(<ProductItem product={mockProduct} />)

    // Check if title is rendered
    expect(screen.getByText('Metal Gear Girl')).toBeInTheDocument()

    // Check if price is rendered
    expect(screen.getByText('30.09 ETH')).toBeInTheDocument()

    // Check if category is rendered
    expect(screen.getByText('Mythic')).toBeInTheDocument()

    // Check if author name is rendered
    expect(screen.getByText('Dewie Labeuil')).toBeInTheDocument()

    // Check if images are rendered with correct alt texts
    expect(screen.getByAltText('ethereum currency symbol')).toBeInTheDocument()
  })

  it('links to the correct product page', () => {
    render(<ProductItem product={mockProduct} />)

    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('href', '/marketplace/1')
  })

  it('applies the correct theme class', () => {
    render(<ProductItem product={mockProduct} />)

    const wrapper = screen.getByTestId('product-wrapper')
    expect(wrapper).toHaveAttribute('data-theme', 'halloween')
  })
})
