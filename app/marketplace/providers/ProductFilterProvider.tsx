'use client'

import { createContext, useState } from 'react'

export type ProductFilterQuery = {
  category?: string
  tier?: string
  theme?: string
  _sort?: string
  price_gte?: string
  price_lte?: string
}

export type ProductFilterContextType = {
  query: ProductFilterQuery
  setQuery: React.Dispatch<React.SetStateAction<ProductFilterQuery>>
}

export const ProductFilterContext = createContext<ProductFilterContextType>({
  query: {},
  setQuery: () => {},
})

export function ProductFilterProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [query, setQuery] = useState<ProductFilterQuery>({})

  return (
    <ProductFilterContext.Provider value={{ query, setQuery }}>
      {children}
    </ProductFilterContext.Provider>
  )
}
