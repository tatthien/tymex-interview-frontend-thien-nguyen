import Link from 'next/link'

import { IconGlobe } from '@/components/icons/IconGlobe'
import { Button } from '@/components/ui/Button'
import type { Product } from '@/types/product'

import styles from './ProductItem.module.css'

export function ProductItem({ product }: { product: Product }) {
  const authorName = product.author.firstName + ' ' + product.author.lastName

  return (
    <Link href={`/marketplace/${product.id}`}>
      <div
        className={styles.wrapper}
        data-theme={product.theme.toLowerCase()}
        data-testid="product-wrapper"
      >
        <div>
          <div className={styles.imageWrapper}>
            <div className={styles.categoryWrapper}>
              <span className={styles.category}>{product.category}</span>
              <Button variant="ghost" size="icon">
                <IconGlobe />
              </Button>
            </div>
            <img
              className={styles.image}
              src={getImageUrl(product.imageId)}
              loading="lazy"
              alt={product.title}
            />
          </div>
          <div className={styles.info}>
            <h2 className={styles.title}>{product.title}</h2>
            <span className={styles.price}>
              <img
                src="/assets/ethereum.png"
                alt="ethereum currency symbol"
                loading="lazy"
                className={styles.currencySymbol}
              />
              {product.price} ETH
            </span>
          </div>
        </div>
        <div className={styles.author}>
          <div className={styles.authorAvatar}>
            <img src={product.author.avatar} alt={authorName} loading="lazy" />
          </div>
          <p className={styles.authorName}>{authorName}</p>
        </div>
      </div>
    </Link>
  )
}

// Get image url based on imageId.
// This is just a mock implementation.
function getImageUrl(imageId: number) {
  if (imageId <= 4) return '/assets/the-dj.webp'
  if (imageId <= 8) return '/assets/assassin.webp'
  if (imageId <= 12) return '/assets/mafia-england.webp'
  if (imageId <= 16) return '/assets/neon-guy.webp'
  if (imageId <= 20) return '/assets/bassketball-girl.webp'
  return '/assets/the-dj.webp'
}
