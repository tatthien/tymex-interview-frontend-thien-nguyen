import { removeUndefined } from '@/helpers/removeUndefined'
import type { ListResponse } from '@/types'
import type { Product } from '@/types/product'
import { useQuery } from '@tanstack/react-query'

export type GetProductsQueryParams = {
  _page?: string
  _per_page?: string
  _sort?: string
  tier?: string
  theme?: string
  category?: string
}

export function useGetProductsQuery(queryParams?: GetProductsQueryParams) {
  return useQuery({
    queryKey: ['products', queryParams],
    queryFn: async () => {
      const params: GetProductsQueryParams = Object.assign(
        {},
        {
          _page: '1',
          _per_page: '20',
          _sort: '-createdAt',
        },
        queryParams ? removeUndefined(queryParams) : {}
      )

      const queryStr = new URLSearchParams(params).toString()

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/products?${queryStr}`,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )

      if (!res.ok) {
        return null
      }

      const json = await res.json()

      return json as ListResponse<Product>
    },
    refetchInterval: 60 * 1000,
  })
}
