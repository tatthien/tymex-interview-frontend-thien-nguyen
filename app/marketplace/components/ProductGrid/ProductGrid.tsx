'use client'

import { useEffect, useMemo, useState } from 'react'

import { Button } from '@/components/ui/Button'
import {
  GetProductsQueryParams,
  useGetProductsQuery,
} from '@/hooks/products/useGetProductsQuery'
import type { Product } from '@/types/product'

import { useProductFilter } from '../../providers/useProductFilter'
import { ProductItem } from '../ProductItem'
import { ProductItemSkeleton } from '../ProductItemSkeleton'

import styles from './ProductGrid.module.css'

export function ProductGrid() {
  const { query } = useProductFilter()

  const [products, setProducts] = useState<Product[]>([])
  const [pagination, setPagination] = useState<{
    pages: number
    items: number
  }>({
    pages: 0,
    items: 0,
  })
  const [isLoadingMore, setIsLoadingMore] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)

  const filterParams = useMemo(() => {
    const localQuery: GetProductsQueryParams = {
      _page: currentPage.toString(),
      _per_page: '20',
    }

    localQuery.category = query.category || undefined
    localQuery.tier = query.tier || undefined
    localQuery.theme = query.theme || undefined
    localQuery._sort = query._sort || undefined

    return localQuery
  }, [query, currentPage])

  const { data, isLoading, isFetched, isError } =
    useGetProductsQuery(filterParams)

  // Update products data
  // If is loading more, add new products to the end of the list
  // If is not loading more, replace the products
  useEffect(() => {
    if (data?.data) {
      setPagination({
        pages: data.pages,
        items: data.items,
      })

      setProducts((products) =>
        isLoadingMore ? [...products, ...data.data] : [...data.data]
      )
    }
  }, [data])

  // Reset loading more when new data is fetched
  useEffect(() => {
    if (isFetched) setIsLoadingMore(false)
  }, [isFetched])

  // Reset current page when filters changed
  useEffect(() => {
    setCurrentPage(1)
  }, [query])

  const handleLoadMore = () => {
    setIsLoadingMore(true)

    if (currentPage < pagination?.pages) {
      setCurrentPage((currentPage) => currentPage + 1)
    }
  }

  const renderLoadingSkeleton = () => {
    return new Array(20)
      .fill(null)
      .map((_, index) => (
        <ProductItemSkeleton key={`product-skeleton-${index}`} />
      ))
  }

  if (!isLoading && (!data || data?.data.length === 0)) {
    return (
      <div className={styles.nodata}>
        <p>No products found</p>
      </div>
    )
  }

  if (isError) {
    return (
      <div className={styles.nodata}>
        <p>Something went wrong! Please try again</p>
      </div>
    )
  }

  return (
    <>
      <div className={styles.grid}>
        {isLoading && !isLoadingMore && renderLoadingSkeleton()}

        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}

        {isLoadingMore && renderLoadingSkeleton()}
      </div>
      {currentPage < pagination?.pages && (
        <div className={styles.viewMore}>
          <Button type="button" onClick={handleLoadMore}>
            View more
          </Button>
        </div>
      )}
    </>
  )
}
