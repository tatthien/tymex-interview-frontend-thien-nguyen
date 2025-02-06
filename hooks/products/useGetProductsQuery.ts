import type { ListResponse } from '@/types'
import type { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'

type QueryParams = {
  _page?: string
  _per_page?: string
}

export function useGetProductsQuery(queryParams?: QueryParams) {
  return useQuery({
    queryKey: ['products', queryParams],
    queryFn: async () => {
      const params: QueryParams = Object.assign(
        {},
        {
          _page: '1',
          _per_page: '20',
        },
        queryParams
      )

      const queryStr = new URLSearchParams(params).toString()

      const res = await fetch(`http://localhost:5005/products?${queryStr}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      if (!res.ok) {
        return { success: false, data: null }
      }
      const json = await res.json()
      return { success: true, data: json as ListResponse<Product> }
    },
    refetchInterval: 60 * 1000,
  })
}
