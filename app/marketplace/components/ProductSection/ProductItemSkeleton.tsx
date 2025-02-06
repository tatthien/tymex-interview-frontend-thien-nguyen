import { Skeleton } from '@/components/ui/Skeleton'

import styles from './ProductItem.module.css'

export function ProductItemSkeleton() {
  return (
    <div>
      <div className={styles.wrapper}>
        <Skeleton width="100%" height={250} radius={4} />
        <Skeleton width="100%" height={18} radius={4} />
        <div className={styles.author}>
          <Skeleton width={32} height={32} radius={32} />
          <Skeleton width={100} height={18} radius={4} />
        </div>
      </div>
    </div>
  )
}
