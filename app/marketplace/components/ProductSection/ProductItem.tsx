import Link from 'next/link'

import { IconGlobe } from '@/components/icons/IconGlobe'
import { Button } from '@/components/ui/Button'
import { getImageUrl } from '@/helpers/getImageUrl'
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
