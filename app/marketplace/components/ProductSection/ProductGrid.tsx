'use client'

import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { useGetProductsQuery } from '@/hooks/products/useGetProductsQuery'
import { Product } from '@/types/product'

import { ProductItem } from './ProductItem'
import { ProductItemSkeleton } from './ProductItemSkeleton'

import styles from './ProductGrid.module.css'

export function ProductGrid() {
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

  const { data, isLoading, isFetched, isError } = useGetProductsQuery({
    _page: currentPage.toString(),
    _per_page: '20',
  })

  useEffect(() => {
    if (data?.data) {
      setPagination({
        pages: data.pages,
        items: data.items,
      })

      setProducts((products) => [...products, ...data.data])
    }
  }, [data])

  useEffect(() => {
    if (isFetched) setIsLoadingMore(false)
  }, [isFetched])

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
