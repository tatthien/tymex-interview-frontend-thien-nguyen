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

  const { data, isLoading, isFetched } = useGetProductsQuery({
    _page: currentPage.toString(),
    _per_page: '20',
  })

  useEffect(() => {
    if (data?.data) {
      setPagination({
        pages: data.data.pages,
        items: data.data.items,
      })

      setProducts((products) => [...products, ...data.data.data])
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
